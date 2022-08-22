import React from 'react';
import {
  Box,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  Button,
  MenuItem,
  Tooltip,
  Container,
  Paper,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import ReactPlayer from 'react-player';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// img
import bannerproduct from '../../assets/img/bannerproduct.png';
import pd1 from '../../assets/img/pd1.jpg';
import pd2 from '../../assets/img/pd2.jpg';
import pd3 from '../../assets/img/pd3.jpg';

// icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// style
import { qr, qrImg } from './styles';

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
      <img src={bannerproduct} style={{ width: '100%', height: 400 }} />

      <Box sx={{ align: 'center' }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Grid>
          <Typography sx={{ color: '#36476B', fontWeight: 700, fontSize: 30, textAlign: 'center', mb: 3, mt: 3 }}>BEST PRODUCTS FOR YOU!</Typography>
        </Grid>

        <Grid sx={{ display: 'flex', justifyContent: 'center', pb: 5 }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=laW8rtUEMyc"
            width="81%"
            style={{
              //border radius img
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              overflow: 'hidden',
            }}
          />
        </Grid>
      </Box>

      <Grid container spacing={2} sx={{ pb: 10, display: 'flex', justifyContent: 'center' }}>
        {/* Products 1 */}
        <Grid item xs={3.3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{ maxWidth: 320, bgcolor: '#9AAFDF' }}
            style={{
              //border radius img
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
              overflow: 'hidden',
            }}
          >
            <img src={pd1} style={{ width: '100%', maxHeight: 200 }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#36476B', fontWeight: 600, textAlign: 'center' }}>
                TITLE PRODUCTS
              </Typography>
              <Typography variant="body2" color="#FFFFFF" sx={{ textTransform: 'lowercase' }}>
                LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'right' }}>
              <Button
                variant="contained"
                onClick={handleClickOpen1}
                sx={{ bgcolor: '#6D8CD0' }}
                style={{
                  //border radius img
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopRightRadius: 8,
                  borderTopLeftRadius: 8,
                  overflow: 'hidden',
                }}
              >
                <ArrowRightAltIcon />
              </Button>
              <Dialog fullScreen={fullScreen} open={open1} onClose={handleClose1}>
                <DialogTitle sx={{ color: '#36476B', fontWeight: 600, textAlign: 'center' }}>TITLE PRODUCTS 1 </DialogTitle>
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
        <Grid item xs={3.3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{ maxWidth: 320, bgcolor: '#9AAFDF' }}
            style={{
              //border radius img
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
              overflow: 'hidden',
            }}
          >
            <img src={pd2} style={{ width: '100%', maxHeight: 200 }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#36476B', fontWeight: 600, textAlign: 'center' }}>
                TITLE PRODUCTS
              </Typography>
              <Typography variant="body2" color="#FFFFFF" sx={{ textTransform: 'lowercase' }}>
                LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'right' }}>
              <Button
                variant="contained"
                onClick={handleClickOpen2}
                sx={{ bgcolor: '#6D8CD0' }}
                style={{
                  //border radius img
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopRightRadius: 8,
                  borderTopLeftRadius: 8,
                  overflow: 'hidden',
                }}
              >
                <ArrowRightAltIcon />
              </Button>
              <Dialog fullScreen={fullScreen} open={open2} onClose={handleClose2}>
                <DialogTitle sx={{ color: '#36476B', fontWeight: 600, textAlign: 'center' }}>TITLE PRODUCTS 2 </DialogTitle>
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
        <Grid item xs={3.3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{ maxWidth: 320, bgcolor: '#9AAFDF' }}
            style={{
              //border radius img
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
              overflow: 'hidden',
            }}
          >
            <img src={pd3} style={{ width: '100%', maxHeight: 200 }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#36476B', fontWeight: 600, textAlign: 'center' }}>
                TITLE PRODUCTS
              </Typography>
              <Typography variant="body2" color="#FFFFFF" sx={{ textTransform: 'lowercase' }}>
                LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'right' }}>
              <Button
                variant="contained"
                onClick={handleClickOpen3}
                sx={{ bgcolor: '#6D8CD0' }}
                style={{
                  //border radius img
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopRightRadius: 8,
                  borderTopLeftRadius: 8,
                  overflow: 'hidden',
                }}
              >
                <ArrowRightAltIcon />
              </Button>
              <Dialog fullScreen={fullScreen} open={open3} onClose={handleClose3}>
                <DialogTitle sx={{ color: '#36476B', fontWeight: 600, textAlign: 'center' }}>TITLE PRODUCTS 3 </DialogTitle>
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
