import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReviewCard from "../../../Component/Card/ReviewCard/ReviewCard";
import { Box } from "@mui/material";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
// import "./styles.css";

const Reviews = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <>
      <SectionTitle title="Clients Reviews"></SectionTitle>
      <Box
        py={10}
        mt={5}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        style={{
          backgroundImage:
            "url(https://i.ibb.co/mXHY2KJ/jason-dent-w3e-Fhq-Xjk-ZE-unsplash-1.jpg)",
        }}
      >
        <div ref={sliderRef} className="keen-slider">
          <div
            style={{ overflow: "hidden" }}
            className="keen-slider__slide number-slide1"
          >
            <ReviewCard></ReviewCard>
          </div>
          <div className="keen-slider__slide number-slide2">
            {" "}
            <ReviewCard></ReviewCard>
          </div>
          <div className="keen-slider__slide number-slide3">
            {" "}
            <ReviewCard></ReviewCard>
          </div>
          <div className="keen-slider__slide number-slide4">
            {" "}
            <ReviewCard></ReviewCard>
          </div>
          <div className="keen-slider__slide number-slide5">
            {" "}
            <ReviewCard></ReviewCard>
          </div>
          <div className="keen-slider__slide number-slide6">
            {" "}
            <ReviewCard></ReviewCard>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Reviews;
