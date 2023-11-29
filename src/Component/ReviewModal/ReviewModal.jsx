/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthProvider } from "../../AuthProvider/AuthContext";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

const ReviewModal = ({ styles, propertyTitle, id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useContext(AuthProvider);
  const { register, reset, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const reviewData = {
      propertyId: id,
      propertyTitle: propertyTitle,
      reviewerName: user.displayName,
      reviewerEmail: user.email,
      reviewerImage: user.photoURL,
      review: data.review,
    };

    const reviewRes = await axiosPublic.post("/addreviews", { ...reviewData });

    if (reviewRes.data.insertedId) {
      handleClose();
      reset();
      Swal.fire({
        // position: "top-center",
        icon: "success",
        title: `Thanks for ${propertyTitle} review.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <Button sx={styles} variant="contained" onClick={handleOpen}>
        Review
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SectionTitle title="Your Review"></SectionTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography
              mt={2}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Property Title : {propertyTitle}
            </Typography>
            <TextField
              sx={{ mt: 2 }}
              multiline
              {...register("review")}
              minRows={3}
              fullWidth
              label="your review"
            />{" "}
            <Button
              sx={{ color: "#fff", mt: 2 }}
              type="submit"
              fullWidth
              variant="contained"
              color="Third"
            >
              submit review
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewModal;
