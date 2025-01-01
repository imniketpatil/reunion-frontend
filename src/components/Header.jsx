import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useNavigate } from "react-router-dom";
import client_url from "../utils/config";
// import { toast } from "react-toastify";

const settings = ["Profile", "Logout"];

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleMenuItemClick = (setting) => {
    if (setting === "Logout") {
    }
    handleCloseUserMenu();
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#333" }}>
      <Box sx={{ flexGrow: 1, mx: "10px" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Reunion Task Manager
          </Typography>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Reunion
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              onClick={handleOpenUserMenu}
              aria-controls={anchorElUser ? "menu-appbar" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElUser)}
              sx={{ p: 0 }}
            >
              <AccountCircleRoundedIcon
                sx={{ color: "white", fontSize: "2rem" }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{ mt: "45px" }}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleMenuItemClick(setting)}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Header;
