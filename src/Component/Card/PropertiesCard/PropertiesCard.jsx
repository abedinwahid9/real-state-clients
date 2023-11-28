/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActionArea, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import { themeContext } from "../../../main";
import VerifiedIcon from "@mui/icons-material/Verified";
import CustomButton from "../../../ShareComponent/Button/CustomButton";
import { Link } from "react-router-dom";

const PropertiesCard = ({ propertiseItem }) => {
  const theme = useTheme(themeContext);

  const {
    _id,
    agentName,
    bathroom,
    bed,
    imgUrl,
    maxPrice,
    minPrice,
    propertyLocation,
    propertyTitle,
    squareFeet,
  } = propertiseItem;

  const agentImg = "";

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
                textAlign: "left",
              }}
            >
              <Avatar
                alt="Cindy Baker"
                src={
                  agentImg
                    ? agentImg
                    : "https://i.ibb.co/Y4gwSqy/2150761166-removebg-preview.png"
                }
              />
              <Typography
                sx={{ margin: 0, fontWeight: 600 }}
                gutterBottom
                variant="h6"
                component="div"
              >
                {agentName}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                textAlign: "center",
              }}
            >
              <img
                style={{
                  width: "20px",
                  height: "20px",
                }}
                src="https://preview.colorlib.com/theme/realestate2/img/svg_icon/location.svg"
              />{" "}
              <Typography
                sx={{ margin: 0, fontSize: "10px" }}
                gutterBottom
                component="div"
              >
                {propertyLocation}
              </Typography>
            </Box>
          </Stack>

          <Box
            height="80px"
            display="flex"
            justifyContent="space-between"
            mt={1}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, wordSpacing: 2 }}
              color={`${theme.palette.primary.main}`}
            >
              {propertyTitle}
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <VerifiedIcon /> Verified
            </Typography>
          </Box>
          <Box display="flex" mt={2}>
            <Typography
              mr={2}
              sx={{ fontWeight: 600, fontSize: "16px", wordSpacing: 2 }}
              color={`${theme.palette.primary.main}`}
            >
              Range:
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                fontWeight: 600,
                alignItems: "center",
                gap: 1,
              }}
            >
              ${minPrice} - ${maxPrice}
            </Typography>
          </Box>
          <Box color={theme.palette.primary.main} display="flex" gap={3} mt={1}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <img
                src="https://preview.colorlib.com/theme/realestate2/img/svg_icon/bed.svg"
                alt=""
              />
              <Typography>{bed}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <img
                src="https://preview.colorlib.com/theme/realestate2/img/svg_icon/bath.svg"
                alt=""
              />
              <Typography>{bathroom}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <img
                src="https://preview.colorlib.com/theme/realestate2/img/svg_icon/square.svg"
                alt=""
              />
              <Typography>{squareFeet} Sqft</Typography>
            </Box>
          </Box>
        </CardContent>{" "}
        <Link to={`/propertiesdetails/${_id}`}>
          <CustomButton color={theme.palette.Third.main} title="Details" />
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default PropertiesCard;
