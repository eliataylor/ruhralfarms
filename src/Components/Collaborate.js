import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (open === false) {
    return (<button className="bigBtn" onClick={handleClickOpen}>Collaborate</button>);
  }

  return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Collaborate With Us</DialogTitle>
        <DialogContent className='intakeForm'>
          <DialogContentText></DialogContentText>

          <TextField
            autoFocus
            id="idea"
            label="What do you have in mind?"
            type="textarea"
            multiline
            rows="3"
            fullWidth
          />

          <TextField
            id="idea"
            fullWidth
            label="MVP Budget"
            helperText="Baseline budget to build your minimum viable product"
            type="number"
            InputProps={{endAdornment:<InputAdornment position="end">$</InputAdornment>}}
          />
          <TextField
            id="idea"
            fullWidth
            label="Ideal Budget"
            helperText="Ideal budget to build your full vision"
            type="number"
            InputProps={{endAdornment:<InputAdornment position="end">$</InputAdornment>}}
          />

          <TextField
            id="idea"
            label={<span>How do you imagine we can help you?</span>}
            type="textarea"
            multiline
            rows="3"
            fullWidth
          />

          <TextField
            fullWidth
            label="Your name"
            autoComplete='true'
            id="name"

            type="email"
          />
          <TextField
            fullWidth
            autoComplete='true'
            id="email"
            label='Your email'
            type="email"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
  );
}
