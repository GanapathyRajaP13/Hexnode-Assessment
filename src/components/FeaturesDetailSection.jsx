import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";

const FeaturesDetail = () => {
  return (
    <Box sx={{ pl: 7, pr: 7, pb: 6, backgroundColor: "white" }}>
      <Typography
        fontSize={42}
        fontWeight={700}
        fontFamily="mulish"
        align="center"
        color="black"
        padding="3% 15%"
      >
        Powerful endpoint management, built for the devices you choose
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Box mb={2}>
              <Box
                component="img"
                src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fzero-touch.jpg&w=384&q=100"
                alt="First Image"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Typography
              fontSize={30}
              fontWeight={700}
              fontFamily="mulish"
              component="h3"
              paddingBottom={2}
            >
              Zero-touch Enrollment
            </Typography>
            <Typography fontFamily="mulish" textAlign="left" fontSize={18}>
              Onboard endpoints and users with minimal user intervention.
              Provision devices and set up configurations well before the user
              gets their hands on.
            </Typography>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Box mb={2}>
              <Box
                component="img"
                src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fautomation.jpg&w=384&q=100"
                alt="First Image"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Typography
              fontSize={30}
              fontWeight={700}
              fontFamily="mulish"
              component="h3"
              paddingBottom={2}
            >
              Automation
            </Typography>
            <Typography fontFamily="mulish" textAlign="left" fontSize={18}>
              Automate endpoint compliance with dynamic grouping and breeze
              through day-to-day IT tasks with scripting capabilities. Hexnode
              also allows the creation of automated reports.
            </Typography>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Box mb={2}>
              <Box
                component="img"
                src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fremote-access.jpg&w=384&q=100"
                alt="First Image"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Typography
              fontSize={30}
              fontWeight={700}
              fontFamily="mulish"
              component="h3"
              paddingBottom={2}
            >
              Remote Access Management
            </Typography>
            <Typography fontFamily="mulish" textAlign="left" fontSize={18}>
              Hexnode UEM enables the enterprise to manage every single device
              in the corporate ecosystem for optimal and secure operation.
            </Typography>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Box mb={2}>
              <Box
                component="img"
                src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fendpoint-security.jpg&w=384&q=100"
                alt="First Image"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Typography
              fontSize={30}
              fontWeight={700}
              fontFamily="mulish"
              component="h3"
              paddingBottom={2}
            >
              Endpoint Security and Compliance
            </Typography>
            <Typography fontFamily="mulish" textAlign="left" fontSize={18}>
              Hexnode helps you maintain compliance with international
              regulatory bodies and set up custom rules for compliance within
              your business for security purposes.
            </Typography>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Box mb={2}>
              <Box
                component="img"
                src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fintegrations.jpg&w=384&q=100"
                alt="First Image"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Typography
              fontSize={30}
              fontWeight={700}
              fontFamily="mulish"
              component="h3"
              paddingBottom={2}
            >
              Integrations
            </Typography>
            <Typography fontFamily="mulish" textAlign="left" fontSize={18}>
              Hexnode's various integrations make it easy to fit into your
              current endpoint ecosystem. These integrations include Azure AD,
              Okta, Android Enterprise, Apple School and Business manager, and
              many more enterprise and technology integrations.
            </Typography>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Box mb={2}>
              <Box
                component="img"
                src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fapp-management.jpg&w=384&q=100"
                alt="First Image"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Typography
              fontSize={30}
              fontWeight={700}
              fontFamily="mulish"
              component="h3"
              paddingBottom={2}
            >
              App Management
            </Typography>
            <Typography fontFamily="mulish" textAlign="left" fontSize={18}>
              Set up a bespoke app store, enable mandatory apps, and ensure
              endpoints come equipped with all the required applications, custom
              enterprise apps included.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesDetail;
