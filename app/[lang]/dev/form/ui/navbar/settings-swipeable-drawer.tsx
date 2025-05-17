"use client";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { ReactNode, useState } from "react";
import CustomIconButton from "./shared/components/custom-icon-button";

type Anchor = "top" | "left" | "bottom" | "right";

type Props = {
  isDrawerOpen: boolean;
  anchor: Anchor;
  children: ReactNode;
};

export default function SwipeableTemporaryDrawer(props: Props) {
  const { isDrawerOpen, anchor, children } = props;
  const [isAnchorDrawerOpen, setIsAnchorDrawerOpen] = useState(isDrawerOpen);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsAnchorDrawerOpen(open);
    };

  return (
    <div>
      <>
        <CustomIconButton
          icon={<SettingsIcon />}
          aria-label="settings"
          onClick={toggleDrawer(true)}
        />
        <SwipeableDrawer
          anchor={anchor}
          open={isAnchorDrawerOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            sx={{
              width: anchor === "top" || anchor === "bottom" ? "auto" : "100%",
            }}
            role="presentation"
          >
            {children}
          </Box>
        </SwipeableDrawer>
      </>
    </div>
  );
}
