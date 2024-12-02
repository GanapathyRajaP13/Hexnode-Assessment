import React, { useState } from "react";
import { Box, Typography, Button, TextField, Divider } from "@mui/material";
import FeatureGrid from "./FeatureSection.jsx";

const HeroSection = () => {
  const [hover, setHover] = useState({
    policy: false,
    kiosk: false,
    device: false,
  });

  const handleMouseEnter = (key) => {
    setHover((prevState) => ({ ...prevState, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHover((prevState) => ({ ...prevState, [key]: false }));
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#020A19",
          color: "#ffffff",
          padding: "40px 60px",
          gap: "40px",
        }}
      >
        <Box sx={{ maxWidth: "600px" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#9da3af",
              marginBottom: "10px",
              fontFamily: "Mulish",
            }}
          >
            Unified Endpoint Management
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "48px",
              color: "#FFFFFF",
              fontWeight: 700,
              marginBottom: "20px",
              fontFamily: "Mulish",
            }}
          >
            Gain control and visibility over your endpoints
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#BFC1C5",
              marginBottom: "30px",
              lineHeight: "1.8",
              fontFamily: "Mulish",
            }}
          >
            Hexnode's UEM solution allows you to simplify endpoint management
            and free up IT. Focus on the big picture while Hexnode works on the
            details.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Email"
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "4px",
                width: "280px",
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(221 7 53)",
                color: "#ffffff",
                fontWeight: "bold",
                padding: "15px 30px",
                fontFamily: "Mulish",
                "&:hover": { backgroundColor: "#BB022A" },
              }}
            >
              LET'S TRY IT OUT!
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "620px",
              height: "480px",
            }}
          >
            <Box
              component="img"
              src="https://static.hexnode.com/v2/assets/img/ads-pages/banner/banner.jpg"
              alt="First Image"
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              onMouseEnter={() => handleMouseEnter("policy")}
              onMouseLeave={() => handleMouseLeave("policy")}
              sx={{
                position: "absolute",
                top: "14%",
                left: "6%",
                backgroundColor: "#FCD598",
                color: "#000000",
                fontWeight: 500,
                padding: "1px 3px",
                borderRadius: "21px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
                transition: "all 0.8s ease-in-out",
                zIndex: 9999,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: hover.policy ? "0%" : "-100%",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
                  transition: "left 0.5s ease-in-out",
                },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40px"
                height="40px"
                fill="#4caf50"
                style={{ position: "relative" }}
              >
                <circle cx="12" cy="12" r="10" fill="white" />
                <path
                  d="M4 12l4 4 8-8"
                  stroke="#D28C26"
                  strokeWidth="1.5"
                  fill="none"
                  transform="scale(0.6)"
                  transform-origin="center"
                />
              </svg>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Mulish",
                  paddingRight: "10px",
                  position: "relative",
                }}
              >
                Password policy applied
              </Typography>
            </Box>
            <Box
              onMouseEnter={() => handleMouseEnter("kiosk")}
              onMouseLeave={() => handleMouseLeave("kiosk")}
              sx={{
                position: "absolute",
                top: "200px",
                right: "-35px",
                backgroundColor: "#C3E1E7",
                color: "#000000",
                fontWeight: 500,
                padding: "1px 3px",
                borderRadius: "21px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
                transition: "all 0.8s ease-in-out",
                zIndex: 9999,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: hover.kiosk ? "0%" : "-100%",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
                  transition: "left 0.5s ease-in-out",
                },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40px"
                height="40px"
                fill="#4caf50"
                style={{ position: "relative" }}
              >
                <circle cx="12" cy="12" r="10" fill="white" />
                <path
                  d="M4 12l4 4 8-8"
                  stroke="#48B0C5"
                  strokeWidth="1.5"
                  fill="none"
                  transform="scale(0.6)"
                  transform-origin="center"
                />
              </svg>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Mulish",
                  paddingRight: "10px",
                  position: "relative",
                }}
              >
                TvOS Kiosk Active
              </Typography>
            </Box>
            <Box
              component="img"
              src="https://static.hexnode.com/v2/assets/img/ads-pages/banner/baner.png"
              alt="Second Image"
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            />
          </Box>

          <Box
            onMouseEnter={() => handleMouseEnter("device")}
            onMouseLeave={() => handleMouseLeave("device")}
            sx={{
              position: "absolute",
              bottom: "14%",
              left: "40%",
              backgroundColor: "#BCDCBE",
              color: "#000000",
              fontWeight: 500,
              padding: "1px 3px",
              borderRadius: "21px",
              display: "flex",
              alignItems: "center",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "all 0.8s ease-in-out",
              zIndex: 9999,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: hover.device ? "0%" : "-100%",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                transition: "left 0.5s ease-in-out",
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40px"
              height="40px"
              fill="#4caf50"
              style={{ position: "relative" }}
            >
              <circle cx="12" cy="12" r="10" fill="white" />
              <path
                d="M4 12l4 4 8-8"
                stroke="#35943B"
                strokeWidth="1.5"
                fill="none"
                transform="scale(0.6)"
                transform-origin="center"
              />
            </svg>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Mulish",
                paddingRight: "10px",
                position: "relative",
              }}
            >
              Device Enrolled
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#1A1A2E",
          color: "#FFFFFF",
          padding: "20px 40px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
            padding: "0 80px",
            cursor: "pointer",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <img
            src="https://static.hexnode.com/v2/assets/img/accolades/idc.png"
            alt="IDC Logo"
            style={{ width: "80px", marginBottom: "10px" }}
          />
          <Typography variant="body2">
            Hexnode is listed as a leader and a major player in IDC MarketScape
            UEM Vendors Assessment Reports 2024.
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            margin: "0 20px",
          }}
        />

        <Box
          sx={{
            flex: 1,
            textAlign: "left",
            padding: "10px 80px",
            cursor: "pointer",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <img
            src="https://static.hexnode.com/v2/assets/img/accolades/gartner.png"
            alt="IDC Logo"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <Typography variant="body2">
            Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic
            Quadrant for Unified Endpoint Management tools 2022.
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            margin: "0 20px",
          }}
        />
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
            padding: "0 50px",
            cursor: "pointer",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <img
            src="https://static.hexnode.com/v2/assets/img/accolades/forrester.png"
            alt="IDC Logo"
            style={{ width: "150px", marginBottom: "10px" }}
          />
          <Typography variant="body2">
            Forrester includes Hexnode as a Notable vendor in The Unified
            Endpoint Management Landscape, Q3 2023.
          </Typography>
        </Box>
      </Box>
      <FeatureGrid />
    </Box>
  );
};

export default HeroSection;
