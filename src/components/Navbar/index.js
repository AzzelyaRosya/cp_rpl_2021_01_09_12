import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
// Import Styles
import {
  appBar,
  boxCompany,
  boxMenuDesktop,
  boxMenuMobile,
  buttonTranslate,
  companyNameDesktop,
  companyNameMobile,
  desktopBox,
  logoDesktop,
  logoMobile,
  menuMobile,
  menuTranslate,
  subMenuDesktop,
  subMenuMobile,
  subMenuTranslate,
} from "./styles";
// import pages from "./data";
// icons
import GTranslateIcon from "@mui/icons-material/GTranslate";
import MenuIcon from "@mui/icons-material/Menu";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
// Import React router
import { Link } from "react-router-dom";
// Data Menu
const pages = [
  {
    id: 1,
    nav: "Beranda",
    path: "/",
  },
  {
    id: 2,
    nav: "Tentang",
    path: "/about",
  },
  {
    id: 3,
    nav: "Produk",
    path: "/product",
  },
];

// Data SubMenu Translate
const translate = ["Bahasa (INA)", "Inggris (ENG)"];
// Company Name
const companyName = ["Company Name"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenLanguageMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Ver */}
          {/* Company Identity*/}
          <Box sx={desktopBox}>
            <Box sx={boxCompany}>
              {/* Logo */}
              <WifiTetheringIcon sx={logoDesktop} />
              {/* Company Name */}
              <Typography variant="h6" noWrap sx={companyNameDesktop}>
                {companyName}
              </Typography>
            </Box>
          </Box>
          {/* Menu */}
          <Box sx={boxMenuDesktop}>
            {/* Sub Menu */}
            {pages.map((data) => (
              <Box key={data.id}>
                <Link to={`${data.path}`} style={{ textDecoration: "none" }}>
                  <Button onClick sx={subMenuDesktop}>
                    {data.nav}
                  </Button>
                </Link>
              </Box>
            ))}
          </Box>

          {/* Mobile Ver */}
          <Box sx={boxMenuMobile}>
            {/* Menu Icon */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>
            {/* Menu */}
            <Menu
              id="menu-appbar"
              sx={menuMobile}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {/* Menu Items/Sub Menu */}
              {pages.map((data) => (
                <MenuItem key={data.id} onClick={handleCloseNavMenu}>
                  <Typography sx={subMenuMobile}>{data.nav}</Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* Company Identity */}
            <Box flexGrow={1} sx={boxCompany}>
              {/* Logo */}
              <WifiTetheringIcon sx={logoMobile} />
              {/* Company Name */}
              <Typography variant="h5" noWrap sx={companyNameMobile}>
                {companyName}
              </Typography>
            </Box>
          </Box>

          {/* Menu Translate */}
          <Box>
            {/* Icon */}
            <IconButton onClick={handleOpenLanguageMenu} sx={buttonTranslate}>
              <GTranslateIcon />
            </IconButton>
            <Menu
              sx={menuTranslate}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseLanguageMenu}
            >
              {/* Sub Menu */}
              {translate.map((language) => (
                <MenuItem key={language} onClick={handleCloseLanguageMenu}>
                  <Typography sx={subMenuTranslate}>{language}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
