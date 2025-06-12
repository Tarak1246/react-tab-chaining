import { Box, IconButton, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import BreadcrumbsBar from "./BreadcrumbsBar";
import Footer from "./Footer"; // ✅ Make sure path is correct
import { Outlet } from "react-router-dom";
import { useState } from "react";

const MainLayout = ({ subTabs, base }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        pt: 8, // for fixed header
        pb: 6, // for fixed footer
        overflow: "hidden",
      }}
    >
      {/* Breadcrumb bar */}
      <Paper elevation={1} sx={{ px: 3, py: 1, flexShrink: 0 }}>
        <BreadcrumbsBar />
      </Paper>

      {/* Scrollable main content */}
      <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        {sidebarOpen ? (
          <Box
            sx={{
              width: 220,
              bgcolor: "#fafafa",
              borderRight: "1px solid #eee",
              px: 2,
              py: 2,
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              size="small"
              onClick={() => setSidebarOpen(false)}
              sx={{ alignSelf: "flex-end", mb: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Sidebar base={base} subTabs={subTabs} />
          </Box>
        ) : (
          <Box
            sx={{
              width: 50,
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              pt: 2,
            }}
          >
            <IconButton
              size="small"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}

        {/* Right-side content with scroll */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            px: 3,
            py: 2,
            bgcolor: "#fff",
          }}
        >
          <Outlet />
        </Box>
      </Box>

      {/* Fixed footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
