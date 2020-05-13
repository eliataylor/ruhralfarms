import React from 'react';
import { Link } from "react-router-dom";
import Collaborate from './Collaborate';
import CaseStudies from './CaseStudies';
import Grid from '@material-ui/core/Grid';


export default class Home extends React.Component {

  scrollTo(e) {
    e.preventDefault();
    var id = e.currentTarget.getAttribute('href').substr(1);
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start"});
    return false;
  }

  render() {

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
              <h1 style={{marginBottom:40}} className='ideaTitle'>APPLICATION DEVELOPMENT</h1>

              <Grid container spacing={4} alignItems='center' style={{marginBottom:40}} >
                  <Grid item xs={3} >
                      <img alt='24 hours news' src="/images/24hournews.png" className='img-fluid w-100'  align='left '/>
                  </Grid>
                  <Grid item sm={6} >
                      <p>Through understanding both the <strong>24 Hour News</strong> <em>and</em> <strong>Software Development Life</strong> Cycles </p>
                      <p style={{textAlign:'right'}}>We balance traditional and adaptive strategies for product and business development.</p>
                  </Grid>
                  <Grid item xs={3} >
                      <img alt='sdlc' src="/images/sdlc-a.png" className='img-fluid w-100'  align='right'/>
                  </Grid>
              </Grid>

              <Grid container spacing={1} style={{marginBottom:30}}>

                  <Grid item sm={4} style={{textAlign:'center'}}  >
                      <p>We host side-by-side work sprints at our workspace in <strong>Oakland, California</strong> or the Garden Island of <strong>Kauai</strong>.</p>
                  </Grid>
                  <Grid item sm={8} >
                      <a rel="noopener noreferrer" href="http://sammietaylor.com/design" target="_blank">
                          <img src="//sammietaylor.com/assets/archives/UI-UX/j__UX-mike.png" className='img-fluid w-100' alt='technology'/>
                          <small className='reviewTag'>Review project</small>
                      </a>
                  </Grid>
              </Grid>

              <Grid container spacing={1} >
                  <Grid item sm={8}>
                      <a rel="noopener noreferrer" href="http://taylormadetraffic.com/projects?pid=47" target="_blank">
                          <img src="/images/radialarm_short.jpg" className='img-fluid w-100' alt='technology'/>
                          <small className='reviewTag'>Review project</small>
                      </a>
                  </Grid>

                  <Grid item sm={4} container direction='column' justify='space-between' style={{height:'100%'}}>

                      <p>We love a good excuse to travel for anything from ideation to implementation.</p>
                      <p>We connect <strong>worldwide</strong> with distributed teams through all channels and tools including <em>Slack</em>, <em>Jira</em>, <em>Invision</em>, <em>Figma</em>, <em>Spreadsheets</em>, <em>Github</em> and more</p>
                  </Grid>


              </Grid>

              <Grid container spacing={1} alignItems='center' style={{margin:'40px 0 60px 0'}}>
                  <Grid item xs={6} sm={3} >
                      <a rel="noopener noreferrer" href="http://sammietaylor.com/case-studies/case-studies/farm-fresh"
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

              <CaseStudies/>
          </section>

          <section className='page' id="products">
              <div onClick={this.scrollTo} href='#home' className='backToTop mb-1'>back to top</div>
              <h1 style={{marginBottom:40}} className='ideaTitle'>PRODUCT DEVELOPMENT</h1>
              <Grid container justify='space-between' wrap='wrap' alignContent='flex-start' alignItems='flex-start' spacing={1}>
                  <Grid item xs={12} sm={6} >
                      Formulated in Northern Thailand with Tamarind and Honey. Tamarind has been used for many
                      generations as a natural skin exfoliant in Asia. We noticed a lack of knowledge regarding this
                      ingredient in the western beauty/skincare markets, so we decided to bring it to the market and it
                      was a hit.
                  </Grid>
                  <Grid item xs={12} sm={6} >
                      <img src="/images/products/tamarind.jpg" className='img-fluid w-100' alt='tamarind body scrub'/>
                  </Grid>
                  <Grid item xs={12} sm={6} >
                      <img src="/images/products/tumeric.jpg" className='img-fluid w-100'  alt='tumeric face scrub'/>
                  </Grid>
                  <Grid item xs={12} md={6} >
                      <span>All-Natural Turmeric Face Mask + Scrub. Our Scrub is formulated with organic Turmeric sourced from Northern Thailand. Turmeric is considered nature's most powerful herb with anti-inflammatory, anti-oxidant, anti-bacterial, and anti-aging properties. 10% of each sale of this product was donated to <a
                          target='_blank' rel="noopener noreferrer"
                          href='http://www.warmheartworldwide.com/'>www.warmheartworldwide.com</a>.</span>
                  </Grid>
                  <Grid item xs={12} md={6} >
                      <span>A product inspired by Sammie's Grandmother's traditional Gold Milk recipe. Gold Milk is a multi-purpose paste created with a fragrant blend of date paste, coconut butter, cardamom, cloves, cinnamon, and single-origin Turmeric sourced through <a
                          target='_blank' rel="noopener noreferrer" href='https://www.diasporaco.com/'>Diaspora Co</a>. All organic ingredients.</span>
                  </Grid>
                  <Grid item xs={12} md={6} >
                      <img src="/images/products/goldmilk-board.jpg" className='img-fluid w-100' alt='golk milk'/>
                  </Grid>
                  <Grid item xs={12} md={6} >
                      <img src="/images/products/goldsauce.jpg" className='img-fluid w-100' alt='gold sauce'/>
                  </Grid>
                  <Grid item xs={12} md={6} >
                      <span>The savory version of Gold Milk paste. Featuring single-origin Turmeric sourced through <a
                          target='_blank' rel="noopener noreferrer" href='https://www.diasporaco.com/'>Diaspora Co</a>, and blended with coconut butter and a mix of savory Ayurvedic herbs. We marketed this as a multi-purpose paste that could be used as a spread, marinade, or butter alternative. All organic.</span>
                  </Grid>
                  <Grid item xs={12} md={6} >
                      This hair butter was formulated on our journey through Morocco. We created this with Argan Oil,
                      Jamaican Castor Oil, Amla, and a floral essential oil blend. All organic, all-natural.
                  </Grid>
                  <Grid item xs={12} md={6} >
                      <img src="/images/products/hairbutter-hand.jpg" className='img-fluid w-100' alt='hair butter'/>
                  </Grid>
                  <Grid item xs={12} md={6} >
                      <img src="/images/products/florul.jpg" className='img-fluid w-100' alt='florul'/>
                  </Grid>
                  <Grid item xs={12} md={6} >
                      Florul is a product that provides a floral spa bathing experience in a box. Inspired by the
                      infamous flower baths of Bali and Morocco's hammams. We have partnered with various flower farms
                      around California and Hawai'i to deliver fresh flower heads to our customers along with everything
                      they would need for a bath, which includes bath salt blends, candles, herbal bath tea, and more
                      add ons to complete the unique bathing experience the customer is looking for.
                  </Grid>
                  <Grid item xs={12} md={6} >
                      One of our most popular products, Skin Water is a unique blend of liquid silica and chlorophyll
                      that can be added to smoothies, water, and juices. Silica is a key ingredient in collagen creation
                      and is a building block for healthy skin, hair, and nails. Chlorophyll assists in optimal
                      digestion, gut health, immunity, and liver function. Blending these two ingredients together
                      creates a unique elixir that promotes over inner and outer wellbeing.
                  </Grid>
                  <Grid item xs={12} md={6} >
                      <img src="/images/products/skinwater.jpg" className='img-fluid w-100' alt='skin water'/>
                  </Grid>
              </Grid>
          </section>

          <section className='page' id="workspaces">
              <div className='idea'>
                  <div className='generalInfo'>
                      <div onClick={this.scrollTo} href='#home' className='backToTop'>back to top</div>
                      <h2 className='ideaTitle'>OUR WORKSPACES</h2>
                      <Grid container spacing={1}>
                          <Grid item xs={12} sm={4}>
                              <h1>Oakland, California</h1>
                              <a href='https://www.merritton3rd.com/' target="_blank" rel="noopener noreferrer">Merrit
                                  On 3rd</a> is our homebase for developing the software and network necessary to
                              connect and exchange solutions around the whole world.
                          </Grid>
                          <Grid item xs={12} sm={8} >
                              <img src="/images/oakland-office.jpg" className='img-fluid w-100' alt='oakland office'/>
                          </Grid>
                      </Grid>
                      <Grid container spacing={1} wrap='wrap-reverse'>
                          <Grid item xs={12} sm={8} >
                              <img src="/images/kh-office.jpg" className='img-fluid w-100' alt='kapuna hale garage'/>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                              <h1>Kilauea, Kauai</h1>
                              <a target="_blank" rel="noopener noreferrer" href="https://kapunahale.com">Kapuna
                                  Hale</a> is our creative workspace to grow solutions from soil and sweat equity.
                          </Grid>
                      </Grid>

                      <Grid container spacing={1} direction='column'>
                          <Grid item style={{textAlign: 'center', margin: '20px auto'}}><em>Ruhral Farms</em> was
                              founded in 2018 by <a target="_blank" rel="noopener noreferrer"
                                                    href="https://taylormadetraffic.com">Eli A. Taylor</a> and <a
                                  target="_blank" rel="noopener noreferrer" href="https://sammietaylor.com">Sammie A.
                                  Khalil</a>.</Grid>
                          <Grid item>Our <strong>mission</strong> is to grow with our community by creating sustainable
                              solutions for each other and our environment. </Grid>
                          <Grid item>To fulfill this mission we seek out partnerships over clients, and prioritize
                              projects that grow our <em>sharing economy</em>. We believe pooling capital, equity,
                              skills and resources will always deliver the best outcome for everyone.</Grid>
                          <Grid item>If you have a project that could benefit from what we offer, lets <Collaborate cta='Join Forces'/>.</Grid>
                      </Grid>

                      <Grid container spacing={1} style={{marginTop:40}}>
                          <Grid item xs={6}>
                              <img src='/images/sammie-smiles.jpg' className='img-fluid' alt='sammie'/>
                          </Grid>
                          <Grid item xs={6}>
                              Sammie has lead brands and teams throughout the fashion and beauty industries in business development, digital marketing, graphic and
                              UI design. Review more of her work at <a
                              target="_blank" rel="noopener noreferrer" href="https://sammietaylor.com">SammieTaylor.com</a>
                          </Grid>
                      </Grid>

                      <Grid container spacing={1} style={{marginTop: 30}}>
                          <Grid item xs={6}>
                              Eli is a full stack developer with 15 years of experience across a wide variety of
                              technologies. Review more of his work at <a target="_blank" rel="noopener noreferrer"
                                                                          href="https://taylormadetraffic.com">TaylorMadeTraffic.com</a>
                          </Grid>
                          <Grid item xs={6}>
                              <img src='/images/eli-n-charlie.jpg' className='img-fluid' alt='eli'/>
                          </Grid>
                      </Grid>

                  </div>
              </div>
          </section>

          <section className='page' id="initiatives">
              <div className='idea'>
                  <div className='generalInfo'>
                      <div onClick={this.scrollTo} href='#home' className='backToTop'>back to top</div>
                      <h2 className='ideaTitle'>INITIATIVES</h2>
                      <div className="d-flex flex-wrap mt-5 mb-5">
                          <div className="col-12 col-md-6">
                              <Link to="/red-dirt-fellows" style={{textDecoration: 'none'}}>
                                  <div id='applyNow' style={{backgroundImage: 'url(/images/kh-reddirt.jpg)'}}>
                                      <div>Apply Now</div>
                                      <small className='text-center'><em>Due August 1st</em></small>
                                  </div>
                              </Link>
                          </div>
                          <div className="col-12 col-md-6">
                              <h1 className='ideaTitle'>Red Dirt Fellowships</h1>
                              <p>We offer 1-12 month fellowships in any of the following disciplines. </p>
                              <p>We will provide free-housing housing for the term and a $5,000 budget to spend on a new
                                  solution for gardening, recycling, or repurposing materials</p>
                          </div>
                      </div>
                      <div className="d-flex flex-wrap-reverse align-content-center mt-5">
                          <div className="col-md-6">
                              <h1 className='ideaTitle'>ZAMANA: GIRLKIE</h1>
                              <p><strong>PROBLEM:</strong> Female youth in Pakistan do not have access to children's
                                  books in Urdu that are unrelated to religion. We focus on young girls in Pakistan as
                                  32% of girls in Pakistan are out of school, compared with 21% of boys. </p>
                              <p><strong>SOLUTION:</strong> Provide young girls with books in Urdu featuring strong
                                  diverse female leads where lessons go beyond tradition.</p>
                              <small className='tags'>#education #girlpower</small>
                          </div>
                          <div className="col-md-6">
                              <img src="/images/zamanalogo.png" alt='zamana girlki logo' className="img-fluid"/>
                          </div>
                      </div>
                  </div>
                  <div className="block">
                      <h3>BASIC OBJECTIVES</h3>
                      <ul>
                          <li>Write and publish children's books with strong female leads</li>
                          <li>Obtain translating rights to existing books and publish Urdu versions</li>
                          <li>Distribute books to various orphanages, villages, and public schools</li>
                      </ul>
                  </div>
              </div>
          </section>
      </div>
    );
  }
}
