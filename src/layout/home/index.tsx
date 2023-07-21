import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" align="center"> turbo </Typography>
      <Box
        sx={{
          flex: "1 1 0%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default HomeLayout;
