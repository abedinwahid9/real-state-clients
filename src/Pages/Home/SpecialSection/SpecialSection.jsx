import { Stack, Box } from "@mui/material";
import Marquee from "react-fast-marquee";

const SpecialSection = () => {
  return (
    <Marquee>
      <Stack
        spacing={{ sm: 5, md: 4 }}
        direction="row"
        useFlexGap
        sx={{
          my: 5,
          justifyContent: "space-evenly",
          gap: 10,
          alignItems: "end",
        }}
      >
        {" "}
        <Box
          style={{
            width: "120px",
            height: "100%",
            objectFit: "fill",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "70px",
          }}
        >
          <img
            style={{
              filter:
                "  invert(37%) sepia(14%) saturate(19%) hue-rotate(358deg) brightness(99%) contrast(92%)",
            }}
            src="https://preview.colorlib.com/theme/azenta/img/partner/partner-1.png.webp"
            alt=""
          />
        </Box>
        <Box
          style={{
            width: "120px",
            height: "100%",
            objectFit: "fill",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "70px",
          }}
        >
          <img
            style={{
              filter:
                "  invert(37%) sepia(14%) saturate(19%) hue-rotate(358deg) brightness(99%) contrast(92%)",
            }}
            src="https://preview.colorlib.com/theme/azenta/img/partner/partner-2.png.webp"
            alt=""
          />
        </Box>
        <Box
          style={{
            width: "120px",
            height: "100%",
            objectFit: "fill",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "70px",
          }}
        >
          <img
            style={{
              filter:
                "  invert(37%) sepia(14%) saturate(19%) hue-rotate(358deg) brightness(99%) contrast(92%)",
            }}
            src="https://preview.colorlib.com/theme/azenta/img/partner/partner-3.png.webp"
            alt=""
          />
        </Box>
        <Box
          style={{
            width: "120px",
            height: "50%",
            objectFit: "fill",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "70px",
          }}
        >
          <img
            style={{
              filter:
                "  invert(37%) sepia(14%) saturate(19%) hue-rotate(358deg) brightness(99%) contrast(92%)",
            }}
            src="https://preview.colorlib.com/theme/azenta/img/partner/partner-4.png.webp"
            alt=""
          />
        </Box>
        <Box
          style={{
            width: "120px",
            height: "100%",
            objectFit: "fill",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "70px",
          }}
        >
          <img
            style={{
              filter:
                "  invert(37%) sepia(14%) saturate(19%) hue-rotate(358deg) brightness(99%) contrast(92%)",
            }}
            src="https://preview.colorlib.com/theme/azenta/img/partner/partner-5.png.webp"
            alt=""
          />
        </Box>
      </Stack>
    </Marquee>
  );
};

export default SpecialSection;
