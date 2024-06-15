import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { sleep } from "../utils/misc";
import { useState } from "react";

interface FormValues {
  userName: string;
  lastName: string;
  email: string;
}

const AsyncSubmitValidation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      await sleep(2000);

      if (data.userName === "huy") {
        console.log(JSON.stringify(data));
      } else {
        console.log("There is an error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(errors);

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        noValidate
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          fullWidth
          label="User Name"
          variant="outlined"
          {...register("userName")}
        ></TextField>
        <TextField
          fullWidth
          label="Last Name"
          variant="outlined"
          {...register("lastName")}
        ></TextField>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          {...register("email")}
        ></TextField>
        <LoadingButton loading={loading} variant="outlined" type="submit">
          Submit
        </LoadingButton>
      </Box>
    </Container>
  );
};

export default AsyncSubmitValidation;
