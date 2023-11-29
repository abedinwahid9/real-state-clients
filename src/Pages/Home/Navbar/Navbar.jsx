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
import CircularProgress from "@mui/material/CircularProgress";
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../AuthProvider/AuthContext";
import { Divider } from "@mui/material";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, loading, signOutUser } = useContext(AuthProvider);

  const navigate = useNavigate();

  const pages = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "All Properties",
      link: "allproperties",
    },
    !user && {
      name: "Login",
      link: "login",
    },
  ];

  const isAbsoluteUrl = (url) => /^[a-z][a-z0-9+.-]*:/.test(url);
  const checkProfileImg = isAbsoluteUrl(user?.photoURL);

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

  const handleLogout = () => {
    signOutUser()
      .then((result) => {
        console.log("logout", result);
        navigate("/login");
      })
      .catch((err) => console.error(err));
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

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

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

          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={user?.displayName}
                    src={
                      checkProfileImg
                        ? user.photoURL
                        : "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                    }
                  />
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
                <MenuItem>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="Primary"
                    textAlign="center"
                  >
                    {user?.displayName}
                  </Typography>
                </MenuItem>
                <Divider></Divider>{" "}
                <Link
                  to="/dashboard/profile"
                  style={{ textDecoration: "none ", color: "#000" }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
