import { Box, Container } from "@mui/material";
import Slider from "./Slider/Slider";
import SpecialSection from "./SpecialSection/SpecialSection";
import OurPropertisSection from "./OurPropertisSection/OurPropertisSection";
import CountSection from "../../Component/CountSection/CountSection";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <Box>
      <Slider></Slider>
      <Container sx={{ my: 3 }} maxWidth="xl">
        <SpecialSection></SpecialSection>
        <OurPropertisSection></OurPropertisSection>
      </Container>
      <CountSection></CountSection>
      <Container sx={{ my: 3 }} maxWidth="xl">
        <Reviews></Reviews>
      </Container>
    </Box>
  );
};

export default Home;
