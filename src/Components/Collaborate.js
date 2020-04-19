import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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

  const handleSubmit = () => {

  }

  if (open === false) {
    return (<button className="bigBtn" onClick={handleClickOpen}>Collaborate</button>);
  }

  return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form action="/api/contactus" method="POST">
        <DialogTitle id="form-dialog-title">Collaborate With Us</DialogTitle>
        <DialogContent className='intakeForm'>
          <TextField
            fullWidth
            autoFocus
            label="Your name"
            name="full_name"
            autoComplete='true'
            type="text"
          />
          <TextField
            fullWidth
            autoComplete='true'
            name="mail"
            className="mt-2"
            label='Your email'
            type="email"
          />

          <TextField
            label="What do you have in mind?"
            name="field_body"
            type="textarea"
            multiline
            rows="3"
            className="mt-5"
            fullWidth
            helperText="Tell us a bit about your idea"
          />


          <div className="row">
            <div className="col-6">
            <TextField
              name="fiel_budget_min"
              fullWidth
              label="MVP Budget"
              helperText="Baseline budget to build your minimum viable product"
              type="number"
              className="mt-5"
              InputProps={{endAdornment:<InputAdornment position="end">$</InputAdornment>}}
            />
            </div>
            <div className="col-6">
            <TextField
              fullWidth
              label="Ideal Budget"
              name="field_budget_max"
              helperText="Ideal budget to build your full vision"
              type="number"
              className="mt-5"
              InputProps={{endAdornment:<InputAdornment position="end">$</InputAdornment>}}
            />
            </div>
          </div>
          <TextField
            label={<span>In what areas of your project are you looking to collaborate?</span>}
            type="textarea"
            multiline
            name="field_needs"
            rows="3"
            className="mt-5"
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
        </form>
      </Dialog>
  );
}
