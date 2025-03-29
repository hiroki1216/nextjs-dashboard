"use client";
import NavBar from "@/app/[lang]/dev/form/ui/nav-bar";
import { Container as MuiContainer, styled } from "@mui/material";
import { PropsWithChildren } from "react";

const AppContent = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  height: "100%",
});

const Container = styled(MuiContainer)({
  height: "100%",
});

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function AppContainer({ children }: PropsWithChildren) {
  return (
    <div lang="ja">
      <AppContent>
        <NavBar />
        <Offset />
        <Container>{children}</Container>
      </AppContent>
    </div>
  );
}
