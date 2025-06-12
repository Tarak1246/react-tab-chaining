import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 48,
        bgcolor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "1px solid #ddd",
        zIndex: 1200,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 MyApp. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
