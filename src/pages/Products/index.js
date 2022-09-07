import { Box, Button, Card, CardActions, CardContent, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

// img and video
import bannerproduct from '../../assets/img/bannerproduct.png';
import pd1 from '../../assets/img/pd1.jpg';
import pd2 from '../../assets/img/pd2.jpg';
import pd3 from '../../assets/img/pd3.jpg';
import apaaja from '../../assets/video/contohvideo.mp4';

// icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// style
import Colors from '../../theme/Color';
import { borderRadiusImages, buttonHover, cardStyle, flexCard, flexGrid, radiusVideo, typoCardStyle, textTitle } from './styles';

export default function Products() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <>
      <img src={bannerproduct} style={{ width: '100%', height: 400, objectFit: 'cover' }} />

      <Box
        sx={{ align: 'center' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Grid>
          <Typography sx={textTitle}>BEST PRODUCTS FOR YOU!</Typography>
        </Grid>

        <Grid sx={{ display: 'flex', justifyContent: 'center', pb: 5 }}>
          <video
            // autoPlay="true"
            controls
            type="video/mp4"
            className="video"
            src={apaaja}
            width="81%"
            style={radiusVideo}
          />
        </Grid>
      </Box>

      <Grid container spacing={2} pb={10} sx={flexGrid}>
        {/* Products 1 */}
        <Grid item md={3.3} sm={12} xs={12} sx={flexGrid}>
          <Card sx={cardStyle} style={borderRadiusImages}>
            <img src={pd1} style={{ width: '100%', maxHeight: 200 }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={typoCardStyle}>
                TITLE PRODUCTS
              </Typography>
              <Typography variant="body2" color="#FFFFFF" sx={{ textTransform: 'lowercase' }}>
                LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET
              </Typography>
            </CardContent>
            <CardActions sx={flexCard}>
              <Button variant="contained" onClick={handleClickOpen1} sx={buttonHover} style={borderRadiusImages}>
                <ArrowRightAltIcon />
              </Button>
              <Dialog fullScreen={fullScreen} open={open1} onClose={handleClose1}>
                <DialogTitle sx={typoCardStyle}>TITLE PRODUCTS 1 </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </CardActions>
          </Card>
        </Grid>

        {/* Products 2 */}
        <Grid item md={3.3} sm={12} xs={12} sx={flexGrid}>
          <Card sx={cardStyle} style={borderRadiusImages}>
            <img src={pd2} style={{ width: '100%', maxHeight: 200 }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={typoCardStyle}>
                TITLE PRODUCTS
              </Typography>
              <Typography variant="body2" color="#FFFFFF" sx={{ textTransform: 'lowercase' }}>
                LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET
              </Typography>
            </CardContent>
            <CardActions sx={flexCard}>
              <Button variant="contained" onClick={handleClickOpen2} sx={buttonHover} style={borderRadiusImages}>
                <ArrowRightAltIcon />
              </Button>
              <Dialog fullScreen={fullScreen} open={open2} onClose={handleClose2}>
                <DialogTitle sx={typoCardStyle}>TITLE PRODUCTS 2 </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </CardActions>
          </Card>
        </Grid>

        {/* Products 3 */}
        <Grid item md={3.3} sm={12} xs={12} sx={flexGrid}>
          <Card sx={cardStyle} style={borderRadiusImages}>
            <img src={pd3} style={{ width: '100%', maxHeight: 200 }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={typoCardStyle}>
                TITLE PRODUCTS
              </Typography>
              <Typography variant="body2" color="#FFFFFF" sx={{ textTransform: 'lowercase' }}>
                LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET
              </Typography>
            </CardContent>
            <CardActions sx={flexCard}>
              <Button variant="contained" onClick={handleClickOpen3} sx={buttonHover} style={borderRadiusImages}>
                <ArrowRightAltIcon />
              </Button>
              <Dialog fullScreen={fullScreen} open={open3} onClose={handleClose3}>
                <DialogTitle sx={typoCardStyle}>TITLE PRODUCTS 3 </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
