/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

const CustomButton = ({ color, title }) => {
  return (
    <Button
      sx={{
        bgcolor: color,
        width: "100%",
        height: "50px",
        borderRadius: "0 0 0 0",
      }}
      variant="contained"
    >
      {title}
    </Button>
  );
};

export default CustomButton;
