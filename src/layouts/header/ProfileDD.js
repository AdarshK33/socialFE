import React from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import userimg from "../../../assets/images/users/2.jpg";
import {
  Box,
  Menu,
  Typography,
  Link,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "../../../redux/actions/logout";
const ProfileDD = () => {
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const dispatch = useDispatch();
  // const router = useRouter();
  const { myProfile } = useSelector((state) => {
    return state.loginReducer;
  });

  // console.log(myProfile.avatar,"myProfile")

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
          {myProfile?.avatar &&
          // <Image
          //   src={myProfile.avatar}
          //   alt="profileDD.js"
          //   width="30px"
          //   height="30px"
          //   className="roundedCircle"
          // />

          <Avatar
          src={myProfile?.avatar}
          alt={myProfile?.name??"no name"}
          sx={{
            width: 50,
            height: 50,
            margin: '0 auto',
            border: '2px solid #DEA3B7',
          }}
        />
}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <Typography
              color="textSecondary"
              variant="h5"
              fontWeight="400"
              sx={{ ml: 1 }}
            >
              Hi,
            </Typography>
            <Typography
              variant="h5"
              fontWeight="700"
              sx={{
                ml: 1,
              }}
            >
              {myProfile?.name}
            </Typography>
            <FeatherIcon icon="chevron-down" width="20" height="20" />
          </Box>
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleClose4}
        sx={{
          "& .MuiMenu-paper": {
            width: "385px",
          },
        }}
      >
        <Box>
          <Box p={2} pt={0}>
            <List
              component="nav"
              aria-label="secondary mailbox folder"
              onClick={handleClose4}
            >
              <ListItemButton>
                <ListItemText primary="Edit Profile" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Account" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Change Password" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="My Settings" />
              </ListItemButton>
            </List>
          </Box>
          <Divider />
          <Box p={2}>
            <Link to="/" onClick={() => dispatch(logoutApi())}>
              <Button fullWidth variant="contained" color="primary">
                Logout
              </Button>
            </Link>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileDD;
