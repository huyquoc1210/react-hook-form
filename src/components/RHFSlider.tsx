import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
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

const RHFSlider = <T extends FieldValues>(props: Props<T>) => {
  const { name, label } = props;
  const { control } = useFormContext<T>();

  const { field } = useController({
    name,
    control,
  });

  return (
    <>
      <Typography>{label}</Typography>
      <Slider {...field} valueLabelDisplay="auto" />
    </>
  );
};

export default RHFSlider;
