import { Box } from "@mui/material";
import { DynamicForm } from "./shared/components/dynamic-form/dynamic-form";
import MyRating from "./shared/components/rating";
import MyRatingNonCtlState from "./shared/components/rating-non-ctl-state";
import MyRatingNonCtlWatch from "./shared/components/rating-non-ctl-watch";
import type { DynamicFormRecordsObj } from "./shared/components/types/dynamic-form";

export default function Page() {
  // レコードのテストデータ(空の場合は空のオブジェクトを渡す)
  // const recordsObj: DynamicFormRecordsObj = {};
  const recordsObj: DynamicFormRecordsObj = {
    records: [
      { unitPrice: 100, amount: 1 },
      { unitPrice: 200, amount: 2 },
    ],
  };

  return (
    <main>
      <div className="mb-4">
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
