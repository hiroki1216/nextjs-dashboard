import { Box } from "@mui/material";
import { Control, useWatch } from "react-hook-form";
import { Schema } from "./dynamic-form";

type Props = {
  control: Control<Schema>;
};

export function DynamicFormTotalAmount(props: Props) {
  const { control } = props;
  const records = useWatch({
    control,
    name: "records",
  });

  const totalAmount = records.reduce(
    (acc, record) => acc + (record.amount || 0),
    0
  );

  return <Box>Total Amount: {totalAmount}</Box>;
}
