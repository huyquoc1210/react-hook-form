import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { sleep } from "../utils/misc";
import Typography from "@mui/material/Typography";

interface FormValues {
  userName: string;
  lastName: string;
  email: string;
  moreDetail: boolean;
  // interests?: string;
}

let renderCount = 0;

const ConditionalFields = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      await sleep(2000);

      console.log("data", data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  renderCount++;

  return (
    <Container>
      <Typography>{renderCount / 2}</Typography>
      {/* <Typography>{JSON.stringify(watchForm)}</Typography> */}
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
          variant="outlined"
          label="User Name"
          {...register("userName", { required: true, maxLength: 80 })}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Last Name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="More Details"
          {...register("moreDetail")}
        />
        {/* {moreDetail && (
          <TextField
            fullWidth
            variant="outlined"
            label="Interests"
            {...register("interests")}
          />
        )} */}

        <LoadingButton loading={loading} variant="contained" type="submit">
          Submit
        </LoadingButton>
      </Box>
    </Container>
  );
};

export default ConditionalFields;
