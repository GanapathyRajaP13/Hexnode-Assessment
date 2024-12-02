import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";

const MultiPlatformManagement = () => {
  const platforms = [
    {
      name: "android",
      description:
        "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
      imgSrc:
        "https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/android.jpg",
    },
    {
      name: "ios",
      description:
        "Manage and secure iOS devices with ease. Enforce policies, remotely configure settings, and keep your iPhones and iPads compliant with organizational needs.",
      imgSrc:
        "https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/iOS.jpg",
    },
    {
      name: "macos",
      description:
        "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
      imgSrc:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FmacOS.jpg&w=640&q=90",
    },
    {
      name: "windows",
      description:
        "Manage and secure iOS devices with ease. Enforce policies, remotely configure settings, and keep your iPhones and iPads compliant with organizational needs.",
      imgSrc:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2Fwindows.jpg&w=640&q=90",
    },
    {
      name: "tvos",
      description:
        "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
      imgSrc:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FtvOS.jpg&w=640&q=90",
    },
    {
      name: "fireos",
      description:
        "Manage and secure iOS devices with ease. Enforce policies, remotely configure settings, and keep your iPhones and iPads compliant with organizational needs.",
      imgSrc:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FfireOS.jpg&w=640&q=90",
    },
  ];

  const [expanded, setExpanded] = useState("android");

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    if (panel !== expanded) {
      setExpanded(isExpanded ? panel : false);
    }
  };

  return (
    <Box py={8} bgcolor="#f7f7f7" id="platforms" height={600}>
      <Box maxWidth="1300px" mx="auto" px={3}>
        <Typography
          fontSize="28px"
          fontWeight="bold"
          align="center"
          gutterBottom
          color="#020a19"
          fontFamily="mulish"
        >
          Multi-platform Endpoint Management
        </Typography>
        <Typography
          fontSize="12px"
          align="center"
          color="#333333"
          fontFamily="mulish"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Devices of varying platforms? Hexnode thrives in a diverse
          environment.
        </Typography>

        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "565px",
                overflow: "hidden",
                borderRadius: "20px",
                position: "relative",
                justifyItems: "right",
              }}
            >
              <Box sx={{ height: "430px", width: "400px" }}>
                <img
                  src={platforms.find((item) => item.name === expanded).imgSrc}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <div
              style={{
                maxWidth: "400px",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <Accordion
                expanded={expanded === "android"}
                onChange={handleAccordionChange("android")}
                disableGutters
                sx={{
                  "&.Mui-expanded": {
                    margin: "0",
                  },
                  padding: "2px",
                  boxShadow: "none",
                  backgroundColor: expanded === "android" ? "white" : "#F7F7F7",
                  borderRadius: "20px",
                }}
              >
                <AccordionSummary
                  aria-controls="android-content"
                  id="android-header"
                >
                  <Typography>Android</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      pb: 2,
                    }}
                  >
                    Remotely deploy, manage, monitor and secure Android devices
                    in your organization. Set compliance benchmarks and leverage
                    Android Enterprise to it's full capabilities.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      color: "#E64769",
                      fontWeight: "700",
                    }}
                  >
                    Try Hexnode on your endpoints
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "ios"}
                onChange={handleAccordionChange("ios")}
                disableGutters
                sx={{
                  "&.Mui-expanded": {
                    margin: "0",
                  },
                  padding: "2px",
                  boxShadow: "none",
                  backgroundColor: expanded === "ios" ? "white" : "#F7F7F7",
                  borderRadius: "20px",
                }}
              >
                <AccordionSummary aria-controls="ios-content" id="ios-header">
                  <Typography>iOS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      pb: 2,
                    }}
                  >
                    Manage, secure, and monitor iOS devices in your
                    organization. With Hexnode's ABM and ASM integration, deploy
                    devices and apps with ease.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      color: "#E64769",
                      fontWeight: "700",
                    }}
                  >
                    Try Hexnode on your endpoints
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "macos"}
                onChange={handleAccordionChange("macos")}
                disableGutters
                sx={{
                  "&.Mui-expanded": {
                    margin: "0",
                  },
                  padding: "2px",
                  boxShadow: "none",
                  backgroundColor: expanded === "macos" ? "white" : "#F7F7F7",
                  borderRadius: "20px",
                }}
              >
                <AccordionSummary
                  aria-controls="macos-content"
                  id="macos-header"
                >
                  <Typography>macOS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      pb: 2,
                    }}
                  >
                    Leverage Hexnode's desktop management capabilities to their
                    fullest. Securely deploy and manage macOS devices in bulk
                    with Hexnode UEM.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      color: "#E64769",
                      fontWeight: "700",
                    }}
                  >
                    Try Hexnode on your endpoints
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "windows"}
                onChange={handleAccordionChange("windows")}
                disableGutters
                sx={{
                  "&.Mui-expanded": {
                    margin: "0",
                  },
                  padding: "2px",
                  boxShadow: "none",
                  backgroundColor: expanded === "windows" ? "white" : "#F7F7F7",
                  borderRadius: "20px",
                }}
              >
                <AccordionSummary
                  aria-controls="windows-content"
                  id="windows-header"
                >
                  <Typography>Windows</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      pb: 2,
                    }}
                  >
                    Spearhead modern PC management in your organization with
                    Hexnode. Set limit's and monitor PC health and compliance
                    remotely with Hexnode UEM.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      color: "#E64769",
                      fontWeight: "700",
                    }}
                  >
                    Try Hexnode on your endpoints
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "tvos"}
                onChange={handleAccordionChange("tvos")}
                disableGutters
                sx={{
                  "&.Mui-expanded": {
                    margin: "0",
                  },
                  padding: "2px",
                  boxShadow: "none",
                  backgroundColor: expanded === "tvos" ? "white" : "#F7F7F7",
                  borderRadius: "20px",
                }}
              >
                <AccordionSummary aria-controls="tvos-content" id="tvos-header">
                  <Typography>tvOS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      pb: 2,
                    }}
                  >
                    Remotely manage and secure tvOS devices with Hexnode.
                    Display your brand aesthetics and custom messages on tvOS
                    devices with Hexnode UEM.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      color: "#E64769",
                      fontWeight: "700",
                    }}
                  >
                    Try Hexnode on your endpoints
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "fireos"}
                onChange={handleAccordionChange("fireos")}
                disableGutters
                sx={{
                  "&.Mui-expanded": {
                    margin: "0",
                  },
                  padding: "2px",
                  boxShadow: "none",
                  backgroundColor: expanded === "fireos" ? "white" : "#F7F7F7",
                  borderRadius: "20px",
                }}
              >
                <AccordionSummary
                  aria-controls="fireos-content"
                  id="fireos-header"
                >
                  <Typography>FireOS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      pb: 2,
                    }}
                  >
                    Enroll Amazon Fire tablets, phones and e-readers in Hexnode
                    UEM to manage them all from a single console.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "mulish",
                      fontSize: "14px",
                      color: "#E64769",
                      fontWeight: "700",
                    }}
                  >
                    Try Hexnode on your endpoints
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MultiPlatformManagement;
