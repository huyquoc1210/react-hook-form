import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Option } from "../users/types/option";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface Props<T extends FieldValues> {
  name: Path<T>;
  options?: Option[];
  label: string;
}

const RHFRadioGroup = <T extends FieldValues>(props: Props<T>) => {
  const { name, options, label } = props;
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...restField }, fieldState: { error } }) => (
        <FormControl {...restField} error={!!error}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup>
            {options?.map((option) => (
              <FormControlLabel
                value={option.id}
                control={<Radio checked={value === option.id} />}
                label={option.label}
                key={option.id}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default RHFRadioGroup;
