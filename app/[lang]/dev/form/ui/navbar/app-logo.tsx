import { Box } from "@mui/material";
import Image from "next/image";
import favicon from "public/favicon.ico";

export default function AppLogo() {
  return (
    <Box sx={{ mr: 2 }}>
      {/* TODO Application Logoは仮のものを配置しているので、作成後に差し替えること */}
      <Image src={favicon} width={30} height={30} alt="Application Logo" />
    </Box>
  );
}
