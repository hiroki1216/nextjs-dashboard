"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Rating,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  MyRating: z.number().gt(0, { message: "Rating must be greater than 0" }),
});

type Schema = z.infer<typeof schema>;

export default function MyRating() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      MyRating: 0,
    },
  });

  const router = useRouter();

  const onSubmit = (data: Schema) => {
    if (data.MyRating === 0) return;
    const rate = new URLSearchParams({ rate: data.MyRating.toString() });
    router.push(`/dashboard?${rate}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="MyRating"
        control={control}
        render={({ field }) => (
          <>
            <FormControl>
              <FormLabel sx={{ mb: 3 }}>Rating</FormLabel>
              <Rating
                {...field}
                value={field.value}
                onChange={(_, value) => field.onChange(value ?? 0)}
              />
              <FormHelperText
                id="my-helper-text"
                error={!!errors?.MyRating?.message}
              >
                {errors?.MyRating?.message}
              </FormHelperText>
            </FormControl>
          </>
        )}
      />
      <Box mt={2}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
}
