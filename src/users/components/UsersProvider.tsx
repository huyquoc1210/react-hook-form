import { useForm, FormProvider } from "react-hook-form";
import Users from "./Users";
import { schema, Schema, defaultValues } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";

// interface FormValues {
//   name: string;
//   email: string;
// }

const UserProvider = () => {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Users />
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default UserProvider;
