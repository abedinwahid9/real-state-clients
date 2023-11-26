import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReviewCard from "../../../Component/Card/ReviewCard/ReviewCard";
import { Box } from "@mui/material";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Parallax } from "react-parallax";

const Reviews = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",

    breakpoints: {
      "(min-width: 500px)": {
        slides: {
          perView: 1,
          spacing: 50,
        },
      },
      "(min-width: 780px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
    },
  });

  return (
    <>
      <SectionTitle title="Clients Reviews"></SectionTitle>

      <Parallax
        bgImage="https://i.ibb.co/mXHY2KJ/jason-dent-w3e-Fhq-Xjk-ZE-unsplash-1.jpg"
        bgImageAlt="the cat"
        strength={500}
        blur={1}
      >
        <Box py={10} mt={5}>
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
      </Parallax>
    </>
  );
};

export default Reviews;
