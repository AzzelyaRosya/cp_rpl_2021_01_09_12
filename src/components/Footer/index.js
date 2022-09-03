import * as React from "react";

// logo
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";

// import icon
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Box, Grid, Typography } from "@mui/material";
import {
  address,
  boxFooter,
  companyName,
  copyright,
  iconContact,
  logo,
  phoneIcon,
  telp,
} from "./styles";

export default function Footer() {
  return (
    <Box sx={boxFooter}>
      <Grid
        container
        spacing={2}
        style={{ justifyContent: "center", display: "flex" }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <WifiTetheringIcon sx={logo} />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={companyName}>Company Name</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          sx={{ mt: -1 }}
        >
          <FacebookIcon sx={{ ...iconContact, mr: 1 }} />
          <InstagramIcon sx={{ ...iconContact, mr: 1 }} />
          <YouTubeIcon sx={iconContact} />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={address}>
            Jl. Lenteng Agung (LA) Blok M No.18 <br /> Bekasi Pusat, Jawa Barat
            Indonesia.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PhoneIcon sx={phoneIcon} />
          <Typography sx={telp}>(021) 23081805</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          mb={-4}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={copyright}>&copy; Copyright 2022</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
