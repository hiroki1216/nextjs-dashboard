// 環境変数の設定とグローバルモックの設定の後に実行したい処理を記述する
import "@testing-library/jest-dom/";

// 各テストの前にモックをクリア
// jest.config.tsでclearMocks: trueを指定しているので、
// 各テストの前にモックをクリアする必要はないかも
beforeEach(() => {
  jest.clearAllMocks();
});
