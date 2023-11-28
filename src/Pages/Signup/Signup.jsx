import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import { themeContext } from "../../main";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AuthProvider } from "../../AuthProvider/AuthContext";
import { updateProfile } from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const theme = useTheme(themeContext);
  const { register, reset, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const Auth = useContext(AuthProvider);
  const navigate = useNavigate();
  const { createUser, loading, googleLogin } = Auth;
  const [passwordError, setPasswordError] = useState("");

  const isPasswordValid = (password) => {
    if (password.length < 6) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    return true;
  };

  const onSubmit = (data) => {
    const { email, password, name, imgurl } = data;

    if (!isPasswordValid(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one capital letter with no special characters."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        reset();
        updateProfile(result.user, {
          displayName: name,
          photoURL: imgurl,
        })
          .then(() => {
            console.log("Display name updated successfully");
          })
          .catch((error) => {
            // Handle errors
            console.error("Error updating display name", error);
          });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid mt={4} container component="main">
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        display={{ xs: "none", md: "flex" }}
        sx={{
          backgroundImage: "url(https://i.ibb.co/vwTJTFn/pngegg-2.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      />
      <Grid item xs={12} sm={12} md={5}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "none",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: theme.palette.Third.main }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <Box noValidate sx={{ mt: 1 }}>
            {" "}
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("name")}
                id="name"
                label="Name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("imgurl")}
                id="imgurl"
                label="Your Image Url"
                autoComplete="imgurl"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("email")}
                id="email"
                label="Email Address"
                type="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("password")}
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {isPasswordValid && (
                <Typography color="red">{passwordError}</Typography>
              )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                required
                label="agree with Terms and condition"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: theme.palette.Third.main }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already Have an Account! Login"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
