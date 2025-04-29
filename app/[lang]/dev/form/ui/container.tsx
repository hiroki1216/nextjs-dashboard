"use client";
import { DRAWER_WIDTH } from "@/app/constants/styles";
import { styled } from "@mui/material";
import { useState } from "react";
import NavBar from "./nav-bar";

export default function Container({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
  })<{
    open?: boolean;
  }>(({ theme }) => ({
    height: "100%",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // Drawerを開いた時にコンテンツが隠れないようにDrawerの幅分マージンを追加
    marginLeft: `-${DRAWER_WIDTH}px`,
    // 上記のマージンの影響でコンテンツが左寄せになるので、追加したマージン分だけパディングで埋める
    paddingLeft: `${DRAWER_WIDTH}px`,
    // propsのopenがtrueの時に適用するスタイル
    variants: [
      {
        props: { open: true },
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }));

  return (
    <>
      <NavBar
        isDrawerOpen={isDrawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      ></NavBar>
      <Offset />
      <Main open={isDrawerOpen}>{children}</Main>
    </>
  );
}
