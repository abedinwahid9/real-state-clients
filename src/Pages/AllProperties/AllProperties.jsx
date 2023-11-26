import { Box, Container, Grid } from "@mui/material";
import SearchBar from "../../ShareComponent/SearchBar/SearchBar";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import PropertiesCard from "../../Component/Card/PropertiesCard/PropertiesCard";

const AllProperties = () => {
  return (
    <Container maxWidth="xl">
      <SectionTitle title="All Properties"></SectionTitle>
      <Box my={5}>
        <SearchBar></SearchBar>
      </Box>
      <Grid my={5} container spacing={2}>
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
    </Container>
  );
};

export default AllProperties;
