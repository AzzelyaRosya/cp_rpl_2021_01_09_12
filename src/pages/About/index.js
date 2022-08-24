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
// import useStyles from "./Styles";
// import {} from "./Styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: {
    lg: 16,
    md: 12,
    sm: 12,
    xs: 10,
  },
  padding: "10px 20px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "#FFFFF",
  backgroundColor: "#6D8CD0",
  borderColor: "#6D8CD0",
  borderRadius: 20,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#eeeee",
    borderColor: "#eeeee",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#eeeee",
    borderColor: "#eeeee",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.5rem rgba(0,123,255,.5)",
  },
});

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
          textAlign: "right",
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img src={vektor} style={{ width: "100%", ml: 10 }} />
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

      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Grid container spacing={2} minHeight={250}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Item>
              <Avatar src={ava1} />
            </Item>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Item>
              <Avatar src={ava2} />
            </Item>
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Item>
              <Avatar src={ava3} />
            </Item>
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Item>
              <Avatar src={ava4} />
            </Item>
          </Grid>
        </Grid>
      </Box>

      {/* TIMELINE */}

      <Box sx={{ width: "100%", mt: 6, mb: 15 }}>
        <Grid
          container
          rowSpacing={1}
          justifyContent="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6} justifyContent="center">
            <Typography
              sx={{
                ml: 25,
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
              style={{
                borderLeft: "7px #6D8CD0 solid",
                height: 150,
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
                      mr: 18,
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
                      mr: 20,
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
          <Grid item xs={6} sx={{ ml: -25 }}>
            <React.Fragment>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    <img
                      src={timeline1}
                      style={{
                        width: "75%",
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
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    <img
                      src={timeline2}
                      style={{
                        width: "75%",
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
                  <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    <img
                      src={timeline3}
                      style={{
                        width: "75%",
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
                  <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    9:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
              </Timeline>
            </React.Fragment>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
