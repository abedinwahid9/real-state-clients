/* eslint-disable react/prop-types */
import { Divider, Typography } from "@mui/material";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "60px" },
          textAlign: "center",
          fontWeight: 600,
        }}
        my={2}
      >
        {title}
      </Typography>
      <Divider sx={{ width: "80%", mx: "auto" }} />
    </div>
  );
};

export default SectionTitle;
