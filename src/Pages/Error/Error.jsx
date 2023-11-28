import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <img
        style={{ width: "500px", height: "500px" }}
        src="https://i.ibb.co/89NcnTt/error.jpg"
        alt="error"
      />

      <Typography my={3}>Here is helpful link:</Typography>
      <NavLink href="/">Home</NavLink>
    </Box>
  );
};

export default Error;
