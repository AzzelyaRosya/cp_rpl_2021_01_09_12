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
  Divider,
} from "@mui/material";
import CarouselBanner from "../../components/Carousel/index";
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
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

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
      </Box> */}{" "}
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
          mb: 2,
        }}
      >
        BEST SOLUTION FOR YOU!
      </Typography>
      <Container sx={{ justifyContent: "center", alignItems: "center" }}>
        {/* <Grid sx={{ justifyContent: "center", alignItems: "center" }}>
          <Grid item>
            <Card
              sx={{
                maxWidth: 230,
                height: 300,
                backgroundColor: "#36476B",
                borderRadius: 3,
              }}
              elevation={0}
            >
              <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5">eee</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid> */}
        <Grid
          container
          xs={12}
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          rowSpacing={2}
          // columnSpacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs>
            <Box
              sx={{
                maxWidth: 230,
                height: 300,
                backgroundColor: "#36476B",
                borderRadius: 3,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
              elevation={3}
            >
              {/* Icon */}
              <PersonRoundedIcon
                sx={{ mt: 2, color: "#DAE3F8", width: 130, height: 130 }}
              />
              {/* Title */}
              <Typography
                sx={{
                  mt: -1,
                  mb: -0.5,
                  fontSize: 25,
                  color: "#DAE3F8",
                  fontWeight: 600,
                }}
              >
                TITLE
              </Typography>
              <hr
                style={{
                  width: 80,
                  border: 1.5,
                  borderColor: "#fff",
                  borderStyle: "solid",
                }}
              />

              {/* Description */}
              <Typography
                sx={{ mt: 2, fontSize: 15, color: "#fff", pl: 2, pr: 2 }}
              >
                Lorem ipsum dira sopspanare tad irar neledes sore: Irene
                Jonsson.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <Box
              sx={{
                maxWidth: 230,
                height: 300,
                backgroundColor: "#36476B",
                borderRadius: 3,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
              elevation={3}
            >
              {/* Icon */}
              <PersonRoundedIcon
                sx={{ mt: 2, color: "#DAE3F8", width: 130, height: 130 }}
              />
              {/* Title */}
              <Typography
                sx={{
                  mt: -1,
                  mb: -0.5,
                  fontSize: 25,
                  color: "#DAE3F8",
                  fontWeight: 600,
                }}
              >
                TITLE
              </Typography>
              <hr
                style={{
                  width: 80,
                  border: 1.5,
                  borderColor: "#fff",
                  borderStyle: "solid",
                }}
              />

              {/* Description */}
              <Typography
                sx={{ mt: 2, fontSize: 15, color: "#fff", pl: 2, pr: 2 }}
              >
                Lorem ipsum dira sopspanare tad irar neledes sore: Irene
                Jonsson.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <Box
              sx={{
                maxWidth: 230,
                height: 300,
                backgroundColor: "#36476B",
                borderRadius: 3,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
              elevation={3}
            >
              {/* Icon */}
              <PersonRoundedIcon
                sx={{ mt: 2, color: "#DAE3F8", width: 130, height: 130 }}
              />
              {/* Title */}
              <Typography
                sx={{
                  mt: -1,
                  mb: -0.5,
                  fontSize: 25,
                  color: "#DAE3F8",
                  fontWeight: 600,
                }}
              >
                TITLE
              </Typography>
              <hr
                style={{
                  width: 80,
                  border: 1.5,
                  borderColor: "#fff",
                  borderStyle: "solid",
                }}
              />

              {/* Description */}
              <Typography
                sx={{ mt: 2, fontSize: 15, color: "#fff", pl: 2, pr: 2 }}
              >
                Lorem ipsum dira sopspanare tad irar neledes sore: Irene
                Jonsson.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl"></Container>
    </>
  );
}
