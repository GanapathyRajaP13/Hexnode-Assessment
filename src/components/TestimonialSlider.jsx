import React, { useState } from "react";
import { Box, Typography, Grid, Button, Paper } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    name: "Justin Modrak",
    company: "Technology Coordinator East Troy Community School District",
    quote: "Hexnode is of great value. Works great with Android and iOS!",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=1920&q=80",
  },
  {
    name: "Dalibor Kruljac",
    company: "KAMELEYA LTD",
    quote:
      "Most complete MDM solution I found, and I tested many of them, including major names",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1920&q=80",
  },
  {
    name: "Justin Modrak",
    company: "East Troy Community School District",
    quote: "It seemed to be in-line with everything we were looking at.",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=1920&q=80",
  },
];

const companyLogos = [
  "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Flogos%2Fdark-logo%2Fgroup1-automotive.png&w=1920&q=75",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg",
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "white",
        paddingTop: "80px",
        paddingBottom:"80px"
      }}
    >
      <Typography variant="h4" gutterBottom color="black" pb={5}>
        What our customers say
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          sx={{
            position: "absolute",
            left: 70,
            zIndex: 1,
            minWidth: 60,
            height: 60,
            backgroundColor: "#F7F7F7",
            "&:hover": {
              opacity: 0.8,
            },
            borderRadius: "12px",
          }}
        >
          <Box
            component="img"
            src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg"
            alt="previous arrow"
            sx={{
              width: 12,
              height: "auto",
              opacity: currentIndex === 0 ? 0.2 : 0.75,
              "&:hover": {
                opacity: 1,
              },
            }}
          />
        </Button>

        <Paper
          elevation={3}
          sx={{
            display: "flex",
            borderRadius: "22px",
            maxWidth: 950,
            height: 300,
            textAlign: "left",
            overflow: "hidden",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Box
            component="img"
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            sx={{
              width: 320,
              height: 300,
              objectFit: "contain",
            }}
          />

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "mulish",
                fontWeight: "bold",
                padding: "20px 50px",
              }}
            >
              "{testimonials[currentIndex].quote}"
            </Typography>
            <Box
              backgroundColor="grey"
              sx={{
                fontStyle: "mulish",
                fontWeight: "bold",
                padding: "20px 50px",
                marginTop: "110px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", fontStyle: "mulish" }}
              >
                {testimonials[currentIndex].name}
              </Typography>
              <Typography variant="caption" fontFamily="mulish">
                {testimonials[currentIndex].company}
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Button
          onClick={handleNext}
          disabled={currentIndex === testimonials.length - 1}
          sx={{
            position: "absolute",
            right: 70,
            zIndex: 1,
            minWidth: 60,
            height: 60,
            backgroundColor: "#F7F7F7",
            "&:hover": {
              opacity: 0.8,
            },
            borderRadius: "12px",
          }}
        >
          <Box
            component="img"
            src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg"
            alt="previous arrow"
            sx={{
              width: 12,
              height: "auto",
              opacity: currentIndex === testimonials.length - 1 ? 0.2 : 0.75,
              "&:hover": {
                opacity: 1,
              },
            }}
          />
        </Button>
      </Box>

      <Grid container spacing={2} sx={{ mt: 4, justifyContent: "center" }}>
        {/* {companyLogos.map((logo, index) => (
          <Grid item key={index}>
            <Box
              component="img"
              src={logo}
              alt={`Logo ${index + 1}`}
              sx={{ height: 60, width: "auto" }}
            />
          </Grid>
        ))} */}
        <Box
          sx={{
            overflow: "hidden", // Hide the overflow outside the container
            width: "80%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            mt: 4,
          }}
        >
          {/* Animation Container */}
          <Box
            sx={{
              display: "flex",
              animation: "scroll 200s linear infinite", // CSS animation for continuous scrolling
              "@keyframes scroll": {
                "0%": { transform: "translateX(0)" }, // Start position
                "100%": { transform: "translateX(-100%)" },
              },
            }}
          >
            {/* Duplicate the logos array to create a looping effect */}
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <Box
                key={index}
                component="img"
                src={logo}
                alt={`Logo ${index + 1}`}
                sx={{
                  height: 60,
                  width: "auto",
                  margin: "0 20px", // Space between logos
                }}
              />
            ))}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default TestimonialCarousel;
