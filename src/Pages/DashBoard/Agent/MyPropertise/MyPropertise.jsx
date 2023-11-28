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
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";

const columns = [
  { id: "img", label: "Property image", minWidth: 170 },
  { id: "title", label: "Property Title", minWidth: 170 },
  { id: "location", label: "Property Location", minWidth: 170 },
  { id: "agentName", label: "Agent Name", minWidth: 170 },
  { id: "agentEmail", label: "Agent Email", minWidth: 170 },
  { id: "status", label: " status", minWidth: 170 },
  { id: "priceRange", label: "Price Range", minWidth: 170 },
  { id: "actions", label: "Actions", minWidth: 170 },
];

const createData = (
  img,
  title,
  location,
  agentName,
  agentEmail,
  status,
  priceRange
) => {
  return { img, title, location, agentName, agentEmail, status, priceRange };
};

const MyPropertise = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = [
    createData(
      "https://i.ibb.co/BqwGdbS/pngegg-1-1.png",
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
    createData(
      "Luxury Apartment",
      "Downtown",
      "John Doe",
      "john@example.com",
      "$500,000"
    ),
  ];

  return (
    <Paper sx={{ width: "100%" }}>
      <SectionTitle title="My Propertise"></SectionTitle>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.title} hover role="checkbox" tabIndex={-1}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === "img" ? (
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
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            sx={{ mr: 2 }}
                          >
                            <EditIcon />
                          </Button>
                          <Button
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
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, { value: -1, label: "All" }]}
        component="div"
        count={rows.length}
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
