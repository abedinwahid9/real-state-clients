import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";

const columns = [
  { id: "propertyTitle", label: "Property Title", minWidth: 170 },
  { id: "propertyLocation", label: "Property Location", minWidth: 170 },
  { id: "agentName", label: "Agent Name", minWidth: 170 },
  { id: "agentEmail", label: "Agent Email", minWidth: 170 },
  { id: "minPrice", label: "Min Price ", minWidth: 170 },
  { id: "maxPrice", label: "Max Price ", minWidth: 170 },
  { id: "actions", label: "Actions", minWidth: 170 },
];

const ManagePropertise = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const axiosPublic = useAxiosPublic();

  const {
    data: propertise = [],
    isLoading: loading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["manageproperties"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allpropertise");

      return res.data;
    },
  });

  const handleStatusUpdate = async (id, status) => {
    let update = "";
    if (status === "pending") {
      update = "verify";
    } else {
      update = "pending";
    }

    const updateStatus = {
      status: update,
    };

    const res = await axiosPublic.put(`/statusupdate/${id}`, updateStatus);
    refetch();
    console.log(res);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
      <SectionTitle title="Manage Propertise"></SectionTitle>
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
                  <TableRow key={row.title} hover role="checkbox" tabIndex={-1}>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === "actions" ? (
                          <Box display="flex">
                            <Button
                              onClick={() =>
                                handleStatusUpdate(row._id, row.status)
                              }
                              variant="contained"
                              color="primary"
                              size="small"
                              sx={{ mr: 2 }}
                            >
                              {row.status === "pending" ? "Pending" : "Verify"}
                            </Button>
                            <Button
                              variant="contained"
                              color="Third"
                              size="small"
                            >
                              Reject
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

export default ManagePropertise;
