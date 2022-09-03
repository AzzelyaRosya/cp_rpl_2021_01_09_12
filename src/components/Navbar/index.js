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
import * as React from "react";
// Import Styles
import {
  appBar,
  boxCompany,
  boxMenuDesktop,
  boxMenuMobile,
  companyNameDesktop,
  companyNameMobile,
  desktopBox,
  logoDesktop,
  logoMobile,
  menuMobile,
  subMenuDesktop,
  subMenuMobile,
} from "./styles";
// Data
import { companyName, pages } from "./data";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
// Import React router
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState();
  const [anchorElUser, setAnchorElUser] = React.useState();

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
                <Link to={`${data.path}`} style={{ textDecoration: "none" }}>
                  <Box key={data.id}>
                    <MenuItem onClick>
                      <Typography sx={subMenuMobile}>{data.nav}</Typography>
                    </MenuItem>
                  </Box>
                </Link>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
