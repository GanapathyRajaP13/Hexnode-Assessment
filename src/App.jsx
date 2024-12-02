import React from "react";
import Header from "./components/Header";
import { Box } from "@mui/material";
import UEMScreen from "./pages/UEMScreen";

const App = () => {
  return (
    <>
      <Header />
      <Box>
        <UEMScreen />
      </Box>
    </>
  );
};

export default App;
