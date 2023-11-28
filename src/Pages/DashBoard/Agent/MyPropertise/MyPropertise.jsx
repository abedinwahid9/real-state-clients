import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthProvider } from "../../../../AuthProvider/AuthContext";

const columns = [
  { id: "imgUrl", label: "Property image", minWidth: 170 },
  { id: "propertyTitle", label: "Property Title", minWidth: 170 },
  { id: "propertyLocation", label: "Property Location", minWidth: 170 },
  { id: "agentName", label: "Agent Name", minWidth: 170 },
  { id: "agentEmail", label: "Agent Email", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 170 },
  { id: "minPrice", label: "Min Price ", minWidth: 170 },
  { id: "maxPrice", label: "Max Price ", minWidth: 170 },
  { id: "actions", label: "Actions", minWidth: 170 },
];

const MyPropertise = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthProvider);

  // const agentEmail = "michael.brown@example.com";
  const agentEmail = "admin@gmail.com";

  const {
    data: propertise = [],
    isLoading: loading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["myaddedproperties", agentEmail],
    queryFn: async () => {
      const res = await axiosPublic.get(`/myaddedproperties/${user.email}`);
      return res.data;
    },
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handlePropertiseDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/propertise/${id}`).then((res) => {
          if (res.data.acknowledged) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper sx={{ width: "100%" }}>
      <SectionTitle title="My Properties"></SectionTitle>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isFetching ? (
              <TableRow>
                <TableCell colSpan={columns.length}>Loading...</TableCell>
              </TableRow>
            ) : (
              propertise
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row._id} hover role="checkbox" tabIndex={-1}>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === "imgUrl" ? (
                          <img
                            src={row[column.id]}
                            alt={row.title}
                            style={{
                              width: "80px",
                              height: "80px",
                              borderRadius: "50%",
                            }}
                          />
                        ) : column.id === "actions" ? (
                          <Box display="flex">
                            <Link to={`/dashboard/update/${row._id}`}>
                              <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                sx={{ mr: 2 }}
                              >
                                <EditIcon />
                              </Button>
                            </Link>
                            <Button
                              onClick={() => handlePropertiseDelete(row._id)}
                              variant="contained"
                              color="Third"
                              size="small"
                            >
                              <DeleteIcon />
                            </Button>
                          </Box>
                        ) : (
                          row[column.id]
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, { value: -1, label: "All" }]}
        component="div"
        count={propertise.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page:"
      />
    </Paper>
  );
};

export default MyPropertise;
