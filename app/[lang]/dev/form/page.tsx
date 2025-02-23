import { getTranslation } from "@/app/i18n/server";
import { Box } from "@mui/material";
import { DynamicForm } from "./shared/components/dynamic-form/dynamic-form";
import MyRating from "./shared/components/rating";
import MyRatingNonCtlState from "./shared/components/rating-non-ctl-state";
import MyRatingNonCtlWatch from "./shared/components/rating-non-ctl-watch";
import type { DynamicFormRecordsObj } from "./shared/components/types/dynamic-form";

type PageProps = {
  params: { lang: string };
};

export default async function Page({ params }: PageProps) {
  // レコードのテストデータ(空の場合は空のオブジェクトを渡す)
  // const recordsObj: DynamicFormRecordsObj = {};
  const recordsObj: DynamicFormRecordsObj = {
    records: [
      { unitPrice: 100, amount: 1 },
      { unitPrice: 200, amount: 2 },
    ],
  };
  // NOTE: パスパラメータを取得する際には、Nextjs ver.15以降はawaitを使用する必要あり。
  // see https://stackoverflow.com/questions/79143162/route-locale-used-params-locale-params-should-be-awaited-before-using
  const { lang } = await params;
  const { t } = await getTranslation(lang);

  return (
    <main>
      <div className="text-2xl font-bold">{t("common:title")}</div>
      <div className="mb-4">
        <div className="text-2xl font-bold">{lang}</div>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={{ my: 6 }}>
            <MyRating />
          </Box>
          <Box sx={{ my: 6 }}>
            <MyRatingNonCtlState />
          </Box>
          <Box sx={{ my: 6 }}>
            <MyRatingNonCtlWatch />
          </Box>
          <Box sx={{ my: 6 }}>
            <DynamicForm records={recordsObj.records} />
          </Box>
        </Box>
      </div>
    </main>
  );
}
