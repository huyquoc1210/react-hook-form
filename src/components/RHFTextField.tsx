import TextField, { TextFieldProps } from "@mui/material/TextField";
import {
  FieldValues,
  Path,
  useController,
  useFormContext,
} from "react-hook-form";
import isEmpty from "lodash.isempty";

type Props<T extends FieldValues> = {
  name: Path<T>;
} & TextFieldProps;

const RHFTextField = <T extends FieldValues>(props: Props<T>) => {
  const { name, ...rest } = props;
  const { control } = useFormContext<T>();

  const {
    field: { ref, ...others },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      inputRef={ref}
      error={!isEmpty(error)}
      helperText={error?.message}
      {...others}
      {...rest}
    />
  );
};

export default RHFTextField;
