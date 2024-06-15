import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
  FieldValues,
  Path,
  useController,
  useFormContext,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

const RHFSwitch = <T extends FieldValues>(props: Props<T>) => {
  const { name, label } = props;
  const { control } = useFormContext<T>();

  const { field } = useController({
    name,
    control,
  });

  return (
    <FormControlLabel
      control={<Switch {...field} checked={field.value} />}
      label={label}
    />
  );
};

export default RHFSwitch;
