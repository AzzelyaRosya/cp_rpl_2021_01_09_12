import React from 'react';
import { Container, Box, Typography, Grid, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, Paper, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
// data mapping
import { Data } from './data';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
// part of timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

// import img
import banner from '../../assets/img/banneraboutus.png';
import vektor from '../../assets/img/vektorabout.jpg';
import timeline1 from '../../assets/img/timeline1.jpg';
import timeline2 from '../../assets/img/timeline2.jpg';
import timeline3 from '../../assets/img/timeline3.jpg';

import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

// // import style
import { BootstrapButton, Img, gridFirst, gridFlex, cardTeam } from './Styles';
// import useStyles from "./Styles";
// import {} from "./Styles";

export default function index() {
  // const classes = useStyles();

  return (
    <>
      <Img
        src={banner}
        sx={{
          width: '100%',
          height: '100%',
          mr: 2,
          mt: 'auto',
          textAlign: 'right',
        }}
        style={{ objectFit: 'cover' }}
      />

      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Img
              src={vektor}
              sx={{
                width: '100%',
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
                fontWeight: 800,
                color: '#36476B',
                mt: 2,
              }}
            >
              VISION <br /> AND PORPOSE
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: 14,
                  md: 10,
                  sm: 10,
                  xs: 8,
                },
                fontWeight: 450,
                color: '#36476B',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <BootstrapButton variant="contained" disableRipple sx={{ mt: 2 }}>
              See All Products
            </BootstrapButton>
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
                  lg: 42,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
                fontWeight: 600,
                color: '#36476B',
              }}
            >
              LET'S MEET OUR TEAM
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} pb={10} sx={gridFirst}>
          {Data.map(({ person, name, position, exmp }) => (
            <Grid item md={3.3} sm={12} xs={12} sx={gridFlex}>
              <Card sx={cardTeam}>
                <CardContent>
                  <Typography sx={{ m: 'auto', mt: 2 }} gutterBottom>
                    <Avatar src={person} sx={{ m: 'auto', width: 100, height: 100 }} />
                  </Typography>
                  <Typography
                    sx={{
                      mt: 4,
                      textAlign: 'center',
                      fontSize: {
                        lg: 24,
                        md: 15,
                        sm: 15,
                        xs: 10,
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
                        md: 12,
                        sm: 10,
                        xs: 10,
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
                        sm: 10,
                        xs: 10,
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

      <Box sx={{ flexGrow: 1, mb: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ mt: 6 }}>
            <Box sx={{ flexGrow: 1, mt: 20 }}>
              <Typography
                sx={{
                  ml: 5,
                  textAlign: 'center',
                  fontSize: {
                    lg: 42,
                    md: 18,
                    sm: 12,
                    xs: 10,
                  },
                  fontWeight: 600,
                  color: '#36476B',
                }}
                style={{
                  borderLeft: '7px #6D8CD0 solid',
                  height: 120,
                }}
              >
                <Typography
                  sx={{
                    ml: -18,
                    textAlign: 'center',
                    fontSize: {
                      lg: 42,
                      md: 20,
                      sm: 15,
                      xs: 10,
                    },
                    fontWeight: 600,
                    color: '#36476B',
                  }}
                >
                  TIMELINE
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={4} sx={{ ml: -18 }}>
                      <Typography
                        sx={{
                          ml: 37,
                          textAlign: 'center',
                          fontSize: {
                            lg: 42,
                            md: 20,
                            sm: 15,
                            xs: 10,
                          },
                          fontWeight: 600,
                          color: '#36476B',
                        }}
                      >
                        OF
                      </Typography>
                    </Grid>
                    <Grid item xs={4} md={2}>
                      <Typography
                        sx={{
                          mt: 1,
                          ml: 24,
                          textAlign: 'center',
                          fontSize: {
                            lg: 15,
                            md: 12,
                            sm: 10,
                            xs: 10,
                          },
                          fontWeight: 600,
                          color: '#6D8CD0',
                        }}
                      >
                        COMPANY'S HISTORY
                      </Typography>
                    </Grid>
                  </Grid>
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            {/* timeline 2 */}
            <React.Fragment>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    <CardMedia
                      component="img"
                      minWidth="100"
                      height="150"
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
                      textAlign: 'center',
                      fontSize: {
                        lg: 16,
                        md: 15,
                        sm: 15,
                        xs: 10,
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
                      width="100"
                      height="150"
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
                      textAlign: 'center',
                      fontSize: {
                        lg: 16,
                        md: 15,
                        sm: 15,
                        xs: 10,
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
                      width="100"
                      height="150"
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
                      textAlign: 'center',
                      fontSize: {
                        lg: 16,
                        md: 15,
                        sm: 15,
                        xs: 10,
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
