"use client";

import {
  Badge,
  BadgeOwnProps,
  IconButton,
  IconButtonProps,
  SvgIconProps,
} from "@mui/material";

import { ReactElement } from "react";

type Props = {
  icon?: ReactElement<SvgIconProps>;
  badgeColor?: BadgeOwnProps["color"];
  badgeContent?: number;
  title?: string;
} & IconButtonProps;
export default function CustomIconButton(props: Props) {
  const { icon, badgeColor, badgeContent, title, ...rest } = props;
  return (
    <>
      <IconButton size="large" color="inherit" {...rest}>
        <Badge
          badgeContent={badgeContent}
          color={badgeColor || "secondary"}
          invisible={badgeContent ? false : true}
        >
          {icon}
        </Badge>
      </IconButton>
      <p>{title}</p>
    </>
  );
}
