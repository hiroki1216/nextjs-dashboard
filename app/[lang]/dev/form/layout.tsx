import SideNav from "@/app/ui/dashboard/sidenav";
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
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          <LanguageProvider initialLanguage={lang}>{children}</LanguageProvider>
        </div>
      </div>
    </div>
  );
}
