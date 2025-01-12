import { Box } from "@mui/material";
import MyRating from "./shared/components/rating";
import MyRatingNonCtlState from "./shared/components/rating-non-ctl-state";
import MyRatingNonCtlWatch from "./shared/components/rating-non-ctl-watch";
import { DynamicForm } from "./shared/components/dynamic-form/dynamic-form";

export default function Page() {
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
            <DynamicForm />
          </Box>
        </Box>
      </div>
    </main>
  );
}
