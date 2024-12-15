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
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  MyRaringNotCtl: z
    .number()
    .gt(0, { message: "Rating must be greater than 0" }),
});

type Schema = z.infer<typeof schema>;

export default function MyRatingNonCtlWatch() {
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      MyRaringNotCtl: 0,
    },
  });

  const ratingValue = watch("MyRaringNotCtl");

  const router = useRouter();

  const onSubmit = (data: Schema) => {
    if (data.MyRaringNotCtl === 0) return;
    const rate = new URLSearchParams({ rate: data.MyRaringNotCtl.toString() });
    router.push(`/dashboard?${rate}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Rating</FormLabel>
        <Rating
          name="MyRaringNotCtl"
          value={ratingValue}
          onChange={(_, value) => {
            setValue("MyRaringNotCtl", value ?? 0);
          }}
        />
        <FormHelperText
          id="my-helper-text"
          error={!!errors?.MyRaringNotCtl?.message}
        >
          {errors?.MyRaringNotCtl?.message}
        </FormHelperText>
      </FormControl>
      <Box mt={2}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
}
