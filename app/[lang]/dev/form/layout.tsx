import NavBar from "@/app/[lang]/dev/form/ui/nav-bar";
import { LanguageProvider } from "@/context/language-context";
import { JSX } from "react";

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
        <NavBar />
        {children}
      </LanguageProvider>
    </div>
  );
}
