import React from 'react';
import { Link } from "react-router-dom";
import Collaborate from './Collaborate';
import ProductGrid from './ProductGrid';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles";


class Home extends React.Component {

  scrollTo(e) {
    e.preventDefault();
    let dest = e.currentTarget.getAttribute('href');
    if (!dest || !document.getElementById(dest.substr(1))) {
        document.getElementsByTagName('body')[0].scrollIntoView({behavior: "smooth", block: "start"});
    } else {
        document.getElementById(dest.substr(1)).scrollIntoView({behavior: "smooth", block: "start"});
    }
    return false;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
          <section id='home'>
            <header className="text-center" style={{margin:'40px auto'}}>
              <img onClick={this.scrollTo} href='#aboutus' src='/logo.png' className="text-center" alt="logo" width='200' />
            </header>
            <div className='d-flex w-100 justify-content-around flex-wrap'>
              <div className="col-6 col-md-3 p-1"><a href="#applications" onClick={this.scrollTo} className='sqCta' style={{ backgroundImage:'url(/images/radialarm.jpg)'}}>APPLICATIONS</a></div>
              <div className="col-6 col-md-3 p-1"><a href="#products" onClick={this.scrollTo} className='sqCta' style={{ backgroundImage:'url(http://sammietaylor.com/assets/archives/branding/j__Creative-direction-for-branding.jpg)'}}>PRODUCTS</a></div>
              <div className="col-6 col-md-3 p-1"><a href="#workspaces" onClick={this.scrollTo} className='sqCta' style={{backgroundImage:'url(/images/kh-reddirt.jpg)'}}>WORKSPACES</a></div>
              <div className="col-6 col-md-3 p-1"><a href="#initiatives" onClick={this.scrollTo} className='sqCta' style={{backgroundImage:'url(/images/ruhralfarmszamana.png)'}}>INITIATIVES</a></div>
            </div>

            <div className="text-center" style={{margin:'40px auto'}}>
              <Collaborate component='button' />
            </div>
          </section>

          <section className='page' id="applications">
              <div onClick={this.scrollTo} href='#home' className='backToTop mb-1'>back to top</div>
              <h1>APPLICATION DEVELOPMENT</h1>

              <Grid container spacing={1} alignItems='center' style={{marginBottom:40}} >
                  <Grid item sm={12} >
                      <p className={classes.lineEmoji}>We follow the
                          <a href='https://en.wikipedia.org/wiki/Systems_development_life_cycle' target='_blank' rel="noopener noreferrer" >
                          <img alt='sdlc' src="/images/sdlc-a.png" style={{height:20}} />
                          </a>
                          <strong>Software Development Life Cycle</strong> at the pace of the <strong>24 Hour News Cycle</strong>
                          <a href='https://en.wikipedia.org/wiki/24-hour_news_cycle' target='_blank' rel="noopener noreferrer" >
                          <img alt='24 hours news' src="/images/24hournews.png" style={{height:20}} />
                          </a>
                          by balancing traditional and adaptive strategies in product development &amp; marketing.</p>
                  </Grid>
              </Grid>

              <Grid container spacing={1} style={{marginBottom:40}}>

                  <Grid item sm={4} >
                      <p>We welcome side-by-side work sprints at our workspace in <strong>Oakland, California</strong> or the Garden Island of <strong>Kauai</strong>.</p>
                  </Grid>
                  <Grid item sm={8} >
                      <a rel="noopener noreferrer" href="http://sammietaylor.com/design" target="_blank">
                          <img src="//sammietaylor.com/assets/archives/UI-UX/j__UX-mike.png" className='img-fluid w-100' alt='technology'/>
                          <small className='reviewTag'>Review project</small>
                      </a>
                  </Grid>
              </Grid>

              <Grid container spacing={1} style={{marginBottom:40}} >
                  <Grid item sm={8}>
                      <a rel="noopener noreferrer" href="http://taylormadetraffic.com/projects?pid=47" target="_blank">
                          <img src="/images/radialarm_short.jpg" className='img-fluid w-100' alt='technology'/>
                          <small className='reviewTag'>Review project</small>
                      </a>
                  </Grid>

                  <Grid item sm={4} container direction='column' justify='space-between' style={{height:'100%'}}>

                      <p>We love a good excuse to travel for anything from ideation to implementation.</p>
                      <p>We connect <strong>worldwide</strong> with distributed teams through all channels and tools including <em>Slack</em>, <em>Hangouts</em>, <em>Jira</em>, <em>Invision</em>, <em>Figma</em>, <em>Spreadsheets</em>, <em>Github</em> and more</p>
                  </Grid>


              </Grid>

              <Grid container spacing={1} alignItems='flex-start'>
                  <Grid item xs={6} sm={3} >
                      <a rel="noopener noreferrer" href="http://sammietaylor.com/case-studies/farm-fresh"
                         target="_blank">
                          <img src="/images/farmfreshphones.png" className='img-fluid w-100' alt='technology'/>
                          <small className='reviewTag'>Review project</small>
                      </a>
                  </Grid>
                  <Grid item xs={6}>
                      <p>Wherever in the world we work, we <strong>guarantee 100% of our deliverables on time and within budget</strong>.</p>
                      <p>Whatever your needs, click {<Collaborate />} and let us know how we can help your team or vision.</p>
                  </Grid>
                  <Grid item xs={6} sm={3} >
                      <a rel="noopener noreferrer" href="http://taylormadetraffic.com/projects?pid=46" target="_blank">
                          <img src="/images/flc_collage.png" className='img-fluid w-100' alt='autonomous'/>
                          <small className='reviewTag'>Review project</small>
                      </a>
                  </Grid>
              </Grid>

          </section>

          <Grid container direction={'column'} className='container' id="products">
              <div onClick={this.scrollTo} href='#home' className='backToTop mb-1'>back to top</div>
              <h1>PRODUCT DEVELOPMENT</h1>
              <ProductGrid />
          </Grid>

          <Grid container direction={'column'} className='container' id="workspaces">
                      <div onClick={this.scrollTo} href='#home' className='backToTop'>back to top</div>
                      <h1>OUR WORKSPACES</h1>
                      <p>We welcome hosting side-by-side work sprints at our workspaces, and we love a good excuse to travel.</p>
                      <Grid container spacing={1} style={{marginTop:40}}>
                          <Grid item xs={12} sm={4}>
                              <h4 style={{margin:0}}>Oakland, California</h4>
                              Is our homebase for developing the software and network necessary to
                              connect and exchange solutions around the whole world.
                          </Grid>
                          <Grid item xs={12} sm={8} >
                              <img src="/images/oakland-office.jpg" className='img-fluid w-100' alt='oakland office'/>
                          </Grid>
                      </Grid>
                      <Grid container spacing={1} wrap='wrap-reverse' style={{marginTop:20}}>
                          <Grid item xs={12} sm={8} >
                              <img src="/images/kh-office.jpg" className='img-fluid w-100' alt='kapuna hale garage'/>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                              <h4 style={{margin:0}}>Kilauea, Kauai</h4>
                              <a target="_blank" rel="noopener noreferrer" href="https://kapunahale.com">Kapuna
                                  Hale</a> is our creative workspace to grow solutions from soil and sweat equity.
                          </Grid>
                      </Grid>

                      <Grid container spacing={1} direction='column'>
                          <Grid item style={{textAlign: 'center', margin: '40px auto 35px auto'}}><em>Ruhral Farms LLC</em> was
                              founded in 2018 by <a target="_blank" rel="noopener noreferrer"
                                                    href="https://taylormadetraffic.com">Eli A. Taylor</a> and <a
                                  target="_blank" rel="noopener noreferrer" href="https://sammietaylor.com">Sammie A.
                                  Khalil</a>.</Grid>
                          <Grid item>Our <strong>mission</strong> is to grow with our community by creating sustainable
                              solutions for each other and our environment. </Grid>
                          <Grid item className={classes.lineEmoji}>To fulfill this mission we seek out partnerships over clients, and prioritize
                              projects that grow our <a href='https://en.wikipedia.org/wiki/Sharing_economy' rel="noopener noreferrer"  target='_blank'><img src='/images/sharing-economy.png' alt='sharing economy' /></a> <em>sharing economy</em>.
                          </Grid>
                          <Grid item>We believe pooling capital, equity,
                              skills and resources will always deliver the best outcome for everyone.</Grid>
                          <Grid item>If you have a project that could benefit from what we offer, let's <Collaborate cta='join forces'/>.</Grid>
                      </Grid>

                      <Grid container spacing={1} style={{marginTop:40}}>
                          <Grid item xs={6}>
                              <img src='/images/sammie-smiles.jpg' className='img-fluid' alt='sammie'/>
                          </Grid>
                          <Grid item xs={6} >
                              Sammie has lead brands and teams throughout the fashion and beauty industries in business development, digital marketing, graphic and
                              UI design. Review more of her work at <a
                              target="_blank" rel="noopener noreferrer" href="https://sammietaylor.com">SammieTaylor.com</a>
                          </Grid>
                      </Grid>

                      <Grid container spacing={1} style={{marginTop: 30}}>
                          <Grid item xs={6} >
                              Eli is a full stack software developer with over 15 years of experience across a wide variety of
                              technologies and industries. Review more of his work at <a target="_blank" rel="noopener noreferrer"  href="https://taylormadetraffic.com">TaylorMadeTraffic.com</a>
                          </Grid>
                          <Grid item xs={6}>
                              <img src='/images/eli-n-charlie.jpg' className='img-fluid' alt='eli'/>
                          </Grid>
                      </Grid>
          </Grid>


          <Grid container direction={'column'} className='container' id="initiatives">
  <div onClick={this.scrollTo} href='#home' className='backToTop'>back to top</div>
  <h1>INITIATIVES</h1>
  <Grid container spacing={1} style={{margin:'50px 0 75px 0'}}>
      <Grid item xs={12} sm={6}>
          <Link to="/red-dirt-coworkers" style={{textDecoration: 'none'}}>
              <div id='applyNow' style={{backgroundImage: 'url(/images/kh-reddirt.jpg)'}}>
                  <div>Apply Now</div>
              </div>
          </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
          <h2>Red Dirt Coworkers</h2>
          <p>Red Dirt is our way of building a collective farm and collabortive workspace through sweat equity and communal investments.</p>
          <p>If you recently graduated 4 years of high school on Hawaii with a 2.5 GPA or above, <Link to="/red-dirt-coworkers" >apply now</Link>.</p>
      </Grid>
  </Grid>
  <Grid container wrap='wrap-reverse' spacing={1}>
      <Grid item xs={12} sm={6}>
          <h2>ZAMANA: GIRLKI</h2>
          <p><strong>PROBLEM:</strong> Female youth in Pakistan do not have access to children's
              books in Urdu that are unrelated to religion. We focus on young girls in Pakistan as
              32% of girls in Pakistan are out of school, compared with 21% of boys. </p>
          <p><strong>SOLUTION:</strong> Provide young girls with books in Urdu featuring strong
              diverse female leads where lessons go beyond tradition.</p>
          <small className='tags'>#education #girlpower</small>
      </Grid>
      <Grid item xs={12} sm={6}>
          <img src="/images/zamanalogo.png" alt='zamana girlki logo' className="img-fluid"/>
      </Grid>
  </Grid>
          </Grid>
      </div>
    );
  }
}


const styles = theme => ({
    lineEmoji : {
        '& img' : {
            height:20,
            marginLeft:4,
            marginRight:4,
        }
    }
});



export default withStyles(styles)(Home);

