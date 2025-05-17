"use client";
import { useTranslation } from "@/app/i18n/client";
import { useLanguage } from "@/context/language-context";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Box, useColorScheme } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { MouseEvent } from "react";
import ThemedText from "../themed-text";

export default function ThemeModeToggleButton() {
  const { mode, setMode } = useColorScheme();

  const handleModeChange = (
    event: MouseEvent<HTMLElement>,
    newMode: "light" | "dark" | "system"
  ) => {
    setMode(newMode);
  };

  const { language: lang } = useLanguage();
  const { t } = useTranslation(lang);
  return (
    <Box>
      <ThemedText variant="h6" sx={{ pl: 2, pr: 2, mb: 1, mt: 2 }}>
        {t("common:theme")}
      </ThemedText>
      <ToggleButtonGroup
        color="primary"
        value={mode}
        exclusive
        onChange={handleModeChange}
        aria-label="Theme Mode"
        sx={{ pl: 2, pr: 2 }}
      >
        <ToggleButton value="light">
          <LightModeIcon />
          Light
        </ToggleButton>
        <ToggleButton value="system">
          <SettingsBrightnessOutlinedIcon />
          System
        </ToggleButton>
        <ToggleButton value="dark">
          <DarkModeOutlinedIcon />
          Dark
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
