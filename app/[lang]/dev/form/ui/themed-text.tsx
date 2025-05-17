"use client";

import { Typography, TypographyProps } from "@mui/material";
type Props = {
  children: React.ReactNode;
  variant?: "body1" | "body2" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  sx?: TypographyProps["sx"];
};
export default function ThemedText(props: Props) {
  const { children, variant = "body1", sx } = props;
  return (
    // 文字色はテーマに依存する
    <Typography color="text.primary" variant={variant} sx={sx}>
      {children}
    </Typography>
  );
}
