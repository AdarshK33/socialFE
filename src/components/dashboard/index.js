import React, { useState, useEffect } from "react";
// import styles from "./dashboard.module.css";

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

const DashBoard = () => {
  let dispatch = useDispatch();
  useEffect(() => {
  
  }, []);
  return (
    <>
      hello socail dashboard app
    </>
  );
};


export default React.memo(DashBoard);

