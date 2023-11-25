import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import CountUp from "react-countup";
import { themeContext } from "../../main";

const CountSection = () => {
  const theme = useTheme(themeContext);

  return (
    <Box sx={{ my: 3, bgcolor: `${theme.palette.secondary.main}` }}>
      <Container maxWidth="xl">
        <Box
          flexWrap="wrap"
          my={8}
          py={5}
          display="flex"
          justifyContent="space-evenly"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Typography color={theme.palette.primary.main} variant="h1">
              <CountUp end={305} />
            </Typography>
            <Typography fontWeight="700" variant="h5">
              Area <br /> Population
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography color={theme.palette.primary.main} variant="h1">
              <CountUp end={1090} />
            </Typography>
            <Typography fontWeight="700" variant="h5">
              Total
              <br /> Properties
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography color={theme.palette.primary.main} variant="h1">
              <CountUp end={209} />
            </Typography>
            <Typography fontWeight="700" variant="h5">
              Average
              <br /> House
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CountSection;
