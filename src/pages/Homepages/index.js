import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import * as React from "react";
// Import Icon & Images
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import vectorBanner from "../../assets/img/vectorbanner.png";
// Import component
import CarouselBanner from "../../components/Carousel/index";
import Maps from "../../components/Maps";
// Import data
import { solutionData, textField } from "./data";

// Import Styles
import {
  visionBox,
  imgBanner,
  gridVision,
  titleVision,
  descVision,
  textTitle,
  gridCard,
  boxCard,
  iconCard,
  hrCard,
  descCard,
  boxDetail,
  gridDetail,
  gridCompanyDetail,
  nameCompany,
  address,
  iconContact,
  textContact,
  boxMaps,
  boxContact,
  titleTextfield,
  textFields,
  submitButton,
} from "./styles";

export default function index() {
  return (
    <>
      {/* Carousel */}
      <CarouselBanner />
      {/* <Box
        sx={{
          backgroundColor: "#DAE3F8",
          height: "330px",
          display: "flex",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      >
        <Box sx={{ mt: 4, ml: 4 }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: 55,
              color: "#36476B",
              textTransform: "uppercase",
            }}
            mb={-2}
          >
            WHAT
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: 55,
              color: "#36476B",
              textTransform: "uppercase",
            }}
          >
            WE DO?
          </Typography>
          <Typography
            sx={{
              ml: 1,
              width: 450,
              fontSize: 16,
              color: "#36476B",
              lineHeight: 1.5,
            }}
          >
            LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM
            DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT
            AMETLOREM IPSUM DOLOR SIT AMET
          </Typography>
        </Box>
        <Box mt={4} sx={{ right: 0 }}>
          <img src={vectorBanner} style={{ width: 460, height: 280 }} />
        </Box>
      </Box> */}
      {/* Vision Mission of Company*/}
      <Box sx={visionBox}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ pt: 2 }}
          // pl: { xs: 1, sm: 1 }, pr: { xs: 1, sm: 1 }
        >
          <Grid item xs={12} lg={5}>
            <img
              src={vectorBanner}
              sx={imgBanner}
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={12} lg={6} sx={gridVision}>
            <Typography sx={titleVision}>
              VISION <br /> AND PURPOSE
            </Typography>
            <Typography sx={descVision}>
              LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM
              DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT
              AMETLOREM IPSUM DOLOR SIT AMET
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Title 1: Solution */}
      <Typography sx={textTitle}>BEST SOLUTION FOR YOU!</Typography>

      <Grid
        container
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        // rowSpacing={7}
        // columnSpacing={1}
        xs={12}
        spacing={8}
        sx={gridCard}
      >
        {solutionData.map((data) => (
          <Grid
            item
            key={data.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                maxWidth: 230,
                height: 300,
                borderRadius: 3,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: `${data.id % 2 === 0 ? "#9AAFDF" : "#36476B"}`,
              }}
              elevation={3}
            >
              {/* Icon */}
              <div key={data.id}>
                <data.icon
                  sx={{
                    mt: 2,
                    color: `${data.id % 2 === 0 ? "#36476B" : " #DAE3F8"}`,
                    width: 130,
                    height: 130,
                  }}
                />
              </div>
              {/* Title */}
              <Typography
                sx={{
                  mt: -1,
                  mb: -0.5,
                  fontSize: 25,
                  color: `${data.id % 2 === 0 ? "#36476B" : " #DAE3F8"}`,
                  fontWeight: 600,
                }}
              >
                {data.title}
              </Typography>
              <hr style={hrCard} />
              {/* Description */}
              <Typography sx={descCard}>{data.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={boxDetail}>
        <Grid container sx={gridDetail}>
          <Grid item>
            <Typography sx={textTitle}>OUR OFFICE</Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} sx={gridCompanyDetail} spacing={20}>
          <Grid item>
            <Grid item>
              <Typography sx={nameCompany}>
                PT BRILYAN TRIMATRA UTAMA
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={address}>
                Jl. Bintara VIII No.2, RT.005/RW.003, Bintara, Kec. Bekasi
                Barat, Kota Bekasi, Jawa Barat 17134
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item sx={{ display: "flex", mb: 1 }}>
              <EmailRoundedIcon sx={iconContact} />
              <Typography sx={textContact}>sikobagiduo@gmail.com</Typography>
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <LocalPhoneRoundedIcon sx={iconContact} />
              <Typography sx={textContact}>(021) 23081805</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={boxMaps}>
          <Maps />
        </Box>
      </Box>
      {/* </Container> */}

      <Typography sx={textTitle}>CONTACT US!</Typography>
      <Box maxWidth="xl" sx={boxContact}>
        {textField.map((field) => (
          <Box sx={{ pl: 3.5, pr: 3.5, pt: 2 }} key={field.id}>
            <Typography sx={titleTextfield}>{field.title}</Typography>
            <TextField
              key={field.id}
              placeholder={field.desc}
              sx={textFields}
              multiline
              inputProps={{
                style: {
                  fontSize: 14,
                  height: `${field.heights}`,
                },
              }}
            />
          </Box>
        ))}
        <Grid container align={"center"}>
          <Grid item xs={12}>
            <Button sx={submitButton} onClick>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
