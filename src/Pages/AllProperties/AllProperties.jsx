import { Box, Container, Grid, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import PropertiesCard from "../../Component/Card/PropertiesCard/PropertiesCard";
import usePropertise from "../../hooks/usePropertise/usePropertise";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";

const AllProperties = () => {
  const [propertise, loading] = usePropertise();
  const [filteredPropertise, setFilteredPropertise] = useState([]);

  useEffect(() => {
    setFilteredPropertise(propertise);
  }, [propertise]);

  const handleSearch = (query) => {
    console.log(query);
    const filtered = propertise.filter(
      (property) =>
        property.propertyTitle.toLowerCase().includes(query.toLowerCase()) ||
        property.propertyLocation.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPropertise(filtered);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <SectionTitle title="All Properties" />
      <Box my={5}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          onChange={(e) => handleSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton
                style={{
                  backgroundColor: "#f0f0f0",
                  borderRadius: "0 4px 4px 0",
                }}
                aria-label="search"
              >
                <SearchIcon style={{ color: "gray" }} />
              </IconButton>
            ),
            style: { borderRadius: "4px", backgroundColor: "#f0f0f0" },
          }}
        />
      </Box>
      <Grid my={5} container spacing={2}>
        {filteredPropertise.map((property) => (
          <Grid key={property._id} item xs={12} sm={6} md={4}>
            <PropertiesCard propertiseItem={property} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllProperties;
