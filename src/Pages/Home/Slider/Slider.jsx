// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Container } from "@mui/material";
import Stack from "@mui/material/Stack";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { CardMedia, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { themeContext } from "../../../main";

const Slider = () => {
  const styleTitle = {
    textAlign: "center",

    fontWeight: 700,
    padding: "10% 20px 10% 20px",
  };

  const theme = useTheme(themeContext);
  console.log();

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Box sx={{ bgcolor: `${theme.palette.secondary.main}` }}>
          <Container maxWidth="xl">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              // spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Typography
                sx={{ fontSize: { xs: "25px", md: "50px" } }}
                style={styleTitle}
              >
                <span style={{ fontSize: "60px" }}>🏰 </span>
                <br />
                Elegance Unveiled: Find Your Exclusive Residence Today.
              </Typography>
              <CardMedia
                sx={{
                  margin: "none",
                  width: "100%",
                  padding: "2px 20px 0  0",
                  height: { md: 600, xs: 300 },
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                image="https://i.ibb.co/Y4gwSqy/2150761166-removebg-preview.png"
              />
            </Stack>
          </Container>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ bgcolor: `${theme.palette.secondary.main}` }}>
          <Container maxWidth="xl">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              // spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <CardMedia
                sx={{
                  order: { xs: 2, sm: 1 },
                  margin: "none",
                  width: "100%",
                  padding: "2px 20px 0  0",
                  height: { md: 600, xs: 300 },
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                image="https://i.ibb.co/d4Sj4RM/house-3d-rendering-design-removebg-preview.png"
              />
              <Typography
                sx={{
                  fontSize: { xs: "25px", md: "50px" },
                  order: { xs: 1, sm: 2 },
                }}
                style={styleTitle}
              >
                <span style={{ fontSize: "60px" }}>🏡 </span>
                <br />
                Explore our curated collection of exquisite properties
              </Typography>
            </Stack>
          </Container>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
