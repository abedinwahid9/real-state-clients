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

import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import useReviews from "../../../../hooks/useReviews/UseReviews";

const columns = [
  { id: "propertyId", label: "Property Id", minWidth: 170 },
  { id: "propertyTitle", label: "Property Title", minWidth: 170 },
  { id: "reviewerName", label: "Reviewer Name", minWidth: 170 },
  { id: "review", label: "Agent Name", minWidth: 170 },
  { id: "reviewtime", label: "Review Time", minWidth: 170 },
  { id: "actions", label: "Actions", minWidth: 170 },
];

const ReviewsManage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [reviews, loading, refetch, isFetching] = useReviews();

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
      <SectionTitle title="All Reviews"></SectionTitle>
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
              reviews
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.title} hover role="checkbox" tabIndex={-1}>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === "actions" ? (
                          <Box display="flex">
                            <Button
                              variant="contained"
                              color="Third"
                              size="small"
                            >
                              Delete
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
        count={reviews.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page:"
      />
    </Paper>
  );
};

export default ReviewsManage;
