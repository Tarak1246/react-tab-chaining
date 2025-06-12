import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import sidebarMenu from "../sidebarConfig";

const Sidebar = ({ base }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openItems, setOpenItems] = useState({});

  const toggle = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNavigate = (to) => {
    if (location.pathname !== `/${base}/${to}`) {
      navigate(`/${base}/${to}`);
    }
  };

  const renderItem = (item) => {
    const fullPath = `/${base}/${item.path}`;
    const isActive = location.pathname === fullPath;

    if (item.children) {
      return (
        <div key={item.path}>
          <ListItemButton onClick={() => toggle(item.path)}>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: openItems[item.path] ? "bold" : "normal",
              }}
            />
            {openItems[item.path] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openItems[item.path]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              {item.children.map((child) => {
                const childPath = `${item.path}/${child.path.split("/").pop()}`;
                const isChildActive = location.pathname === `/${base}/${childPath}`;
                return (
                  <ListItemButton
                    key={child.path}
                    selected={isChildActive}
                    onClick={() => handleNavigate(child.path)}
                  >
                    <ListItemText primary={child.label} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </div>
      );
    }

    return (
      <ListItemButton
        key={item.path}
        selected={isActive}
        onClick={() => handleNavigate(item.path)}
      >
        <ListItemText primary={item.label} />
      </ListItemButton>
    );
  };

  const items = sidebarMenu[base] || [];

  return (
    <List dense>
      {items.map(renderItem)}
    </List>
  );
};

export default Sidebar;
