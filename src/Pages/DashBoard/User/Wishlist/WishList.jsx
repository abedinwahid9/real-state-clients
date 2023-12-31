import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import { useContext } from "react";
import { AuthProvider } from "../../../../AuthProvider/AuthContext";

const columns = [
  { id: "propertyImg", label: "Property image", minWidth: 170 },
  { id: "propertyTitle", label: "Property Title", minWidth: 170 },
  { id: "propertyLocation", label: "Property Location", minWidth: 170 },
  { id: "agentName", label: "Agent Name", minWidth: 170 },
  { id: "agentEmail", label: "Agent Email", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 170 },
  { id: "minPrice", label: "Min Price ", minWidth: 170 },
  { id: "maxPrice", label: "Max Price ", minWidth: 170 },
  { id: "actions", label: "Actions", minWidth: 170 },
];

//   - Make an offer button.
// - remove button.

const WishList = () => {
  const AxiosPublic = useAxiosPublic();
  const { user } = useContext(AuthProvider);

  const {
    data: wishlist = [],
    isLoading: loading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["wishlists"],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/wishlist/${user.email}`);

      return res.data;
    },
  });

  console.log(wishlist);

  return (
    <Paper sx={{ width: "100%" }}>
      <SectionTitle title="Your Wishlist"></SectionTitle>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isFetching ? (
              <TableRow>
                <TableCell colSpan={columns.length}>Loading...</TableCell>
              </TableRow>
            ) : (
              wishlist.map((row) => (
                <TableRow key={row.title} hover role="checkbox" tabIndex={-1}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === "propertyImg" ? (
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
                            onClick={() =>
                              handleStatusUpdate(row._id, row.status)
                            }
                            variant="contained"
                            color="primary"
                            size="small"
                            sx={{ mr: 2 }}
                          >
                            Offer
                          </Button>
                          <Button
                            variant="contained"
                            color="Third"
                            size="small"
                          >
                            Remove
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
    </Paper>
  );
};

export default WishList;
