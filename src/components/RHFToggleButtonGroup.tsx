import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Option } from "../users/types/option";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

interface Props<T extends FieldValues> {
  name: Path<T>;
  options?: Option[];
}

const RHFToggleButtonGroup = <T extends FieldValues>(props: Props<T>) => {
  const { name, options } = props;
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...restField } }) => (
        <ToggleButtonGroup
          onChange={(_, newValue) => {
            if (newValue.length) {
              onChange(newValue);
            }
          }}
          value={value.length ? value : [options?.[0].id]}
          {...restField}
        >
          {options?.map((option) => (
            <ToggleButton value={option.id} key={option.id}>
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    />
  );
};

export default RHFToggleButtonGroup;
