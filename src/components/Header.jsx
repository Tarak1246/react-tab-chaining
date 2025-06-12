import { AppBar, Toolbar, Tabs, Tab, Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const tabs = ["dashboard", "reports", "settings", "help"];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = tabs.findIndex(tab => location.pathname.includes(tab));

  return (
    <AppBar position="fixed" color="default" elevation={2}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src="/logo.jpg" alt="Logo" style={{ height: 32 }} />
          <Typography variant="h6" fontWeight="bold">
            Epic Pharma
          </Typography>
        </Box>

        {/* Center: Tabs */}
        <Tabs
          value={currentTab === -1 ? false : currentTab}
          onChange={(e, val) => navigate(`/${tabs[val]}`)}
          textColor="primary"
          indicatorColor="primary"
        >
          {tabs.map(tab => (
            <Tab key={tab} label={tab.charAt(0).toUpperCase() + tab.slice(1)} />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
