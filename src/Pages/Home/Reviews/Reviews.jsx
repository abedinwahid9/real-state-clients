import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReviewCard from "../../../Component/Card/ReviewCard/ReviewCard";
import { Box } from "@mui/material";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Parallax } from "react-parallax";
import useReviews from "../../../hooks/useReviews/UseReviews";
import CircularProgress from "@mui/material/CircularProgress";

const Reviews = () => {
  const [reviews, loading] = useReviews();

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
    },
  });

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

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
            {reviews.map((reviewItem) => {
              return (
                <div
                  key={reviewItem.id}
                  style={{ overflow: "hidden" }}
                  className="keen-slider__slide number-slide1"
                >
                  <ReviewCard reviewItem={reviewItem}></ReviewCard>
                </div>
              );
            })}
          </div>
        </Box>
      </Parallax>
    </>
  );
};

export default Reviews;
