import { ThemeContext, useTheme } from "@emotion/react";
import { Avatar, Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const footerHeadingStyle = {
  marginBottom: "20px",
};

const navigationListStyle = {
  listStyle: "none",
  padding: "0",
};

const navigationLinkStyle = {
  textDecoration: "none",
  color: "#fff",
};

const copyrightTextStyle = {
  color: "#f09b3b",
  marginTop: "20px",
  textAlign: "center",
};

const Footer = () => {
  const theme = useTheme(ThemeContext);

  return (
    <footer
      style={{
        backgroundColor: ` ${theme.palette.primary.main}`,
        padding: "50px 0",
        color: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-around"
          container
          flexWrap="wrap"
          gap={2}
        >
          <Box>
            <div className="mb-5">
              <Typography variant="h3" style={footerHeadingStyle}>
                About Homeland
              </Typography>
              <Box>
                <Typography display="flex" gap={1}>
                  <AlternateEmailIcon></AlternateEmailIcon>HarborHomes@gmail.com
                </Typography>
                <Typography mt={1} display="flex" gap={1}>
                  <CallIcon></CallIcon> 01XXXXXXXXXXX
                </Typography>
                <Typography mt={1} display="flex" gap={1}>
                  <FmdGoodIcon></FmdGoodIcon> Dhaka,Bangladesh
                </Typography>
              </Box>
            </div>
          </Box>
          <Box>
            <div className="row mb-5">
              <Box>
                <Typography variant="h3" style={footerHeadingStyle}>
                  Navigations
                </Typography>
              </Box>
              <Box gap={5} display="flex">
                {" "}
                <Box>
                  <ul style={navigationListStyle}>
                    <li>
                      <a href="#" style={navigationLinkStyle}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" style={navigationLinkStyle}>
                        Buy
                      </a>
                    </li>
                    <li>
                      <a href="#" style={navigationLinkStyle}>
                        Rent
                      </a>
                    </li>
                    <li>
                      <a href="#" style={navigationLinkStyle}>
                        Properties
                      </a>
                    </li>
                  </ul>
                </Box>
                <Box>
                  <ul style={navigationListStyle}>
                    <li>
                      <a href="#" style={navigationLinkStyle}>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" style={navigationLinkStyle}>
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" style={navigationLinkStyle}>
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" style={navigationLinkStyle}>
                        Terms
                      </a>
                    </li>
                  </ul>
                </Box>
              </Box>
            </div>
          </Box>
          <Box>
            <Typography variant="h3" style={footerHeadingStyle}>
              Follow Us
            </Typography>
            <Box justifyContent="space-between" display="flex">
              <a href="#">
                <FacebookIcon
                  style={{ color: "#f09b3b", fontSize: "40px" }}
                ></FacebookIcon>
              </a>
              <a href="#">
                <TwitterIcon
                  style={{ color: "#f09b3b", fontSize: "40px" }}
                ></TwitterIcon>
              </a>
              <a href="#">
                <InstagramIcon
                  style={{ color: "#f09b3b", fontSize: "40px" }}
                ></InstagramIcon>
              </a>
              <a href="#">
                <LinkedInIcon
                  style={{ color: "#f09b3b", fontSize: "40px" }}
                ></LinkedInIcon>
              </a>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          gap={2}
          mt={5}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="body2" style={copyrightTextStyle}>
            Copyright ©{new Date().getFullYear()} All rights reserved | This
            template is made with{" "}
          </Typography>
          <Box display="flex" alignItems="center">
            <Avatar
              src="https://i.ibb.co/K22tnBV/Real-Estate-Symbols-Clipart-PNG-Images-Real-Estate-Logo-Real-Estate-Estate-Real-Estate-Logo-Icon-PNG.png"
              alt="Logo"
              sx={{
                display: "flex",
                height: "100px",
                mr: "8px",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              HarborHomes
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
