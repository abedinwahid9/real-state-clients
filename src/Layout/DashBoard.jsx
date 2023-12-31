import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReviewsIcon from "@mui/icons-material/Reviews";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HouseIcon from "@mui/icons-material/House";
import { Avatar } from "@mui/material";
import { AuthProvider } from "../AuthProvider/AuthContext";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DashBoard = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const { user } = useContext(AuthProvider);

  const admin = user?.email === "admin@gmail.com" ? true : false;
  const agent = user?.email === "agent@gmail.com" ? true : false;
  const User = admin === false && agent === false;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const location = useLocation();

  useEffect(() => {
    // Check if the current location is the Dashboard page
    const isDashboardPage = location.pathname.includes("/dashboard");

    // Set the body background color to red if on the Dashboard page
    document.body.style.backgroundColor = isDashboardPage
      ? theme.palette.secondary.main
      : theme.palette.background.default;

    // Clean up the effect by resetting the body background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = theme.palette.background.default;
    };
  }, [location.pathname, theme.palette.background.default]);

  return (
    <Box>
      <Box maxWidth="100vw" minHeight="100vh" sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              DashBoard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <>
              {" "}
              <Avatar
                src="https://i.ibb.co/K22tnBV/Real-Estate-Symbols-Clipart-PNG-Images-Real-Estate-Logo-Real-Estate-Estate-Real-Estate-Logo-Icon-PNG.png"
                alt="Logo"
                sx={{
                  display: "flex",
                  height: "50px",
                  mr: "8px",
                }}
              />
              <Typography
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                HarborHomes
              </Typography>
            </>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <NavLink
                style={{ textDecoration: "none", color: "#000" }}
                to={`/dashboard/profile`}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="My Profile"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
              {User && (
                <>
                  <NavLink
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/dashboard/wishlists`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <FavoriteBorderIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Wishlist"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/dashboard/propertybought`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <HouseIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Property bought"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/dashboard/propertybought`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <ReviewsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="My reviews"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                </>
              )}
              {agent && (
                <>
                  <NavLink
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/dashboard/addproperty`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <AddHomeWorkIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Add Property"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/dashboard/myaddedproperties`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <HomeWorkIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="My added properties"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/dashboard/mysoldproperties`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <MonetizationOnIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="My sold properties"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/dashboard/requestedproperties`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <PostAddIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Requested properties"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                </>
              )}
              {admin && (
                <>
                  <NavLink
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/dashboard/manageproperties`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <AddHomeWorkIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Manage Properties"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/dashboard/manageusers`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <PersonAddAltIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Manage Users"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/dashboard/managereviews`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        <ReviewsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Manage reviews"
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                </>
              )}
            </ListItem>
          </List>
          <Divider />
          <NavLink style={{ textDecoration: "none", color: "#000" }} to={`/`}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ArrowBackIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </NavLink>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box my={6}>
            <Outlet></Outlet>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashBoard;
