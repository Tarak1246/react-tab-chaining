import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const BreadcrumbsBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link color="inherit" onClick={() => navigate("/")} underline="hover" sx={{ cursor: "pointer" }}>
          Home
        </Link>
      ) : (
        <Typography>Home</Typography>
      )}
      {pathnames.map((val, index) => {
        const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={val}>{val}</Typography>
        ) : (
          <Link key={val} onClick={() => navigate(pathTo)} underline="hover" sx={{ cursor: "pointer" }}>
            {val}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsBar;
