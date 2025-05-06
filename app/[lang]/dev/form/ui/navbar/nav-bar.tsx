"use client";
import { DRAWER_WIDTH } from "@/app/constants/styles";
import { useTranslation } from "@/app/i18n/client";
import { useLanguage } from "@/context/language-context";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AppLogo from "./app-logo";
import CustomDrawer from "./custom-drawer";
import CustomIconButton from "./shared/components/custom-icon-button";

type Props = {
  isDrawerOpen: boolean;
  handleDrawerToggle: () => void;
};

export default function NavBar(props: Props) {
  const { isDrawerOpen, handleDrawerToggle } = props;
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  const { language: lang } = useLanguage();
  const { t } = useTranslation(lang);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: { open: true },
        style: {
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          marginLeft: `${DRAWER_WIDTH}px`,
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      //エラーになるので一旦コメントアウト
      // anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{t("nav-bar:profile")}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t("nav-bar:myAccount")}</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      //エラーになるので一旦コメントアウト
      // anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => {}}>
        <CustomIconButton
          icon={<MailIcon />}
          badgeContent={4}
          aria-label="show 4 new mails"
          title={t("nav-bar:messages")}
        />
      </MenuItem>
      <MenuItem onClick={() => {}}>
        <CustomIconButton
          icon={<NotificationsIcon />}
          badgeContent={17}
          aria-label="show 17 new notifications"
          title={t("nav-bar:notifications")}
        />
      </MenuItem>
      <MenuItem onClick={handleMobileMenuOpen}>
        <CustomIconButton
          icon={<AccountCircle />}
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          title={t("nav-bar:profile")}
        />
      </MenuItem>
      <MenuItem onClick={() => {}}>
        <CustomIconButton
          icon={<SettingsIcon />}
          aria-label="settings"
          title={t("nav-bar:settings")}
        />
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" position="fixed" open={isDrawerOpen}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={[{ mr: 2 }, isDrawerOpen && { display: "none" }]}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <AppLogo />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            ENPRO
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <CustomIconButton
              icon={<MailIcon />}
              badgeContent={4}
              aria-label="show 4 new mails"
              onClick={() => {}}
            />
            <CustomIconButton
              icon={<NotificationsIcon />}
              badgeContent={17}
              aria-label="show 17 new notifications"
              onClick={() => {}}
            />
            <CustomIconButton
              icon={<AccountCircle />}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            />
            <CustomIconButton
              icon={<SettingsIcon />}
              aria-label="settings"
              onClick={() => {}}
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <CustomIconButton
              icon={<MoreIcon />}
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            />
          </Box>
        </Toolbar>
        <CustomDrawer
          isDrawerOpen={isDrawerOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
