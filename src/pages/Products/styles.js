import { styled, makeStyles } from '@mui/styles';

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
  color: '#36476B',
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

export const radiusVideo = {
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  borderTopRightRadius: 5,
  borderTopLeftRadius: 5,
  overflow: 'hidden',
};
