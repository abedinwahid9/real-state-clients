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

const PropertiesDetails = () => {
  const theme = useTheme(themeContext);

  return (
    <div>
      <Container sx={{ my: 5 }} maxWidth="xl">
        <Paper elevation={24} sx={{ borderRadius: 5, overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="550"
            sx={{ objectFit: "fill" }}
            image="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
            alt="Paella dish"
          />
        </Paper>{" "}
        <Paper elevation={24} sx={{ mt: 4, p: 4, borderRadius: 5 }}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h4" color="initial">
              Propertise Name
            </Typography>
            <Box>
              <Button
                sx={{ mr: 2, bgcolor: theme.palette.Third.main }}
                variant="contained"
              >
                Add to wishlist
              </Button>
              <Button
                sx={{ bgcolor: theme.palette.Third.main }}
                variant="contained"
              >
                Review
              </Button>
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
              Lizard wahid
            </Typography>
          </Box>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Typography mt>Price Range: $400 - $500</Typography>

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
                <Typography>4</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <img
                  src="https://preview.colorlib.com/theme/realestate2/img/svg_icon/bath.svg"
                  alt=""
                />
                <Typography>4</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <img
                  src="https://preview.colorlib.com/theme/realestate2/img/svg_icon/square.svg"
                  alt=""
                />
                <Typography>4 Sqft</Typography>
              </Box>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="h5" color="initial">
              Details
            </Typography>
            <Divider></Divider>
            <Typography mt={2} variant="body1" color={theme.palette.Third.main}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              illum numquam, iste aliquam id ad facere nesciunt mollitia
              repudiandae cupiditate ratione officia, voluptatum, cum a
              exercitationem architecto explicabo consectetur iusto?
            </Typography>
          </Box>
        </Paper>
        <Paper elevation={24} sx={{ mt: 4, p: 4, borderRadius: 5 }}>
          <Box mt={10}>
            <Typography variant="body1" color="initial">
              reviews
            </Typography>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default PropertiesDetails;
