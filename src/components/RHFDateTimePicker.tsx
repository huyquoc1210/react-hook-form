import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
}

const RHFDateTimePicker = <T extends FieldValues>(props: Props<T>) => {
  const { name, label } = props;
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker label={label} {...field} />
        </LocalizationProvider>
      )}
    />
  );
};

export default RHFDateTimePicker;
