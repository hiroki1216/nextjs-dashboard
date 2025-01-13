"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import { DynamicFormTotalAmount } from "./dynamic-form-total-amount";
import { DynamicFormTotalCost } from "./dynamic-form-total-cost";

import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const recordSchema = z.object({
  unitPrice: z.preprocess(
    (value) => (isNaN(Number(value)) ? 0 : value),
    z.number().gt(0, { message: "Unit Price must be greater than 0" })
  ),
  amount: z.preprocess(
    (value) => (isNaN(Number(value)) ? 0 : value),
    z.number().gt(0, { message: "Amount must be greater than 0" })
  ),
});

const schema = z.object({
  records: z.array(recordSchema),
});

export type Schema = z.infer<typeof schema>;
type Props = {
  records?: {
    unitPrice: number;
    amount: number;
  }[];
};

export function DynamicForm(props: Props) {
  const { records } = props;
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      records: records
        ? records
        : [{ unitPrice: undefined as never, amount: undefined as never }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "records",
  });

  function submitRecords(data: Schema) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submitRecords)}>
      {fields.map((field, index) => {
        return (
          <Box
            key={field.id}
            sx={{ display: "flex", alignItems: "center", my: 2 }}
          >
            <FormControl sx={{ mr: 2 }}>
              <InputLabel>Unit Price</InputLabel>
              <OutlinedInput
                {...register(`records.${index}.unitPrice`, {
                  valueAsNumber: true,
                })}
                defaultValue={isNaN(field.unitPrice) ? "" : field.unitPrice}
                type="number"
              />
              <FormHelperText
                error={!!errors?.records?.[index]?.unitPrice?.message}
              >
                {errors?.records?.[index]?.unitPrice?.message}
              </FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel>Amount</InputLabel>
              <OutlinedInput
                {...register(`records.${index}.amount`, {
                  valueAsNumber: true,
                })}
                defaultValue={isNaN(field.amount) ? "" : field.amount}
                type="number"
              />
              <FormHelperText
                error={!!errors?.records?.[index]?.amount?.message}
              >
                {errors?.records?.[index]?.amount?.message}
              </FormHelperText>
            </FormControl>
            {index > 0 && (
              <IconButton aria-label="delete" onClick={() => remove(index)}>
                <RemoveCircleOutlineIcon />
              </IconButton>
            )}
          </Box>
        );
      })}
      <Box display="flex" justifyContent="center" mt={2}>
        <IconButton
          aria-label="append"
          onClick={() =>
            append({
              unitPrice: undefined as never,
              amount: undefined as never,
            })
          }
          sx={{ alignItems: "center" }}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
      <DynamicFormTotalCost control={control} />
      <DynamicFormTotalAmount control={control} />
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
}
