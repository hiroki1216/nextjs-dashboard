"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Rating } from "@mui/material";
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
    console.log(data);
    if (data.MyRating === 0) return;
    const rate = new URLSearchParams({ rate: data.MyRating.toString() });
    router.push(`/dashboard?${rate}`);
  };

  return (
    <form>
      <Box mb={2}>Rating</Box>
      <Controller
        name="MyRating"
        control={control}
        render={({ field }) => (
          <>
            <Rating
              {...field}
              value={field.value}
              onChange={(_, value) => field.onChange(value ?? 0)}
            />
            {errors.MyRating && <p>{errors.MyRating.message}</p>}
          </>
        )}
      />
      <Box mt={2}>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          送信
        </Button>
      </Box>
    </form>
  );
}
