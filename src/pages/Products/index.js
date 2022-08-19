import React from 'react';
import { Box, Typography, Grid, AppBar, Toolbar, IconButton, Menu, Button, MenuItem, Tooltip, Container, Paper } from '@mui/material';
import ReactPlayer from 'react-player';

import bannerproduct from '../../assets/img/bannerproduct.png';

export default function Products() {
  return (
    <>
      <img src={bannerproduct} style={{ width: '100%', height: 400 }} />

      <Box>
        <Typography sx={{ color: '#36476B', fontWeight: 700, fontSize: 30, textAlign: 'center' }}>BEST PRODUCTS FOR YOU!</Typography>
      </Box>
    </>
  );
}
