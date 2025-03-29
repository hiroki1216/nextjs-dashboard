import { LanguageProvider } from "@/context/language-context";
import { CssBaseline } from "@mui/material";
import { JSX } from "react";
import AppContainer from "./ui/app-container";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function Layout(props: LayoutProps): Promise<JSX.Element> {
  const { lang } = await props.params;
  const { children } = props;
  return (
    <div lang="ja">
      <LanguageProvider initialLanguage={lang}>
        <CssBaseline />
        <AppContainer>{children}</AppContainer>
      </LanguageProvider>
    </div>
  );
}
