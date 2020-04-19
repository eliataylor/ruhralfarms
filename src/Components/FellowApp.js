import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InitiativeSelector from './InitiativeSelector';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

export default function FellowApp(props) {
  const classes = useStyles();
  const [budget, setBudget] = React.useState(500);
  const [months, setMonths] = React.useState(1);
  const [idea, setIdea] = React.useState('');
  const [initiatives, setInitiatives] = React.useState({});
  const [startDate, setStartDate] = React.useState('Q4-2020');

  const ratio = budget / months;

  const handleBudgetChange = (event, newValue) => {
    setBudget(newValue);
  };

  const handleMonthChange = (event, newValue) => {
    setMonths(newValue);
  };

  const handleIdeaChange = (event) => {
    setIdea(event.target.value);
  };

  const initiativeChange = (items) => {
    setInitiatives(items);
  };

  const handleStartChange = (event) => {
    setStartDate(event.target.value);
  };

  function valueLabelFormat(value) {
    return (<span><sup>$</sup>{value}</span>);
  }

  const handleSubmit = () => {

  }

  return (
      <div className="container-fluid p-0">
        <div className={classes.appBar}>
          <Link to="/"><img src='/icon.png' className="float-right" alt="logo" height='40' /></Link>
        </div>
        <div className="container">
        <h1 className={classes.h1}>Red Dirt <span style={{fontSize:'50%', display:'block'}}>Work Studies &amp; Fellowships</span></h1>
        <div className='intakeForm'>
          <div className="row">
            <div className="col-md-6">
              <img src="/images/kh-reddirt.jpg" className='img-fluid' alt='our garden'/>
            </div>
            <div className="col-md-6">
              <h2 className={classes.subheader}>Our Mission</h2>
              <p style={{fontStyle:'italic'}}><strong>Our mission</strong> is to enrich our community, through sharing hands, minds, hearts and resources.</p>

              <h2 className={classes.subheader}>Your Benefits</h2>
              <p>Fellows live at <a href="https://kapunahale.com" target="_blank" rel="noopener noreferrer"  >Kapuna Hale</a> while Work Studiers may come to use workspaces as needed from sunrise to sundown</p>
              <p>Both of you share access to it's <strong>6 acres</strong> and <strong>tools</strong>, <strong>workspaces</strong>, and <strong>mentors</strong>.</p>
              <p>The following organizations and individuals have offered their time and support to help make your initiative a success. </p>
              <p>Please include in your application how you might want to leverage any of their skills or resources.</p>
              <p>After your tenure you may continue to use and profit from the tools and workspaces created during your iniitiative so long as you remain in good standing with Kapuna Hale</p>
            </div>
          </div>

          <h4 className='text-center mt-5 mb-5'>[mentor names / logos here]</h4>

          <div className="row">
            <div className="col-md-6">
              <h2 className={classes.subheader} style={{textAlign:'left'}}>Minimum Qualifications</h2>
              <p>On your first day...</p>
              <ul>
                  <li>You will be over 18 and under 23 years old</li>
                  <li>You will have attended all four years of High School in Hawaii</li>
                  <li>You will have a High School Diploma with at least a 2.5 culvimative GPA over any two years</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h2 className={classes.subheader} >Mutual Expectations</h2>
              <p>Once we come to an understanding and agreement for your initiative, we will sign a contract for you meeting your own monthly milestones towards completing your initiative.</p>
              <p>Your enrollment and residence, as well as your continued access after, is contingent on meeting these milestones.</p>
              <p>You are free to seek or hold employment and encouraged to stay active outside of your initiative through fitness and fun.</p>
              <p><b>Red Dirt is a way to build a collective farm and collabortive workspace through sweat equity and communal investments</b></p>
            </div>
          </div>

          <form action="/api/fellowapp" method="POST" className={classes.appForm + " container-fluid p-0 mt-5"}>
          <div className="d-flex flex-wrap mb-5">
            <h2>Application</h2>
            <span style={{flexGrow:1}}></span>
            <FormControlLabel
              value="fellowship"
              required={true}
              control={<Checkbox color="primary" />}
              label="Fellowship"
              labelPlacement="end"
            />
            <FormControlLabel
              value="workstudy"
              required={true}
              control={<Checkbox color="primary" />}
              label="Work Study"
              labelPlacement="start"
            />
          </div>


            <div className='row mt-5 mb-5'>
              <div className='col-6'>
              <TextField
                className='col-md-5 mr-md-1 col-12'
                label='Your full name'
                autoComplete='true'
                name='full_name'
                type='email'
              />
              </div>
              <div className='col-6'>
              <TextField
                className='col-md-6 ml-md-1 col-12'
                autoComplete='true'
                name='mail'
                label='Your email'
                type='email'
              />
              </div>
            </div>

          <InitiativeSelector onChange={initiativeChange} tileData={props.tileData} />

           <div className={classes.appSlider}>
            <label className={classes.sliderLabel}>What is the baseline budget to achieve your initiative?</label>
            <Slider
              value={budget}
              valueLabelFormat={valueLabelFormat}
              onChange={handleBudgetChange}
              aria-labelledby='months needed'
              name="field_budget"
              step={500}
              marks
              min={500}
              max={5000}
              valueLabelDisplay='on'
            />
          </div>

          <div className={classes.appSlider}>
            <label className={classes.sliderLabel}>How many months do you need to achieve your initiative?</label>
            <Slider
              value={months}
              onChange={handleMonthChange}
              aria-labelledby='months'
              name="field_months"
              step={1}
              marks
              min={1}
              max={12}
              valueLabelDisplay='on'
            />
          </div>

          { budget > 1300 && ratio > 800 ?
            <small className={classes.warning + ' text-center'}>Your budget / time ratio is high. This is ok, but as our first year offering these grants, we will favor applications investing the majority of funds in tools and machinary that can continued to be used by future fellows and members.</small>
          : ''}

          <TextField
            id='field_body'
            label={<span className={classes.placeholder}>How would you spend {months > 1 ? months + ' months' : months + ' month'} living rent-free with a ${budget} project budget at <a href="https://kapunahale.com" target="_blank" rel="noopener noreferrer" >Kapuna Hale</a> ?</span>}
            helperText={ idea.length > 0 ? (4000 - idea.length) + ' / 4000 characters allowed ' : '200 - 4000 characters.' }
            disabled={Object.keys(initiatives).length > 0}
            type='textarea'
            value={idea}
            onChange={handleIdeaChange}
            multiline
            rows='4'
            fullWidth
            style={{margin:'65px 0 40px 0'}}
          />

          <FormControl fullWidth className="mt-4">
            <InputLabel id="when2start">Select when you'd like to start</InputLabel>
            <Select
              labelId="when2start"
              name="field_period"
              label='Start Timeframe'
              value={startDate}
              onChange={handleStartChange} >
            <option value={'Q3-2020'}>Q3 2020</option>
            <option value={'Q4-2020'}>Q4 2020</option>
            <option value={'Q1-2020'}>Q1 2021</option>
          </Select>
          <FormHelperText>All dates depend on us all clear of Covid-19</FormHelperText>
        </FormControl>

          <div className="row text-right w-100 mt-5 mb-5">
            <Button color='primary' type="submit" onClick={handleSubmit} variant='contained' disabled={(Object.keys(initiatives).length > 0) ? false : true}>
              Submit
            </Button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  h1: {
    fontWeight:800,
    borderBottom:'1px solid #202020',
    marginBottom:40
  },
  appBar : {
    backgroundColor:'#202020',
    height:45,
    padding:'2px 4px',
    marginBottom:20
  },
  appForm : {
    color:'#202020',
    fontWeight:600,
    borderTop:'1px solid #202020'
  },
  appSlider : {
    textAlign:'right',
    margin:'65px 0 0 0'
  },
  sliderLabel : {
    marginBottom:0
  },
  subheader: {
    marginBottom:0,
    fontWeight:800,
    borderBottom:'1px solid #202020'
  },
  placeholder : {
    color:'#202020',
    fontWeight:600
  },
  dtImg : {
    height:70,
    backgroundSize:'cover',
    backgroundPosition:'center center'
  },
  investment : {
    color:'green'
  },
  warning : {
    color:'red'
  }

}));
