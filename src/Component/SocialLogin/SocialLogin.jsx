import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthProvider } from "../../AuthProvider/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthProvider);
  const provider = new GoogleAuthProvider();

  // //   const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleLogin(provider).then((result) => {
      console.log(result.user);
      //       const userInfo = {
      //         email: result.user?.email,
      //         name: result.user?.displayName,
      //       };
      //       axiosPublic.post("/users", userInfo).then((res) => {
      //         console.log(res.data);
      navigate("/");
      //     });
    });
  };

  return (
    <Box mt={3}>
      <Box>
        <Typography color="#f09b3b" onClick={handleGoogleSignIn}>
          <GoogleIcon sx={{ cursor: "pointer", fontSize: "50px" }}></GoogleIcon>
        </Typography>
      </Box>
    </Box>
  );
};

export default SocialLogin;
