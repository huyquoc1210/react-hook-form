import LoadingButton from "@mui/lab/LoadingButton";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm } from "react-hook-form";

const option = ["Mr", "Mrs", "Miss", "Dr"];

interface FormValues {
  userName: string;
  lastName: string;
  email: string;
  mobile: string;
  title: string;
  developer: string;
}

const CustomValidation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };

  return (
    <Container>
      <Box
        component="form"
        noValidate
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          variant="outlined"
          label="User Name"
          {...register("userName", { required: true, maxLength: 80 })}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <TextField
          variant="outlined"
          label="Email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <TextField
          variant="outlined"
          label="Mobile number"
          {...register("mobile", {
            required: true,
            maxLength: 11,
            minLength: 8,
          })}
        />
        <Autocomplete
          options={option}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Title"
              {...register("title", { required: true })}
            />
          )}
        />
        <FormControl>
          <FormLabel>Are you a developer</FormLabel>
          <RadioGroup name="radio-buttons-group">
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
              {...register("developer", { required: true })}
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label="No"
              {...register("developer", { required: true })}
            />
          </RadioGroup>
        </FormControl>
        <LoadingButton loading={loading} variant="contained" type="submit">
          Submit
        </LoadingButton>
      </Box>
    </Container>
  );
};

export default CustomValidation;
