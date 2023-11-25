import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const siteFooterStyle = {
  backgroundColor: "#f8f9fa",
  padding: "50px 0",
};

const footerHeadingStyle = {
  marginBottom: "20px",
};

const navigationListStyle = {
  listStyle: "none",
  padding: "0",
};

const navigationLinkStyle = {
  textDecoration: "none",
  color: "#333",
};

const followUsIconsStyle = {
  "& a": {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
};

const copyrightTextStyle = {
  color: "#333",
  marginTop: "20px",
};

const Footer = () => {
  return (
    <footer style={siteFooterStyle}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <div className="mb-5">
              <Typography variant="h3" style={footerHeadingStyle}>
                About Homeland
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                pariatur reprehenderit vero atque, consequatur id ratione, et
                non dignissimos culpa? Ut veritatis, quos illum totam quis
                blanditiis, minima minus odio!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} className="mb-5 mb-lg-0">
            <div className="row mb-5">
              <Grid item xs={12}>
                <Typography variant="h3" style={footerHeadingStyle}>
                  Navigations
                </Typography>
              </Grid>
              <Grid item xs={6} lg={6}>
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
              </Grid>
              <Grid item xs={6} lg={6}>
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
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} className="mb-5 mb-lg-0">
            <Typography variant="h3" style={footerHeadingStyle}>
              Follow Us
            </Typography>
            <div style={followUsIconsStyle}>
              <a href="#">
                <span className="icon-facebook"></span>
              </a>
              <a href="#">
                <span className="icon-twitter"></span>
              </a>
              <a href="#">
                <span className="icon-instagram"></span>
              </a>
              <a href="#">
                <span className="icon-linkedin"></span>
              </a>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="body2" style={copyrightTextStyle}>
              Copyright ©{new Date().getFullYear()} All rights reserved | This
              template is made with{" "}
              <i className="icon-heart text-danger" aria-hidden="true"></i> by{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colorlib
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
