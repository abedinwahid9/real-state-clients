import { Box, Grid } from "@mui/material";
import PropertiesCard from "../../../Component/Card/PropertiesCard/PropertiesCard";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import CustomButton from "../../../ShareComponent/Button/CustomButton";

const OurPropertisSection = () => {
  return (
    <div>
      <SectionTitle title={"Our Properties"}></SectionTitle>
      <Grid mt={5} container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <PropertiesCard></PropertiesCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PropertiesCard></PropertiesCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PropertiesCard></PropertiesCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PropertiesCard></PropertiesCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PropertiesCard></PropertiesCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PropertiesCard></PropertiesCard>
        </Grid>
      </Grid>
      <Box mt={3} mx="auto" sx={{ width: "100%" }}>
        <CustomButton title="See All"></CustomButton>
      </Box>
    </div>
  );
};

export default OurPropertisSection;
