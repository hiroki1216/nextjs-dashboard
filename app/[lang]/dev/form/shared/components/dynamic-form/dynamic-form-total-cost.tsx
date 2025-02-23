import { Box } from "@mui/material";
import { Control, useWatch } from "react-hook-form";
import { Schema } from "./dynamic-form";

type Props = {
  control: Control<Schema>;
};

export function DynamicFormTotalCost(props: Props) {
  const { control } = props;
  const records = useWatch({
    control,
    name: "records",
  });

  const totalCost = records.reduce(
    (acc, record) => acc + (record.unitPrice || 0) * (record.amount || 0),
    0
  );

  return <Box>Total Cost: {totalCost}</Box>;
}
