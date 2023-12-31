import { Box, Grid } from "@mui/material";
import PropertiesCard from "../../../Component/Card/PropertiesCard/PropertiesCard";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import CustomButton from "../../../ShareComponent/Button/CustomButton";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import usePropertise from "../../../hooks/usePropertise/usePropertise";

const OurPropertisSection = () => {
  const [propertise, loading] = usePropertise();

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <SectionTitle title={"Our Properties"}></SectionTitle>
      <Grid mt={5} container spacing={2}>
        {propertise.slice(0, 6).map((propertiseItem) => {
          return (
            <Grid key={propertiseItem._id} item xs={12} sm={6} md={4}>
              <PropertiesCard propertiseItem={propertiseItem}></PropertiesCard>
            </Grid>
          );
        })}
      </Grid>
      <Box mt={3} mx="auto" sx={{ width: "100%" }}>
        <Link to="/allproperties">
          <CustomButton title="See All"></CustomButton>
        </Link>
      </Box>
    </div>
  );
};

export default OurPropertisSection;
