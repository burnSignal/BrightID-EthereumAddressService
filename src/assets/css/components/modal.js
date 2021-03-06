import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    color: 'black !important',
    padding: theme.spacing(2),
    '& a': {
      color: '#e78a64 !important',
      cursor: 'pointer',
      '&:hover': {
        color: '#00e79a !important'
      }
    },
    '& .MuiDialog-paper': {
      width: '35em',
      margin: 0
    },
  },
  title: {
    margin: 0,
  },
  closeButton: {
    outline: 'none !important',
    border: 'none !important',
    right: theme.spacing(1),
    top: theme.spacing(1),
    position: 'absolute',
    color: '#cacaca',
    '&:hover': {
      color: '#e78a64'
    }
  },
  content: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    '& p': {
      color: 'black'
    }
  },
  native: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    '& p': {
      color: 'black'
    }
  }
}));

export default useStyles;
