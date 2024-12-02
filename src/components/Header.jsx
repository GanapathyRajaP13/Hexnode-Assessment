import { useState } from "react";
import HexLogo from "./HexLogo";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        top: 0,
        zIndex: 999,
        padding: "0px",
      }}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <AppBar
        position="static"
        sx={{
          height: "64px",
          backgroundColor: isHovered ? "#ffffff" : "#020A19",
          width: "100%",
          paddingLeft: "60px",
          paddingRight: "60px",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <HexLogo isHovered={isHovered} />

            <Box sx={{ display: "flex", gap: 4 }}>
              {["Why Hexnode", "Features", "Platforms", "Customers"].map(
                (item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: isHovered ? "#020A19" : "#ffffff",
                      cursor: "pointer",
                      paddingTop: "8px",
                      fontSize: "15px",
                      fontFamily: "Mulish",
                    }}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E60000",
              color: "#FFFFFF",
              "&:hover": { backgroundColor: "#dd0735" },
            }}
          >
            <Typography
              sx={{
                padding: "5px 13px",
                fontSize: "14px",
              }}
            >
              14 DAY FREE TRIAL
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
