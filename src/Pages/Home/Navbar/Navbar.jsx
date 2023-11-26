/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const pages = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "All Properties",
    link: "allproperties",
  },
  {
    name: "Login",
    link: "login",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const LogoAndName = ({ styleLogo, styleName }) => (
    <>
      <Avatar
        src="https://i.ibb.co/K22tnBV/Real-Estate-Symbols-Clipart-PNG-Images-Real-Estate-Logo-Real-Estate-Estate-Real-Estate-Logo-Icon-PNG.png"
        alt="Logo"
        sx={styleLogo}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          ...styleName,
          fontSize: { xs: "12px", sm: "18px", md: "26px" },
        }}
      >
        HarborHomes
      </Typography>
    </>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoAndName
            styleLogo={{
              display: { xs: "none", md: "flex" },
              height: "100px",
              mr: "8px",
            }}
            styleName={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", xl: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page.name}
                  style={{ textDecoration: "none", color: "#000" }}
                  to={`/${page.link}`}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography sx={{ fontWeight: 600 }} textAlign="center">
                      {page.name}
                    </Typography>
                  </MenuItem>{" "}
                </NavLink>
              ))}
            </Menu>
          </Box>
          <LogoAndName
            styleLogo={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            styleName={{
              mr: 2,
              display: { sm: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <NavLink
                onClick={handleCloseNavMenu}
                key={page.name}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
                to={`/${page.link}`}
              >
                <Typography sx={{ mx: 1, fontWeight: 600 }}>
                  {page.name}
                </Typography>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  to="/dashboard/profile"
                  style={{ textDecoration: "none ", color: "#000" }}
                >
                  <Typography textAlign="center">Dashboard</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
