import * as React from 'react';

// import icon
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

import { Box, Typography, Grid } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 200,
        backgroundColor: '#36476B',
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={2} style={{ justifyContent: 'center', display: 'flex' }}>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <FacebookIcon sx={{ color: '#fff', fontSize: 30, pl: 10, pr: 10 }} />
          <YouTubeIcon sx={{ color: '#fff', fontSize: 30, pr: 10 }} />
          <InstagramIcon sx={{ color: '#fff', fontSize: 30, pr: 10 }} />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ color: '#fff', fontSize: 12 }}>
            Jl. Lenteng Agung (LA) Blok M No.18 <br /> Bekasi Pusat , Jawa Barat Indonesia.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PhoneIcon sx={{ fontSize: 18, mr: 1, color: '#fff' }} />
          <Typography sx={{ color: '#fff', fontSize: 12 }}>(021) 23081805</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          mb={-4}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ color: '#fff', fontSize: 12 }}>&copy; Copyright 2022</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
