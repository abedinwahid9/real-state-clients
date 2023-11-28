import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import AddHomeIcon from "@mui/icons-material/AddHome";
import useAxiosPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthProvider } from "../../../../AuthProvider/AuthContext";

const AddProperty = () => {
  const { user } = useContext(AuthProvider);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const { register, reset, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const imgHosingApi = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const userImg =
    user.photoURL ||
    "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=";
  const status = "pending";

  const onSubmit = async (data) => {
    const imageFile = { image: data.imgUrl[0] };
    const res = await axiosPublic.post(imgHosingApi, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const addPropertise = {
        ...data,
        userImg,
        status,
        maxPrice: parseFloat(data.maxPrice),
        minPrice: parseFloat(data.minPrice),
        bed: parseFloat(data.bed),
        Bathroom: parseFloat(data.Bathroom),
        squrefeet: parseFloat(data.squrefeet),
        imgUrl: res.data.data.display_url,
      };

      console.log(addPropertise);

      const addPropertiseRes = await axiosPublic.post(
        "/addpropertise",
        addPropertise
      );
      if (addPropertiseRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.propertyTitle} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <Box mt={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>
              <Box p={2}>
                <Typography variant="h5">
                  {" "}
                  <AddHomeIcon /> Add New Product
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
                      defaultValue={user.displayName}
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
                      defaultValue={user.email}
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

          {/* Image Upload */}
          <Grid item xs={12}>
            <Paper
              component="div"
              onDragOver={(event) => event.preventDefault()}
              className="MuiBox-root dropzone"
              role="button"
              tabIndex="0"
            >
              <Box
                p={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <CloudUploadIcon fontSize="large" color="Third" />
                <Typography variant="body1" className="MuiBox-root">
                  Drop your images here or
                </Typography>
                <Typography variant="h6" className="MuiBox-root">
                  Select click to browse
                </Typography>
                <Button
                  component="label"
                  sx={{ color: "#fff" }}
                  variant="contained"
                  color="Third"
                >
                  Upload
                  <VisuallyHiddenInput
                    required
                    {...register("imgUrl")}
                    type="file"
                  />
                </Button>
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
                Create New Product
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddProperty;
