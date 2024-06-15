import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import RHFAutocomplete from "../../components/RHFAutocomplete";
import RHFCheckbox from "../../components/RHFCheckbox";
import RHFDateTimePicker from "../../components/RHFDateTimePicker";
import RHFRadioGroup from "../../components/RHFRadioGroup";
import RHFTextField from "../../components/RHFTextField";
import RHFToggleButtonGroup from "../../components/RHFToggleButtonGroup";
import { Schema } from "../types/schema";
import RHFDateRangePicker from "../../components/RHFDateRangePicker";
import RHFSlider from "../../components/RHFSlider";
import RHFSwitch from "../../components/RHFSwitch";

const Users = () => {
  const { watch } = useFormContext<Schema>();

  useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });

    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <Stack sx={{ gap: 2 }}>
      <RHFTextField<Schema> name="name" label="Name" />
      <RHFTextField<Schema> name="email" label="Email" />

      <RHFAutocomplete<Schema>
        name="states"
        label="States"
        options={[
          { id: "1", label: "California" },
          { id: "2", label: "Texas" },
        ]}
      />
      <RHFToggleButtonGroup<Schema>
        name="languagesSpoken"
        options={[
          { id: "1", label: "Web" },
          { id: "2", label: "Android" },
          { id: "3", label: "iOS" },
        ]}
      />
      <RHFRadioGroup<Schema>
        name="gender"
        options={[
          { id: "1", label: "Female" },
          { id: "2", label: "Male" },
          { id: "3", label: "Other" },
        ]}
        label="Gender"
      />
      <RHFCheckbox<Schema>
        name="skills"
        label="Skills"
        options={[
          { id: "1", label: "Javascript" },
          { id: "2", label: "Typescript" },
          { id: "3", label: "ReactJS" },
          { id: "4", label: "NestJS" },
        ]}
      />
      <RHFDateTimePicker<Schema>
        name="registrationDateAndTime"
        label="Registration Date & Time"
      />
      <RHFDateRangePicker<Schema> name="formerEmploymentPeriod" />
      <RHFSlider<Schema> name="salaryRange" label="Salary Range" />
      <RHFSwitch<Schema> name="isTeacher" label="Are you is Teacher" />
    </Stack>
  );
};

export default Users;
