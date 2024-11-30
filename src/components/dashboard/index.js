


import React from 'react';
import { Avatar, Box, Typography, Grid, Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";

const ProfileDashBoard = () => {

  const { myProfile } = useSelector((state) => {
    return state.loginReducer;
  });

  const user = {
    user_id: "ADMIN-4",
    name: "Adarsh Kumar",
    email: "adarsh13@gmail.com",
    userName: "adarsh_202",
    phoneNumber: "0987654321",
    gender: "Male",
    city: "Mumbai",
    role: "admin",
    avatar: "https://via.placeholder.com/150",
    status: "Active",
    followers: 1200,
    following: 300,
    posts: 9, // Total posts
  };

  // Dummy images for posts
  const dummyImages = [
    "https://via.placeholder.com/150/0000FF/808080?Text=Post1",
    "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Post2",
    "https://via.placeholder.com/150/00FF00/000000?Text=Post3",
    "https://via.placeholder.com/150/FF00FF/000000?Text=Post4",
    "https://via.placeholder.com/150/FFFF00/000000?Text=Post5",
    "https://via.placeholder.com/150/00FFFF/000000?Text=Post6",
    "https://via.placeholder.com/150/808080/FFFFFF?Text=Post7",
    "https://via.placeholder.com/150/000000/FFFFFF?Text=Post8",
    "https://via.placeholder.com/150/800080/FFFFFF?Text=Post9",
  ];

  return (
    <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
      <Box
        sx={{
          width: '100%',
          // maxWidth: 600,
          padding: 3,
          borderRadius: 4,
          backgroundColor: "#FFF",
          boxShadow: 3,
        }}
      >
        {/* Top Section */}
        <Grid container alignItems="center" spacing={2}>
          {/* Avatar */}
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Avatar
              src={myProfile?.avatar}
              alt={myProfile?.name}
              sx={{
                width: 120,
                height: 120,
                margin: '0 auto',
                border: '2px solid #DEA3B7',
              }}
            />
          </Grid>

          {/* Stats */}
          <Grid item xs={8}>
            <Grid container justifyContent="space-around" alignItems="center">
              <Box textAlign="center">
                <Typography variant="h6">{dummyImages?.length}</Typography>
                <Typography variant="caption" color="textSecondary">
                  Posts
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h6">{myProfile?.followers??0}</Typography>
                <Typography variant="caption" color="textSecondary">
                  Followers
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h6">{myProfile?.following??0}</Typography>
                <Typography variant="caption" color="textSecondary">
                  Following
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* User Info Section */}
        <Box sx={{ marginTop: 3, textAlign: 'center' }}>
          <Typography variant="h5">{myProfile?.name}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            @{myProfile?.userName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {myProfile?.city || "Location not provided"}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: myProfile?.status === "Active" ? "green" : "red",
              marginTop: 1,
            }}
          >
            Online: {myProfile?.status}
          </Typography>
        </Box>

        {/* Follow Button */}
        {/* <Button
          variant="contained"
          sx={{
            marginTop: 3,
            width: "100%",
            backgroundColor: "#DEA3B7",
          }}
        >
          Follow
        </Button> */}

        {/* Posts Section */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Posts
          </Typography>
          <Grid container spacing={2}>
            {dummyImages.map((image, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  sx={{
                    width: '100%',
                    aspectRatio: '1/1', // Ensures square images
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProfileDashBoard;
