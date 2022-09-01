import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Paper,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
// part of timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

// import img
import banner from "../../assets/img/banneraboutus.png";
import vektor from "../../assets/img/vektorabout.jpg";
import ava1 from "../../assets/img/ava1.jpg";
import ava2 from "../../assets/img/ava2.jpg";
import ava3 from "../../assets/img/ava3.jpg";
import ava4 from "../../assets/img/ava4.jpg";
import timeline1 from "../../assets/img/timeline1.jpg";
import timeline2 from "../../assets/img/timeline2.jpg";
import timeline3 from "../../assets/img/timeline3.jpg";

// // import style

import { BootstrapButton, Img } from "./styles";
// import useStyles from "./Styles";
// import {} from "./Styles";

export default function index() {
  // const classes = useStyles();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    height: 140,
    width: 100,
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Img
        src={banner}
        sx={{
          width: "100%",
          height: "100%",
          mr: 2,
          mt: "auto",
          textAlign: "right",
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Img
              src={vektor}
              sx={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={6}>
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
                mt: 2,
              }}
            >
              VISION <br /> AND PORPOSE
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
            <BootstrapButton variant="contained" disableRipple sx={{ mt: 2 }}>
              See All Products
            </BootstrapButton>
          </Grid>
        </Grid>
      </Box>

      {/* TEAM  */}
      <Box sx={{ width: "100%", mt: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: {
                  lg: 42,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
                fontWeight: 600,
                color: "#36476B",
              }}
            >
              LET'S MEET OUR TEAM
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 6, mb: 10 }}>
        <Grid
          container
          spacing={2}
          sx={{
            "--Grid-borderWidth": "1px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
            },
          }}
        >
          <Grid {...{ xs: 12, sm: 6, md: 4, lg: 3 }} minHeight={160}>
            <Card sx={{ minWidth: 275, color: "#6D8CD0" }}>
              <CardContent>
                <Typography
                  sx={{ m: "auto" }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Avatar src={ava1} sx={{ width: 100, height: 100 }} />
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: {
                      lg: 42,
                      md: 20,
                      sm: 15,
                      xs: 10,
                    },
                    fontWeight: 600,
                    color: "#36476B",
                  }}
                >
                  Ricky Karun
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* TIMELINE */}

      <Box sx={{ flexGrow: 1, mb: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ mt: 6 }}>
            <Typography
              sx={{
                ml: 5,
                textAlign: "center",
                fontSize: {
                  lg: 42,
                  md: 18,
                  sm: 12,
                  xs: 10,
                },
                fontWeight: 600,
                color: "#36476B",
              }}
              style={{
                borderLeft: "7px #6D8CD0 solid",
                height: 130,
              }}
            >
              <Typography
                sx={{
                  ml: -18,
                  textAlign: "center",
                  fontSize: {
                    lg: 42,
                    md: 20,
                    sm: 15,
                    xs: 10,
                  },
                  fontWeight: 600,
                  color: "#36476B",
                }}
              >
                TIMELINE
                <Grid item xs={6} md={4} sx={{ ml: -18 }}>
                  <Typography
                    sx={{
                      ml: 37,
                      textAlign: "center",
                      fontSize: {
                        lg: 42,
                        md: 20,
                        sm: 15,
                        xs: 10,
                      },
                      fontWeight: 600,
                      color: "#36476B",
                    }}
                  >
                    OF
                  </Typography>
                </Grid>
                <Grid item xs={6} md={8}>
                  <Typography
                    sx={{
                      ml: 20,
                      textAlign: "center",
                      fontSize: {
                        lg: 24,
                        md: 15,
                        sm: 15,
                        xs: 10,
                      },
                      fontWeight: 600,
                      color: "#6D8CD0",
                    }}
                  >
                    COMPANY'S HISTORY
                  </Typography>
                </Grid>
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <React.Fragment>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    <CardMedia
                      component="img"
                      width="100"
                      height="150"
                      src={timeline1}
                      alt="timeline1"
                      style={{
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        overflow: "hidden",
                      }}
                    />
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    Meeting with brand partners in Singapore.
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    <CardMedia
                      component="img"
                      width="100"
                      height="150"
                      src={timeline2}
                      alt="timeline2"
                      style={{
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        overflow: "hidden",
                      }}
                    />
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    Celebrated our 7th Birthday.
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    <CardMedia
                      component="img"
                      width="100"
                      height="150"
                      src={timeline3}
                      alt="timeline3"
                      style={{
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        overflow: "hidden",
                      }}
                    />
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Launched Our Products.</TimelineContent>
                </TimelineItem>
              </Timeline>
            </React.Fragment>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
