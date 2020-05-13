import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InitiativeSelector from './InitiativeSelector';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Mentors from "./Mentors";
import OverlayLoader from "./OverlayLoader";
const axios = require('axios').default;
axios.defaults.headers.common['crossDomain'] = true;
axios.defaults.headers.common['async'] = true;
axios.defaults.headers.common['timeout'] = process.env.NODE_ENV === 'production' ? 30 : 0; // for debugging with php breakpoints
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


export default function FellowApp(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const classes = useStyles();
  const [budget, setBudget] = React.useState(500);
  const [months, setMonths] = React.useState(1);
  const [idea, setIdea] = React.useState('');
  const [initiatives, setInitiatives] = React.useState({});
  const [startDate, setStartDate] = React.useState('');
  const [fullname, setName] = React.useState('');
  const [mail, setEmail] = React.useState('');
  const [housing, setHousingType] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const obj = {
      "mail": mail,
      "name": fullname,
      "field_type": this.state.housing,
      "field_initiatives": initiatives,
      "field_budget": budget,
      "field_duration": months,
      "field_description": idea
    };

    axios.post('https://portal.ruhralfarms.com/application/new?_format=json', obj)
        .then(function (response) {
          console.log(response);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
        });

    return false;
  }

  return (
      <Grid container direction='column'>
        {isLoading === true ? <OverlayLoader/> : ''}
        <div className={classes.appBar}>
          <Link to="/"><img src='/icon.png' className="float-right" alt="logo" height='40'/></Link>
        </div>
        <Grid container className='container' style={{maxWidth:800}}>
          <h1 className={classes.h1}>Red Dirt <span style={{fontSize: '50%', display: 'block'}}>Coworkers</span></h1>
          <p><b>Red Dirt is our way of building a collective farm and collaborative workspace through sweat equity and communal investments.</b></p>

          <Grid container className='intakeForm'>
            <Grid container justify='space-between' spacing={2}>
              <Grid item xs={12} md={6}>
                <img src="/images/kh-reddirt.jpg" className='img-fluid' alt='our garden'/>
              </Grid>
              <Grid item xs={12} md={6}>
                <h2 className={classes.subheader}>Our Mission</h2>
                <p style={{fontStyle: 'italic'}}><strong>Our mission</strong> is to enrich our community, through
                  sharing hands, minds, hearts and resources.</p>
                <p>We pledge $5,000 for 2020 and $10,000 for 2021 to invest in projects with shared benefits for you and our home. Want a mobile fruit stand for farmers markets? A pottery wheel and kiln? A 26" portal sawmill? So do we!</p>
                <p>Propose your project. If we can fund it, we will; and share all tools and produce in turn.</p>
                <h2 className={classes.subheader}>Your Benefits</h2>
                <p>You may apply to live at <a href="https://kapunahale.com" target="_blank" rel="noopener noreferrer">Kapuna
                  Hale</a> or just come to use workspaces as needed from sunrise to sundown.</p>
                <p>Either way you gain access to it's <strong>6
                  acres</strong>, <strong>tools</strong>, <strong>workspaces</strong>, and <strong>mentors</strong> and your awarded budget.
                </p>
                <p>After your tenure you may continue to <strong>use and profit</strong> from the tools and workspaces created during your initiative.</p>
                <p>The following organizations have offered their time and support to help make your initiative a success. Click the logos to read more about their mentors</p>
              </Grid>
            </Grid>

            <Grid container style={{margin:'30px 0 40px 0'}}>
              <Mentors />
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <h2 className={classes.subheader} style={{textAlign: 'left'}}>Minimum Qualifications</h2>
                <p>On your first day...</p>
                <ul>
                  <li>You will be over 18 and under 22 years old</li>
                  <li>You will have attended all four years of High School in Hawaii</li>
                  <li>You will have a High School Diploma with at least a 2.5 cumulative GPA over any two years</li>
                </ul>
              </Grid>
              <Grid item xs={12} md={6}>
                <h2 className={classes.subheader}>Mutual Expectations</h2>
                <p>Once we come to an understanding and agreement for your initiative, we will sign a contract for you
                  meeting your own monthly milestones towards completing your initiative.</p>
                <p>Your enrollment and residence, as well as your continued access after, is contingent on meeting these
                  milestones.</p>
                <p>You are free to seek or hold employment and encouraged to stay active outside of your initiative
                  through fitness and fun.</p>
              </Grid>
            </Grid>

            <form action="https://portal.ruhralfarms.com/application/new" method="POST" className={classes.appForm + " container-fluid p-0 mt-5"} >
                <Grid container alignContent='flex-start'>
                  <Grid item xs={7} md={8}><h2>Application</h2></Grid>
                  <Grid item xs={5} md={4}>
                    <FormControl fullWidth style={{marginTop:0}}>
                      <InputLabel id="housing">Housing Preference</InputLabel>
                      <Select
                          fullWidth
                          id="housing"
                          name="field_type"
                          value={housing}
                          onChange={e => setHousingType(e.currentTarget.value)} >
                        <option value=''>No Preference</option>
                        <option value='fellow'>Live at Kapuna Hale while co-working</option>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container justify='space-between' spacing={1} alignItems='center' style={{marginBottom:40}}>
                  <Grid item xs={4}>
                    <TextField
                        label='Your full name'
                        autoComplete='true'
                        name='name'
                        onChange={e => setName(e.currentTarget.value)}
                        type='email'
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                        autoComplete='true'
                        name='mail'
                        label='Your email'
                        onChange={e => setEmail(e.currentTarget.value)}
                        type='email'
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormControl fullWidth className="mt-4">
                      <InputLabel id="when2start">Select when you'd like to start</InputLabel>
                      <Select
                          id="when2start"
                          name="field_period"
                          label='Start Timeframe'
                          value={startDate}
                          fullWidth
                          onChange={handleStartChange}>
                        <option value={'2020-10'}>Oct 2020</option>
                        <option value={'2020-11'}>Nov 2020</option>
                        <option value={'2020-12'}>Dec 2020</option>
                        <option value={'2021-12'}>Jan 2021</option>
                      </Select>
                      <FormHelperText>All dates depend on us all clear of Covid-19</FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>

                <InitiativeSelector onChange={initiativeChange} tileData={props.tileData}/>

                <Grid item className={classes.appSlider}>
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
                </Grid>

                <Grid item className={classes.appSlider}>
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
                </Grid>

                <TextField
                    id='field_body'
                    label={<span  className={(Object.keys(initiatives).length > 0) ? classes.placeholder : classes.disabled}>How would you spend this {months > 1 ? months + ' months' : months + ' month'} and ${budget}?</span>}
                    helperText={idea.length > 0 ? (4000 - idea.length) + ' / 4000 characters allowed ' : '200 - 4000 characters.'}
                    disabled={(Object.keys(initiatives).length > 0) ? false : true}
                    type='textarea'
                    value={idea}
                    onChange={handleIdeaChange}
                    multiline
                    rows='4'
                    fullWidth
                    style={{margin: '65px 0 40px 0'}}
                />

                <Grid item>
                  <Button color='primary' type="submit" onClick={handleSubmit} variant='contained'
                          disabled={(Object.keys(initiatives).length > 0) ? false : true}>
                    Submit
                  </Button>
                </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
  );
}


const useStyles = makeStyles((theme) => ({
  h1: {
    fontWeight:800,
    borderBottom:'1px solid #202020',
    marginBottom:40,
    width:'100%'
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
    fontSize:30,
    marginBottom:0,
    fontWeight:800,
    borderBottom:'1px solid #202020'
  },
  placeholder : {
    color:'#202020',
    fontWeight:500
  },
  disabled : {
    color:'rgba(0, 0, 0, 0.38)',
    fontWeight:500
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
