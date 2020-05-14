import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import OverlayLoader from "./OverlayLoader";
import API from '../API';

class Collaborate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open:false, loading:false, name:'', mail:'', field_mvp_budget:'', field_ideal_budget:'', field_idea:'', field_description:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // console.log('setting ' + e.currentTarget.name + ' with ' + e.currentTarget.value);
    this.setState({[e.currentTarget.name]:e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading:true});

    const obj = {
        "mail": this.state.mail,
        "name": this.state.name,
        "field_mvp_budget": this.state.field_mvp_budget,
        "field_ideal_budget": this.state.field_ideal_budget,
        "field_idea": this.state.field_idea,
        "field_description": this.state.field_description
    };

    const that = this;
    API.Post('/inquiry/new?_format=json', obj)
      .then(function (response) {
        console.log(response);
        that.setState({loading:false, open:false});
      })
      .catch(function (error) {
        console.log(error);
        that.setState({loading:false, open:false});
      });

     return false;
  }

  render() {
    const cta = this.props.cta ? this.props.cta : 'Collaborate';

    if (this.state.open === false) {
      if (this.props.component === 'button')
        return (<button className="bigBtn" onClick={e=>this.setState({open:true})}>{cta}</button>);
      else return (<strong style={{cursor:'pointer'}} onClick={e=>this.setState({open:true})}>{cta}</strong>);
    }

    return (
      <Dialog open={this.state.open} onClose={e=>this.setState({open:false})} aria-labelledby="form-dialog-title">

        {(this.state.loading === true) ? <OverlayLoader /> : '' }

        <form name="collaborate" method="POST">
          <DialogTitle id="form-dialog-title">Collaborate With Us</DialogTitle>
          <DialogContent className='intakeForm'>
            <div className="row">
              <div className="col-6">
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    autoComplete='true'
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
              </div>
              <div className="col-6">
                <TextField
                    fullWidth
                    label='Email'
                    name="mail"
                    autoComplete='true'
                    type="mail"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
              </div>
            </div>

            <TextField
                label="What do you have in mind?"
                name="field_idea"
                type="textarea"
                multiline
                rows="3"
                className="mt-5"
                fullWidth
                helperText="Tell us a bit about your idea"
                value={this.state.idea}
                onChange={this.handleChange}
            />


            <div className="row">
              <div className="col-6">
                <TextField
                    name="field_mvp_budget"
                    fullWidth
                    label="MVP Budget"
                    helperText="Baseline budget to build your minimum viable product"
                    type="number"
                    className="mt-5"
                    value={this.state.field_mvp_budget}
                    onChange={this.handleChange}
                    InputProps={{endAdornment:<InputAdornment position="end">$</InputAdornment>}}
                />
              </div>
              <div className="col-6">
                <TextField
                    fullWidth
                    label="Ideal Budget"
                    name="field_ideal_budget"
                    helperText="Ideal budget to build your full vision"
                    type="number"
                    className="mt-5"
                    value={this.state.field_ideal_budget}
                    onChange={this.handleChange}
                    InputProps={{endAdornment:<InputAdornment position="end">$</InputAdornment>}}
                />
              </div>
            </div>
            <TextField
                label={<span>How can <em>we</em> help?</span>}
                type="textarea"
                multiline
                name="field_description"
                rows="3"
                className="mt-5"
                fullWidth
                helperText='In what areas of your project are you looking to collaborate'
                value={this.state.field_description}
                onChange={this.handleChange}
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={e=>this.setState({open:false})} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={this.handleSubmit} color="primary" variant="contained" disabled={this.state.mail.length === 0 || this.state.field_idea.length === 0}>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }

}

export default Collaborate;