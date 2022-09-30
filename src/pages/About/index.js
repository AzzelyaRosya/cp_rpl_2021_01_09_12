import Avatar from '@mui/material/Avatar';
import React from 'react';
// Import React router
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// data mapping
import { Data } from './data';

// part of timeline
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

// import img
import banner from '../../assets/img/banneraboutus.png';
import timeline1 from '../../assets/img/timeline1.jpg';
import timeline2 from '../../assets/img/timeline2.jpg';
import timeline3 from '../../assets/img/timeline3.jpg';
import vektor from '../../assets/img/vektorabout.jpg';

// // import style
import { BootstrapButton, cardTeam, gridFirst, gridFlex, Img, descVision, titleVision, visionBox, gridCard, gridCompanyDetail, gridDetail, gridVision } from './styles';
// import useStyles from "./Styles";
// import {} from "./Styles";

export default function index() {
  // const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          height: {
            xs: 230,
            sm: 300,
            lg: 450,
          },
          mt: { xs: 7, sm: 8, md: 8, lg: 8 },
          width: '100%',
        }}
      >
        <img src={banner} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>

      <Box sx={visionBox}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ pt: 2 }}
          // pl: { xs: 1, sm: 1 }, pr: { xs: 1, sm: 1 }
        >
          <Grid item xs={12} lg={5}>
            <Img
              src={vektor}
              sx={{
                width: '100%',
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6} sx={gridVision}>
            <Typography sx={{ ...titleVision, mt: { xs: -1, sm: -5, md: 2, lg: 2 } }}> VISION </Typography>
            <Typography sx={{ ...titleVision, mt: -0.5 }}> AND PORPOSE</Typography>
            <Typography sx={descVision}>Lorem ipsum dira sopspanare tad irar neledes. Lorem ipsum dolor sit amet jennie bp kim jisooeu tad neledes. </Typography>
            <Link to="/product" style={{ textDecoration: 'none' }}>
              <BootstrapButton onClick variant="contained" disableRipple sx={{ mt: 2 }}>
                See All Products
              </BootstrapButton>
            </Link>
          </Grid>
        </Grid>
      </Box>

      {/* TEAM  */}
      <Box sx={{ width: '100%', mt: 7 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: {
                  xs: 26,
                  sm: 30,
                  md: 35,
                  lg: 35,
                },
                fontWeight: 600,
                color: '#36476B',
              }}
            >
              LET'S MEET OUR TEAM
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={gridFirst}>
          {Data.map(({ person, name, position, exmp }) => (
            <Grid item md={3} sm={12} xs={12} sx={gridFlex}>
              <Card sx={cardTeam}>
                <CardContent>
                  <Typography sx={{ m: 'auto', mt: 2 }} gutterBottom>
                    <Avatar src={person} sx={{ m: 'auto', width: 150, height: 150 }} />
                  </Typography>
                  <Typography
                    sx={{
                      mt: 4,
                      textAlign: 'center',
                      fontSize: {
                        lg: 24,
                        md: 20,
                        sm: 20,
                        xs: 20,
                      },
                      fontWeight: 600,
                      color: '#36476B',
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontSize: {
                        lg: 16,
                        md: 14,
                        sm: 14,
                        xs: 14,
                      },
                      fontWeight: 500,
                      color: '#FFFF',
                    }}
                  >
                    {position}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      mt: 4,
                      mb: 6,
                      fontSize: {
                        lg: 14,
                        md: 12,
                        sm: 12,
                        xs: 12,
                      },
                      fontWeight: 450,
                      color: '#36476B',
                    }}
                  >
                    {exmp}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* TIMELINE */}

      <Box sx={{ width: '100%', mt: 7 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                textAlign: 'center',

                fontSize: {
                  xs: 26,
                  sm: 30,
                  md: 35,
                  lg: 35,
                },
                fontWeight: 600,
                color: '#36476B',
              }}
            >
              TIMELINE
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, mt: 4, mb: 20 }}>
        {/* <Grid container spacing={2}>
          <Grid item xs={8}> */}
        {/* timeline 2 */}
        <React.Fragment>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                <CardMedia
                  component="img"
                  maxWidth="100"
                  maxHeight="150"
                  src={timeline1}
                  alt="timeline1"
                  style={{
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    overflow: 'hidden',
                  }}
                />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  fontSize: {
                    lg: 16,
                    md: 15,
                    sm: 15,
                    xs: 12,
                  },
                  fontWeight: 400,
                  color: '#36476B',
                }}
              >
                Meeting with brand partners in Singapore.
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                <CardMedia
                  component="img"
                  maxWidth="100"
                  maxHeight="150"
                  src={timeline2}
                  alt="timeline2"
                  style={{
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    overflow: 'hidden',
                  }}
                />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  fontSize: {
                    lg: 16,
                    md: 15,
                    sm: 15,
                    xs: 12,
                  },
                  fontWeight: 400,
                  color: '#36476B',
                }}
              >
                Celebrated our 7th Birthday.
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                <CardMedia
                  component="img"
                  maxWidth="100"
                  maxHeight="150"
                  src={timeline3}
                  alt="timeline3"
                  style={{
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    overflow: 'hidden',
                  }}
                />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  fontSize: {
                    lg: 16,
                    md: 15,
                    sm: 15,
                    xs: 12,
                  },
                  fontWeight: 400,
                  color: '#36476B',
                }}
              >
                Launched Our Products.
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </React.Fragment>
        {/* </Grid>
        </Grid> */}
      </Box>
    </>
  );
}
