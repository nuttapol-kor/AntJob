import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Button,
  Grid,
} from '@mui/material';
import { NotListedLocation } from '@mui/icons-material';
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5),
  },
  dialogTitle: {
    textAlign: 'center',
  },
  dialogContent: {
    textAlign: 'center',
  },
  DialogActions: {
    justifyContent: 'center',
    marginTop: theme.spacing(3),
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      cursor: 'default',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '8rem',
    },
  },
  headerContent: {
    fontWeight: 600,
  },
  button: {
    fontWeight: 600,
    border: '2px solid',
    '&:hover': {
      border: '2px solid',
    },
  },
}));

export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  const classes = useStyles();

  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogContent className={classes.dialogContent}>
        <Typography variant='h6' className={classes.headerContent}>
          {confirmDialog.title}
        </Typography>
        <Typography variant='subtitle2'>{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.DialogActions}>
        <Grid container justify='center' spacing={4}>
          <Grid item>
            <Button
              color='primary'
              variant='outlined'
              className={classes.button}
              onClick={() =>
                setConfirmDialog({ ...confirmDialog, isOpen: false })
              }
            >
              No
            </Button>
          </Grid>
          <Grid item>
            <Button
              color='primary'
              variant='outlined'
              className={classes.button}
              onClick={confirmDialog.onConfirm}
            >
              Yes
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
