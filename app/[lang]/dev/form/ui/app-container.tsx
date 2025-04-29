"use client";
import Container from "@/app/[lang]/dev/form/ui/container";
import { styled } from "@mui/material";
import { PropsWithChildren } from "react";

const AppContent = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  height: "100%",
});

export default function AppContainer({ children }: PropsWithChildren) {
  return (
    <div lang="ja">
      <AppContent>
        <Container>{children}</Container>
      </AppContent>
    </div>
  );
}
