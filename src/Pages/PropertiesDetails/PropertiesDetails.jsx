import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { themeContext } from "../../main";
import ReviewCard from "../../Component/Card/ReviewCard/ReviewCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import ReviewModal from "../../Component/ReviewModal/ReviewModal";
import { useContext } from "react";
import { AuthProvider } from "../../AuthProvider/AuthContext";
import Swal from "sweetalert2";

const PropertiesDetails = () => {
  const theme = useTheme(themeContext);
  const params = useParams();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthProvider);

  const { data: propertise = [], isPending: loading } = useQuery({
    queryKey: ["propertiseItem"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/propertise/${params.id}`);
      return res.data;
    },
  });
  const {
    _id,
    agentName,
    agentEmail,
    bathroom,
    bed,
    imgUrl,
    maxPrice,
    minPrice,
    status,
    propertyLocation,
    propertyTitle,
    squareFeet,
    propertiseDescription,
  } = propertise;
  const {
    data: reviewsId = [],
    isPending: reviewloading,
    refetch,
  } = useQuery({
    queryKey: ["reviewsByid"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allreviews/details/${params.id}`);
      return res.data;
    },
  });

  const propertiseInfo = {
    propertyImg: imgUrl,
    propertyTitle,
    propertyLocation,
    agentName,
    agentEmail,
    status,
    minPrice,
    maxPrice,
    id: propertise._id,
  };

  const userInfo = {
    userEmail: user.email,
    photoUrl: user.photoURL,
  };

  const handleWishlist = async () => {
    const wishlist = { ...propertiseInfo, userInfo };

    console.log(wishlist);

    const reviewRes = await axiosPublic.post("/wishlist", { ...wishlist });

    if (reviewRes.data.insertedId) {
      Swal.fire({
        // position: "top-center",
        icon: "success",
        title: ` ${propertyTitle} add wishlist.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  if (loading && reviewloading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <Container sx={{ my: 5 }} maxWidth="xl">
        <Paper elevation={24} sx={{ borderRadius: 5, overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="550"
            sx={{ objectFit: "fill" }}
            image={imgUrl}
            alt={propertyTitle}
          />
        </Paper>{" "}
        <Paper elevation={24} sx={{ mt: 4, p: 4, borderRadius: 5 }}>
          <Box
            display="flex"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
            justifyContent="space-between"
          >
            <Typography variant="h4" color="initial">
              {propertyTitle}
            </Typography>
            <Box display="flex">
              <Button
                onClick={handleWishlist}
                sx={{ mr: 2, bgcolor: theme.palette.Third.main }}
                variant="contained"
              >
                Add to wishlist
              </Button>
              <ReviewModal
                refetch={refetch}
                id={_id}
                propertyTitle={propertyTitle}
                styles={{ p: 2, bgcolor: theme.palette.Third.main }}
              ></ReviewModal>
            </Box>
          </Box>
          <Box
            mt={2}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              textAlign: "left",
            }}
          >
            <Avatar
              alt="Cindy Baker"
              src="https://i.ibb.co/K9wdZ1V/pexels-amir-esrafili-6274712.jpg"
            />
            <Typography
              sx={{ margin: 0, fontWeight: 600 }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {agentName}
            </Typography>
          </Box>
          <Box
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
            mt={2}
            display="flex"
            justifyContent="space-between"
          >
            <Typography mt>
              Price Range: ${minPrice} - ${maxPrice}
            </Typography>

            <Box
              color={theme.palette.primary.main}
              display="flex"
              gap={3}
              mt={1}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <img
                  src="https://preview.colorlib.com/theme/realestate2/img/svg_icon/bed.svg"
                  alt=""
                />
                <Typography>{bed}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <img
                  src="https://preview.colorlib.com/theme/realestate2/img/svg_icon/bath.svg"
                  alt=""
                />
                <Typography>{bathroom}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <img
                  src="https://preview.colorlib.com/theme/realestate2/img/svg_icon/square.svg"
                  alt=""
                />
                <Typography>{squareFeet} Sqft</Typography>
              </Box>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography fontWeight={700}>
              Location: {propertyLocation}
            </Typography>
            <Typography mt={2} variant="h5" color="initial">
              Details
            </Typography>
            <Divider></Divider>
            <Typography mt={2} variant="body1" color={theme.palette.Third.main}>
              {propertiseDescription}
            </Typography>
          </Box>
        </Paper>
        <Paper elevation={24} sx={{ mt: 4, p: 4, borderRadius: 5 }}>
          <Box mt={5}>
            <Typography
              mb={2}
              textAlign="center"
              variant="h3"
              fontWeight={600}
              color="initial"
            >
              Reviews
            </Typography>
            <Divider></Divider>
            <Box my={3}>
              {reviewsId.length === 0 ? (
                <Typography textAlign="center" variant="h4" fontWeight={600}>
                  No reviews
                </Typography>
              ) : (
                <div
                  style={{ padding: 5 }}
                  ref={sliderRef}
                  className="keen-slider"
                >
                  {reviewsId.map((reviewItem) => {
                    return (
                      <Paper
                        key={reviewItem.id}
                        sx={{ boxShadow: 2 }}
                        className="keen-slider__slide number-slide1"
                      >
                        <ReviewCard reviewItem={reviewItem}></ReviewCard>
                      </Paper>
                    );
                  })}
                </div>
              )}
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default PropertiesDetails;
