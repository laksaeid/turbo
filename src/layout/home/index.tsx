import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{
        bgcolor:grey[300],
        py:8,
        borderRadius:'0 0 10px 10px'
      }}>
      <Typography  variant="h4" align="center"> turbo </Typography>
      </Box>
      <Box
        sx={{
          flex: "1 1 0%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor:grey[500],
          borderRadius:'10px 10px 0 0',
          mt:1
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default HomeLayout;
