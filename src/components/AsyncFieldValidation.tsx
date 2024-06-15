import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sleep } from "../utils/misc";

interface FormValues {
  userName: string;
  lastName: string;
  email: string;
}

const AsyncFieldValidation = () => {
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

      console.log(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
          error={!!errors.userName}
          helperText={errors.userName?.message}
          fullWidth
          label="User Name"
          variant="outlined"
          {...register("userName", {
            required: "Bắt buộc phải nhập",
          })}
        ></TextField>
        <TextField
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          fullWidth
          label="Last Name"
          variant="outlined"
          {...register("lastName", {
            required: "Bắt buộc phải nhập",
          })}
        ></TextField>
        <TextField
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          label="Email"
          variant="outlined"
          {...register("email", {
            required: "Bắt buộc phải nhập",
            //custom validate
            validate: {
              notAdmin: async (fieldValue) => {
                await sleep(1000);
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },
            },
          })}
        ></TextField>
        <LoadingButton loading={loading} variant="contained" type="submit">
          Submit
        </LoadingButton>
      </Box>
    </Container>
  );
};

export default AsyncFieldValidation;
