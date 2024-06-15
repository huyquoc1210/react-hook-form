import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Option } from "../users/types/option";

interface Props<T extends FieldValues> {
  name: Path<T>;
  options?: Option[];
  label: string;
}

const RHFCheckbox = <T extends FieldValues>(props: Props<T>) => {
  const { name, options, label } = props;
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        // console.log(value);
        return (
          <FormControl error={!!error}>
            <FormLabel>{label}</FormLabel>
            <FormGroup>
              {options?.map((option) => (
                <FormControlLabel
                  key={option.id}
                  control={
                    <Checkbox
                      checked={value.includes(option.id)}
                      onChange={() => {
                        if (value.includes(option.id)) {
                          onChange(
                            (value as string[]).filter(
                              (item) => item !== option.id
                            )
                          );
                        } else {
                          onChange([...value, option.id]);
                        }
                      }}
                      key={option.id}
                    />
                  }
                  label={option.label}
                />
              ))}
            </FormGroup>
            <FormHelperText>{error?.message}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export default RHFCheckbox;
