import { render, screen } from "@/__tests__/utils/custom-testing-libratry";
import Page from "@/app/[lang]/dev/form/page";

describe("Home", () => {
  it("日本語-画面が正常に表示されること", async () => {
    const params = Promise.resolve({ lang: "ja" });
    render(await Page({ params }));

    const title = await screen.findByText(/こんにちは、世界！/i);
    const lang = await screen.findByText(/ja/i);

    expect(title).toBeInTheDocument();
    expect(lang).toBeInTheDocument();
  });

  it("英語-画面が正常に表示されること", async () => {
    const params = Promise.resolve({ lang: "en" });
    render(await Page({ params }));

    const title = await screen.findByText(/Hello, World!/i);
    const lang = await screen.findByText(/en/i);

    expect(title).toBeInTheDocument();
    expect(lang).toBeInTheDocument();
  });
});
