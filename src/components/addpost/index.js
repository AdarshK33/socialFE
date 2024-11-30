import React, { useState, useEffect } from "react";
// import styles from "./addPost.module.css";

import dynamic from 'next/dynamic'
import { useDispatch, useSelector } from "react-redux";

import {
  IconButton,
  Input,
  Box,
  Alert,
  Drawer,
  Menu,
  Button,
  List,
  Divider,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const AddPost = () => {
  let dispatch = useDispatch();
  useEffect(() => {
  
  }, []);
  return (
    <>
      hello AddPost 
    </>
  );
};


export default React.memo(AddPost);

