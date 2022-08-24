import * as React from "react";

// logo
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";

// import icon
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";

import { Box, Typography, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 200,
        backgroundColor: "#36476B",
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{ justifyContent: "center", display: "flex" }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <WifiTetheringIcon sx={{ fontSize: 12, color: "white", mt: -5 }} />
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
          <Typography sx={{ fontSize: 12, color: "white", mt: -5 }}>
            Company Name
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
          <PhoneIcon sx={{ fontSize: 18, mr: 1, color: "#fff" }} />
          <Typography sx={{ color: "#fff", fontSize: 12 }}>
            (021) 23081805
          </Typography>
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
          <Typography sx={{ color: "#CDD1DA", fontSize: 12 }}>
            &copy; Copyright 2022
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
