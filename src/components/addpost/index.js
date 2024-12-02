

import React, { useState } from 'react';
import { Box, Avatar, IconButton, Typography, Card, CardContent, CardMedia, Button, Divider, Input } from '@mui/material';
import { Favorite, ChatBubbleOutline, Share, MoreHoriz } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import Dropzone from "react-dropzone";
import { Image } from 'react-feather';
import { storyPostUploadApi } from '../../../redux/actions/social';
const AddPost = () => {
  const dispatch = useDispatch();
  const { myProfile } = useSelector((state) => {
    return state.loginReducer;
  });
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  // Handle file input change
  const onDrop = async (acceptedFiles) => {
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append("profile_pic_file", file);
    });
    formData.append("id", myProfile?.id);

    dispatch(storyPostUploadApi(formData));

    // axios
    //   .post(
    //     `${process.env.CATALOG_NEW_SERVICE_URL}/catalog/media/${selectItemId}`,
    //     ś,
    //     {
    //       headers: {
    //         Accept: "*/*",
    //         "Content-Type": "multipart/form-data",
    //         Authorization: `Bearer ${at}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     toast.info("media file uploaded Successfully !!!");
    //   })
    //   .catch((error) => {
    //     toast.error("media file upload Failed !!!");
    //   });
  };

  // Handle caption input
  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  return (
    <Card sx={{ maxWidth: 800, margin: '20px auto' }}>
      {/* Post Header */}
      <Box display="flex" alignItems="center" p={2}>
        <Avatar alt="User Name" src="https://via.placeholder.com/50" />
        <Box ml={2}>
          <Typography variant="h6" component="div">
           
            {myProfile?.userName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2 hours ago
          </Typography>
        </Box>
        <IconButton sx={{ ml: 'auto' }}>
          <MoreHoriz />
        </IconButton>
      </Box>

      {/* Image Upload Section */}
      <CardContent>
      <Box className="dropZone-container">
                <Dropzone
                  onDrop={onDrop}
                // accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <Box
                      {...getRootProps()}
                      className="dropzone col-2 p-3 text-end align-self-center d-flex"
                    >
                      <input {...getInputProps()} />
                      { }
                      <Box
                        // className={`${styles.upload_placeholder} upload_blk`}
                      >
                        <Box>
                          <Image
                            fontSize="small"
                            style={{
                              fontSize: "xx-small",
                              color: "#419794",
                            }}
                          />{" "}
                          {/* Add the icon here */}
                        </Box>
                        <label htmlFor="upload-image">
          <Button variant="outlined" component="span" fullWidth>
            Upload Image
          </Button>
        </label>
                      </Box>
                    </Box>
                  )}
                </Dropzone>
              </Box>
       

        {/* Image Preview */}
        {image && (
          <CardMedia
            component="img"
            height="400"
            image={image}
            alt="Uploaded Post"
          />
        )}
      </CardContent>

      {/* Caption Section */}
      <Box p={2}>
        <Typography variant="body2" color="text.secondary">
          Add a caption:
        </Typography>
        <textarea
          value={caption}
          onChange={handleCaptionChange}
          placeholder="Write something..."
          rows={3}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginTop: '10px',
            fontSize: '16px',
          }}
        />
      </Box>

      {/* Post Interactions */}
      <CardContent>
        <Box display="flex" alignItems="center">
          <IconButton>
            {/* <Favorite /> */}
          </IconButton>
          <IconButton>
            {/* <ChatBubbleOutline /> */}
          </IconButton>
          <IconButton sx={{ ml: 'auto' }}>
            <Share />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
        {/* <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          <strong>User Name</strong> {caption}
        </Typography> */}
        {/* <Button sx={{ textTransform: 'none', color: '#0073e6', mt: 1 }} onClick={() => alert('See more comments')}>
          See all comments
        </Button> */}
      </CardContent>

      {/* Post Footer */}
      <Divider />
      <Box p={2}>
        <Button fullWidth variant="contained" color="primary">
          Post
        </Button>
      </Box>
    </Card>
  );
};

export default AddPost;
