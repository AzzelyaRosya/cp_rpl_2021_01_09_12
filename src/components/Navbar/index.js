import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
// Import Styles
import { appBar, boxCompany, boxMenuDesktop, boxMenuMobile, companyNameDesktop, companyNameMobile, desktopBox, logoDesktop, logoMobile, menuMobile, subMenuDesktop, subMenuMobile } from './styles';
// Data
import { companyName } from './data';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
// Import React router
import { Link } from 'react-router-dom';

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
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" noWrap sx={companyNameDesktop}>
                  {companyName}
                </Typography>
              </Link>
            </Box>
          </Box>
          {/* Menu */}
          <Box sx={boxMenuDesktop}>
            {/* Sub Menu */}
            <Box>
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <Button onClick sx={subMenuDesktop}>
                  Home
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <Button onClick sx={subMenuDesktop}>
                  About
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to="/product" style={{ textDecoration: 'none' }}>
                <Button onClick sx={subMenuDesktop}>
                  Product
                </Button>
              </Link>
            </Box>
          </Box>

          {/* Mobile Ver */}
          <Box sx={boxMenuMobile}>
            {/* Menu Icon */}
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}>
              <MenuIcon sx={{ color: '#fff' }} />
            </IconButton>
            {/* Menu */}
            <Menu
              id="menu-appbar"
              sx={menuMobile}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <Box>
                  <MenuItem onClick>
                    <Typography sx={subMenuMobile}>Home</Typography>
                  </MenuItem>
                </Box>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <Box>
                  <MenuItem onClick>
                    <Typography sx={subMenuMobile}>About</Typography>
                  </MenuItem>
                </Box>
              </Link>
              <Link to="/product" style={{ textDecoration: 'none' }}>
                <Box>
                  <MenuItem onClick>
                    <Typography sx={subMenuMobile}>Product</Typography>
                  </MenuItem>
                </Box>
              </Link>
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
