import React, { useState } from "react";
import "./App.css";
import { Box, Button } from "@mui/material";

/*
1. npx create-react-app apps --template typescript
2. install mui: npm install @mui/material @emotion/react @emotion/styled
3. Try to use Mui sample components
*/
function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: 5,
        alignItems: "center",
      }}
    >
      <Button variant="contained" sx={{ width: "300px", m: 2 }}>
        <a href="/passport">Passport Apps</a>
      </Button>
      <Button variant="contained" sx={{ width: "300px", m: 2 }}>
        <a href="/bus">Bus Apps</a>
      </Button>
    </Box>
  );
}

export default App;
