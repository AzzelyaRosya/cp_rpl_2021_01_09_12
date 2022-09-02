import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Card,
  CardContent,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  TextField,
  Divider,
} from "@mui/material";
import CarouselBanner from "../../components/Carousel/index";
import Maps from "../../components/Maps";
// Import Styles
// import {
//   appBar,
//   boxCompany,
//   boxMenuDesktop,
//   boxMenuMobile,
//   buttonTranslate,
//   companyNameDesktop,
//   companyNameMobile,
//   desktopBox,
//   logoDesktop,
//   logoMobile,
//   menuMobile,
//   menuTranslate,
//   subMenuDesktop,
//   subMenuMobile,
//   subMenuTranslate,
// } from "./styles";

import { solutionData } from "./data";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import vectorBanner from "../../assets/img/vectorbanner.png";
export default function index() {
  return (
    <>
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
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#DAE3F8",
          height: { xs: "330px", sm: "340px", lg: "330px" },
          display: "flex",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          justifyContent: "center",
        }}
      >
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
              sx={{
                margin: "auto",
                display: "block",
              }}
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ ml: { xs: 2, sm: 2 }, pr: { xs: 1, sm: 1 } }}
          >
            <Typography
              sx={{
                fontSize: {
                  lg: 52,
                  md: 48,
                  sm: 42,
                  xs: 16,
                },
                fontWeight: 700,
                color: "#36476B",
                mt: { xs: -4, sm: -5, md: 2, lg: 2 },
              }}
            >
              VISION <br /> AND PURPOSE
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: 16,
                  md: 10,
                  sm: 10,
                  xs: 8,
                },
                fontWeight: 400,
                color: "#36476B",
              }}
            >
              LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM
              DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT
              AMETLOREM IPSUM DOLOR SIT AMET
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: {
            xs: 21.7,
            sm: 30,
            md: 35,
            lg: 35,
          },
          color: "#36476B",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "uppercase",
          mt: {
            xs: 3,
            sm: 4.5,
            md: 3,
          },
          mb: 3,
        }}
      >
        BEST SOLUTION FOR YOU!
      </Typography>

      {/* <Container
        sx={{ margin: "auto", justifyContent: "center", alignItems: "center" }}
      > */}
      <Grid
        container
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        // rowSpacing={7}
        // columnSpacing={1}
        xs={12}
        spacing={8}
        sx={{ display: "flex", justifyContent: "center" }}
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
                backgroundColor: `${data.id % 2 === 0 ? "#9AAFDF" : "#36476B"}`,
                borderRadius: 3,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
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
              <hr
                style={{
                  width: 40,
                  border: 2,
                  borderColor: "#fff",
                  borderStyle: "solid",
                }}
              />

              {/* Description */}
              <Typography
                sx={{ mt: 2, fontSize: 15, color: "#fff", pl: 2, pr: 2 }}
              >
                {data.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#DAE3F8",
          // height: { xs: "330px", sm: "340px", lg: "600x" },
          height: "600px",
          borderRadius: 5,
          justifyContent: "center",
          mt: 7,
        }}
      >
        <Grid
          container
          sx={{ pt: 1, justifyContent: "center", margin: "auto" }}
        >
          <Grid item>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: {
                  xs: 21.7,
                  sm: 30,
                  md: 35,
                  lg: 35,
                },
                color: "#36476B",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "uppercase",
                mt: {
                  xs: 3,
                  sm: 4.5,
                  md: 3,
                },
                mb: 3,
              }}
            >
              OUR OFFICE
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            mb: 3,
          }}
          spacing={20}
        >
          <Grid item>
            <Grid item>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: {
                    xs: 21.7,
                    sm: 20,
                    md: 20,
                    lg: 20,
                  },
                  color: "#36476B",
                  textTransform: "uppercase",
                }}
              >
                PT BRILYAN TRIMATRA UTAMA
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 16, width: 500 }}>
                Jl. Bintara VIII No.2, RT.005/RW.003, Bintara, Kec. Bekasi
                Barat, Kota Bekasi, Jawa Barat 17134
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item sx={{ display: "flex", mb: 1 }}>
              <LocalPhoneRoundedIcon
                sx={{ mr: 1.5, color: "#36476B", width: 30, height: 30 }}
              />
              <Typography sx={{ fontSize: 16 }}>
                sikobagiduo@gmail.com
              </Typography>
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <EmailRoundedIcon
                sx={{ mr: 1.5, color: "#36476B", width: 30, height: 30 }}
              />
              <Typography sx={{ fontSize: 16 }}>(021) 23081805</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* </Container> */}

      <Maps />
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: {
            xs: 21.7,
            sm: 30,
            md: 35,
            lg: 35,
          },
          color: "#36476B",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "uppercase",
          mt: {
            xs: 3,
            sm: 4.5,
            md: 3,
          },
          mb: 3,
        }}
      >
        CONTACT US!
      </Typography>
      <Box
        maxWidth="xl"
        mb={3}
        justifyContent="center"
        sx={{
          width: "60%",
          backgroundColor: "#36476B",
          // height: { xs: "330px", sm: "340px", lg: "600x" },
          height: "600px",
          borderRadius: 3,
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Grid container spacing={1} align="center">
          <Grid xs={12} item mb={2.5}>
            {/* Textfield Name */}
            <Typography sx={{ textAlign: "left", fontSize: 16, color: "#fff" }}>
              Name
            </Typography>
            <TextField
              className="text-field"
              placeholder="Enter your name..."
              inputProps={{
                style: {
                  fontSize: 15,
                  height: 15,
                  borderColor: "#fff",
                },
              }}
              fullWidth
              sx={{
                width: 600,
                backgroundColor: "#fff",
                borderRadius: 2,
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "1.5px solid",
                  borderColor: "fff",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "fff",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "fff",
                  },
              }}
            />
          </Grid>
          <Grid xs={12} item mb={2.5}>
            {/* Textfield Email */}
            <TextField
              label="Email"
              className="text-field"
              placeholder="Enter your email..."
              type="email"
              inputProps={{
                style: {
                  fontSize: 15,
                  height: 20,
                },
              }}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1f2235",
                  color: "#1f2235",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#1f2235",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#1f2235",
                  },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1f2235",
                  fontWeight: "bold",
                },

                width: {
                  xl: 600,
                  lg: 600,
                  md: 380,
                  sm: 370,
                  xs: 280,
                },
              }}
            />
          </Grid>

          <Grid item xs={12} mb={2}>
            {/* Textfield Message */}
            <TextField
              label="Message"
              className="text-field"
              multiline
              rows={4}
              placeholder="Type your message here..."
              inputProps={{
                style: {
                  fontSize: 15,
                  height: 100,
                },
              }}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1f2235",
                  color: "#1f2235",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#1f2235",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#1f2235",
                  },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1f2235",
                  fontWeight: "bold",
                },

                width: {
                  xl: 600,
                  lg: 600,
                  md: 380,
                  sm: 370,
                  xs: 280,
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            {/* Button */}
            <Button
              type="submit"
              variant="contained"
              className="btn"
              style={{
                maxWidth: "90px",
                maxHeight: "40px",
                minWidth: "90px",
                minHeight: "40px",
              }}
            >
              Submit!
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
