import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
} from "@mui/material";

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

const userName = "wahid";
const userImage = "https://i.ibb.co/K9wdZ1V/pexels-amir-esrafili-6274712.jpg";
const role = "wahid";

// { userName, userImage, role }

const Profile = () => {
  return (
    <Container style={profileStyle}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div style={containerStyle}>
                <Avatar src={userImage} alt={userName} style={avatarStyle} />
                <Typography variant="h4" style={{ marginTop: "10px" }}>
                  Name: {userName}
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

        <div style={{ marginTop: "20px" }}>
          <Button variant="contained" color="primary">
            Edit Profile
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default Profile;
