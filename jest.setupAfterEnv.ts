// 環境変数の設定とグローバルモックの設定の後に実行したい処理を記述する
import "@testing-library/jest-dom/";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});
