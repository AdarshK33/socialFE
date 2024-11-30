import React, { useState } from "react";
import {
  Grid,
  Stack,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  FormHelperText,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { signUpApis } from "../../../redux/actions/login";


const Forms = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userName: "",
    phoneNumber: "",
    gender: "male",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    userName: "",
    phoneNumber: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!formData.userName) {
      newErrors.userName = "Username is required";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(formData, "Form submitted");
      // Process form data
      dispatch(signUpApis(formData));
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Social web">
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                id="name-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                id="email-basic"
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                id="pass-basic"
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
              <TextField
                id="userName-basic"
                label="Username"
                variant="outlined"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                error={!!errors.userName}
                helperText={errors.userName}
              />
              <TextField
                id="phoneNumber-basic"
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />

              <FormControl error={!!errors.gender}>
                {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
                {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
              </FormControl>
            </Stack>
            <br />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Forms;
