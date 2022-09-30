import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import * as React from 'react';
// Import Icon & Images
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import vectorBanner from '../../assets/img/vectorbanner.png';
// Import component
import CarouselBanner from '../../components/Carousel/index';
import Maps from '../../components/Maps';
// Import data
import { solutionData, textField } from './data';
// Import Styles
import {
  address,
  BootstrapButton,
  boxCard,
  boxContact,
  boxDetail,
  boxMaps,
  descCard,
  descVision,
  titleVision,
  visionBox,
  gridCard,
  gridCompanyDetail,
  gridDetail,
  gridVision,
  hrCard,
  iconCard,
  iconContact,
  Img,
  nameCompany,
  submitButton,
  textContact,
  textFields,
  textTitle,
  titleCard,
  titleTextfield,
} from './styles';
// Import React router
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <>
      {/* Carousel */}
      <CarouselBanner />

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
            <Img
              src={vectorBanner}
              sx={{
                width: '100%',
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6} sx={gridVision}>
            <Typography sx={{ ...titleVision, mt: { xs: -4, sm: -5, md: 2, lg: 2 } }}>WHAT</Typography>
            <Typography sx={{ ...titleVision, mt: -0.5 }}>WE DO?</Typography>
            <Typography sx={descVision}>Lorem ipsum dira sopspanare tad irar neledes. Lorem ipsum dolor sit amet jennie bp kim jisooeu tad neledes. </Typography>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <BootstrapButton onClick variant="contained" disableRipple sx={{ mt: 2 }}>
                About Me!
              </BootstrapButton>
            </Link>
          </Grid>
        </Grid>
      </Box>

      {/* Title 1: Solution */}
      <Typography sx={textTitle}>BEST SOLUTION FOR YOU!</Typography>

      <Grid container direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} xs={12} spacing={'auto'} sx={gridCard}>
        {solutionData.map((data) => (
          <Grid item key={data.id} sx={{ justifyContent: 'center', mb: { lg: 0, sm: 4, xs: 4 }, mr: { lg: 5, sm: 0, xs: 0 } }}>
            <Box
              sx={{
                ...boxCard,
                backgroundColor: `${data.id % 2 === 0 ? '#9AAFDF' : '#36476B'}`,
              }}
              elevation={3}
            >
              {/* Icon */}
              <div key={data.id}>
                <data.icon
                  sx={{
                    ...iconCard,
                    color: `${data.id % 2 === 0 ? '#36476B' : ' #DAE3F8'}`,
                  }}
                />
              </div>
              {/* Title */}
              <Typography
                sx={{
                  ...titleCard,
                  color: `${data.id % 2 === 0 ? '#36476B' : ' #DAE3F8'}`,
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
        <Grid container xs={12} sx={gridCompanyDetail} spacing={{ sm: 2, md: 10, lg: 25 }}>
          <Grid item>
            <Grid item>
              <Typography sx={nameCompany}>PT BRILYAN TRIMATRA UTAMA</Typography>
            </Grid>
            <Grid item>
              <Typography sx={address}>
                Jl. Bintara VIII No.2, RT.005/RW.003, Bintara, <br />
                Kec. Bekasi Barat, Kota Bekasi, Jawa Barat 17134
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              item
              sx={{
                display: 'flex',
                mb: 1,
              }}
            >
              <EmailRoundedIcon sx={iconContact} />
              <Typography sx={textContact}>sikobagiduo@gmail.com</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex' }}>
              <LocalPhoneRoundedIcon sx={iconContact} />
              <Typography sx={textContact}>(021) 23081805</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={boxMaps}>
          <Maps />
        </Box>
      </Box>

      <Typography sx={textTitle}>CONTACT US!</Typography>
      <Box>
        <Box sx={boxContact}>
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
          <Grid container align={'center'}>
            <Grid item xs={12} pl={3} pr={3}>
              <Button sx={submitButton} onClick>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
