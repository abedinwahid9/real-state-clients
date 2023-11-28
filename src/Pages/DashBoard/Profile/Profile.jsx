import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useContext } from "react";
import { AuthProvider } from "../../../AuthProvider/AuthContext";

const profileStyle = {
  padding: "20px",
  textAlign: "center",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const avatarStyle = {
  width: "150px",
  height: "150px",
};

const roleStyle = {
  marginTop: "10px",
  color: "#666",
};

const Profile = () => {
  const { user, signOutUser } = useContext(AuthProvider);
  console.log(user);

  const isAbsoluteUrl = (url) => /^[a-z][a-z0-9+.-]*:/.test(url);
  const checkProfileImg = isAbsoluteUrl(user?.photoURL);

  const userName = user.displayName;
  const userEmail = user.email;

  let role = "";

  if (userEmail === "admin@gmail.com") {
    role = "admin";
  } else if (userEmail === "agent@gmail.com") {
    role = "agent";
  } else {
    role = "user";
  }

  const handleLogout = () => {
    signOutUser()
      .then((result) => console.log("logout", result))
      .catch((err) => console.error(err));
  };

  return (
    <Container style={profileStyle}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div style={containerStyle}>
                <Avatar
                  src={
                    checkProfileImg
                      ? user.photoURL
                      : "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                  }
                  alt={userName}
                  style={avatarStyle}
                />
                <Typography variant="h4" style={{ marginTop: "10px" }}>
                  {userName}
                </Typography>
                <Typography variant="h4" style={{ marginTop: "10px" }}>
                  {userEmail}
                </Typography>
                {role && (
                  <Typography variant="subtitle1" style={roleStyle}>
                    Role: {role}
                  </Typography>
                )}
              </div>
            </Grid>
          </Grid>
        </Container>

        {/* Additional information section */}
        {/* Add your additional information components here */}

        <Box style={{ marginTop: "20px" }}>
          <Button sx={{ mr: 2 }} variant="contained" color="primary">
            Online
          </Button>
          <Button onClick={handleLogout} variant="contained" color="Third">
            LogOut
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;
