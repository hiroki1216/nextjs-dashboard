"use client";
import Container from "@/app/[lang]/dev/form/ui/container";
import { styled } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";

const AppContent = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  height: "100%",
});

const theme = createTheme({
  // ダークモードのテーマを設定（paletteが設定された場合は上書きされる）
  colorSchemes: {
    dark: true,
  },
});

export default function AppContainer({ children }: PropsWithChildren) {
  return (
    <div lang="ja">
      <ThemeProvider theme={theme}>
        <AppContent>
          <Container>{children}</Container>
        </AppContent>
      </ThemeProvider>
    </div>
  );
}
