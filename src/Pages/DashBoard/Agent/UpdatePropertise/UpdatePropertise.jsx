import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import AddHomeIcon from "@mui/icons-material/AddHome";
import useAxiosPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";

const UpdatePropertise = () => {
  const { register, reset, handleSubmit } = useForm();

  const params = useParams();

  const axiosPublic = useAxiosPublic();

  const {
    data: propertise = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["propertiseItem"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/propertise/${params.id}`);
      return res.data;
    },
  });

  console.log(propertise);

  const {
    agentName,
    agentEmail,
    bathroom,
    bed,
    maxPrice,
    minPrice,
    propertyLocation,
    propertyTitle,
    squareFeet,
    propertiseDescription,
  } = propertise;

  const onSubmit = async (data) => {
    const updatePropertise = {
      ...data,
      maxPrice: parseFloat(data.maxPrice),
      minPrice: parseFloat(data.minPrice),
      bed: parseFloat(data.bed),
      Bathroom: parseFloat(data.Bathroom),
      squrefeet: parseFloat(data.squrefeet),
    };

    axiosPublic
      .put(`/update/${params.id}`, { ...updatePropertise })
      .then((data) => {
        if (data.data.acknowledged) {
          refetch();
          Swal.fire("food update success ");
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
    <Box mt={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>
              <Box p={2}>
                <Typography variant="h5">
                  <AddHomeIcon /> Update Product
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={1}>
              <Box p={2}>
                <Grid container spacing={2}>
                  {/* property title */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      defaultValue={propertyTitle}
                      required
                      label="Property title"
                      variant="outlined"
                      {...register("propertyTitle")}
                    />
                  </Grid>

                  {/* location */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      defaultValue={propertyLocation}
                      required
                      label="Property location"
                      variant="outlined"
                      {...register("propertyLocation")}
                    />
                  </Grid>

                  {/* agent name*/}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Agent Name"
                      defaultValue={agentName}
                      inputProps={{ readOnly: true }}
                      variant="outlined"
                      {...register("agentName")}
                    />
                  </Grid>
                  {/* Agentemail*/}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Agent Email"
                      defaultValue={agentEmail}
                      inputProps={{ readOnly: true }}
                      {...register("agentEmail")}
                      variant="outlined"
                    />
                  </Grid>

                  {/* Price range*/}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("maxPrice")}
                      fullWidth
                      required
                      defaultValue={maxPrice}
                      type="number"
                      InputProps={{ inputProps: { min: 1 } }}
                      label="Max Price"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("minPrice")}
                      fullWidth
                      required
                      defaultValue={minPrice}
                      type="number"
                      InputProps={{ inputProps: { min: 1 } }}
                      label="Min Price"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      {...register("bed")}
                      fullWidth
                      required
                      defaultValue={bed}
                      type="number"
                      InputProps={{ inputProps: { min: 1 } }}
                      label="Bed"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      {...register("Bathroom")}
                      fullWidth
                      required
                      defaultValue={bathroom}
                      type="number"
                      InputProps={{ inputProps: { min: 1 } }}
                      label="Bathroom"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      {...register("squrefeet")}
                      fullWidth
                      required
                      defaultValue={squareFeet}
                      type="number"
                      InputProps={{ inputProps: { min: 1 } }}
                      label="Squre feet"
                      variant="outlined"
                    />
                  </Grid>

                  {/* propertise Description */}
                  <Grid item xs={12}>
                    <TextField
                      multiline
                      minRows={3}
                      fullWidth
                      defaultValue={propertiseDescription}
                      required
                      label="Propertise Description"
                      {...register("propertiseDescription")}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Submit Buttons */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between">
              <Button
                sx={{ color: "#fff" }}
                type="submit"
                fullWidth
                variant="contained"
                color="Third"
              >
                Update Product
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default UpdatePropertise;
