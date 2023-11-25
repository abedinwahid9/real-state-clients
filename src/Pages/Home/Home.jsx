import { Box, Container } from "@mui/material";
import Slider from "./Slider/Slider";
import SpecialSection from "./SpecialSection/SpecialSection";

const Home = () => {
  return (
    <Box>
      <Slider></Slider>
      <Container sx={{ my: 3 }} maxWidth="xl">
        <SpecialSection></SpecialSection>
      </Container>
    </Box>
  );
};

export default Home;
