import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  FieldValues,
  Path,
  useController,
  useFormContext,
} from "react-hook-form";
import dayjs from "dayjs";
import { enGB } from "date-fns/locale";

interface Props<T extends FieldValues> {
  name: Path<T>;
}

const today = dayjs();
const tomorrow = dayjs().add(1, "day");

const RHFDateRangePicker = <T extends FieldValues>(props: Props<T>) => {
  const { name } = props;
  const { control } = useFormContext<T>();
  const {
    field: { value, ...restField },
  } = useController({
    name,
    control,
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
      <DateRangePicker
        {...restField}
        value={Array.isArray(value) ? value : [null, null]}
      />
    </LocalizationProvider>
  );
};

export default RHFDateRangePicker;
