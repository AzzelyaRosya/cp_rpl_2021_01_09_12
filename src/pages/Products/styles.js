import { styled, makeStyles } from '@mui/styles';
import Colors from '../../theme/Color';

export default makeStyles((theme) => ({
  root: {
    flex: 1,
    marginTop: 60,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export const borderRadiusImages = {
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
  overflow: 'hidden',
};

export const cardStyle = {
  maxWidth: 320,
  bgcolor: '#9AAFDF',
};

export const typoCardStyle = {
  color: Colors.darkBlue,
  fontWeight: 600,
  textAlign: 'center',
};

export const flexCard = {
  display: 'flex',
  justifyContent: 'right',
};

export const flexGrid = {
  display: 'flex',
  justifyContent: 'center',
};

export const buttonHover = {
  bgcolor: '#6D8CD0',
  '&:hover': {
    backgroundColor: Colors.darkBlue,
    borderRadius: 8,
    color: Colors.white,
  },
};

export const radiusVideo = {
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  borderTopRightRadius: 5,
  borderTopLeftRadius: 5,
  overflow: 'hidden',
};
