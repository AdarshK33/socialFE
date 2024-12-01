import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  TextField,
  Button,
  InputAdornment,
  FormControl,
  OutlinedInput,
  InputLabel,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./login.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { userLoginApi, getNotificationApi, myProfileApi } from "../redux/actions/login";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOption } from "../utils/session";
import logo_loginpage from "../assets/images/users/1.jpg";
import Image from "next/image";

import { myProfileApi, userLoginApi } from "../redux/actions/login";
import { useDispatch, useSelector } from "react-redux";

const Login = (user) => {
 
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLogin } = useSelector((state) => {
    return state.loginReducer;
  });

  console.log(isLogin,"isLogin")
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [itemData, setItemData] = useState();

  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitHandler = () => {
    if (username === "" || password === "") {
      toast.error("Please enter UserName and Password");
    } else {
      let loginData = {
        email: username,
        password: password,
      };
      setItemData(loginData);
      dispatch(userLoginApi(loginData));
    }
  };


  useEffect(() => {
    if (
     
      isLogin !== "" &&
      isLogin !== undefined &&
      isLogin.length !== 0

    ) {
   
    
      router.push("/myProfile");
      dispatch(myProfileApi());
      
    }
  }, [isLogin]);


//   console.log(Boolean(username), "hello Boolean(username)")

  return (
    <>
    <Box className={styles.mainContainer}>
  <Box className={styles.leftSection}>
    <Typography variant="h2" sx={{ textAlign: "center" }}>
      Welcome to Social Web App
    </Typography>
  </Box>
  <Box className={styles.rightSection}>
    <Card sx={{ p: 4 }} className={styles.loginCard}>
      <Typography variant="h1" className={styles.loginPara}>
        Login
      </Typography>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Stack spacing={3}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-account">
            Email
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-account"
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircleIcon />
                </InputAdornment>
              }
              label="Email"
              //username
              value={username}
              onChange={handleUsernameChange}
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormControl>
          <Button
            style={{
              color: "#fff",
              background: "#fdb834",
              borderRadius: "30px",
              padding: "10px",
              margin: "40px 0 10px 0",
            }}
            mt={2}
            onClick={submitHandler}
          >
            Get Started
          </Button>
        </Stack>
      </Box>
    </Card>
  </Box>
</Box>


      <ToastContainer />
    </>
  );
};

export default Login;

// // its working
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = await req?.session?.user;

    // console.log("hello login", user);

  
      return {
        redirect: {
          destination: "/myProfile",
          permanent: false,
        },
      };
    
   

    return {
      props: {
        user: req.session.user || null,
      },
    };
  },
  sessionOption
);
