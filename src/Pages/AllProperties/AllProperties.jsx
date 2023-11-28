import { Box, Container, Grid } from "@mui/material";
import SearchBar from "../../ShareComponent/SearchBar/SearchBar";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import PropertiesCard from "../../Component/Card/PropertiesCard/PropertiesCard";
import usePropertise from "../../hooks/usePropertise/usePropertise";
import CircularProgress from "@mui/material/CircularProgress";

const AllProperties = () => {
  const [propertise, loading] = usePropertise();

  if (loading && !Array.isArray(propertise)) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <SectionTitle title="All Properties"></SectionTitle>
      <Box my={5}>
        <SearchBar></SearchBar>
      </Box>
      <Grid my={5} container spacing={2}>
        {propertise.map((propertiseItem) => {
          return (
            <Grid key={propertiseItem._id} item xs={12} sm={6} md={4}>
              <PropertiesCard propertiseItem={propertiseItem}></PropertiesCard>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default AllProperties;
