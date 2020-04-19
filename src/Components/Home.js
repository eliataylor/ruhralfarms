import React from 'react';
import { Link } from "react-router-dom";
import Collaborate from './Collaborate';
import CaseStudies from './CaseStudies';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


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
              <div className="col-6 col-md-3 p-1"><a href="#technology" onClick={this.scrollTo} className='sqCta' style={{ backgroundImage:'url(/images/radialarm.jpg)'}}>APPLICATIONS</a></div>
              <div className="col-6 col-md-3 p-1"><a href="#products" onClick={this.scrollTo} className='sqCta' style={{ backgroundImage:'url(http://sammietaylor.com/assets/archives/branding/j__Creative-direction-for-branding.jpg)'}}>PRODUCTS</a></div>
              <div className="col-6 col-md-3 p-1"><a href="#susistence" onClick={this.scrollTo} className='sqCta' style={{backgroundImage:'url(/images/kh-reddirt.jpg)'}}>WORKSPACES</a></div>
              <div className="col-6 col-md-3 p-1"><a href="#education" onClick={this.scrollTo} className='sqCta' style={{backgroundImage:'url(/images/ruhralfarmszamana.png)'}}>EDUCATION</a></div>
            </div>

            <div className="text-center" style={{margin:'40px auto'}}>
              <Collaborate />
            </div>
          </section>

          <section className='page' id="technology">
              <div onClick={this.scrollTo} href='#home' className='backToTop mb-1'>back to top</div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <a rel="noopener noreferrer" href="http://taylormadetraffic.com/projects?pid=47" target="_blank">
                    <img src="/images/radialarm.jpg" className='img-fluid w-100' alt='technology' />
                    <small className="mb-5">Review project</small>
                  </a>

                  <a rel="noopener noreferrer" href="http://sammietaylor.com/design" target="_blank" className="d-block mt-5 mb-5">
                    <img src="http://sammietaylor.com/assets/archives/UI-UX/j__UX-mike.png" className='img-fluid w-100 mt-2' alt='technology' />
                    <small>Review project</small>
                  </a>

                  <a rel="noopener noreferrer" href="http://sammietaylor.com/case-studies/case-studies/farm-fresh" target="_blank">
                    <img src="/images/farmfreshphones.png" className='img-fluid w-100 mt-1' alt='technology' />
                    <small className="mb-5">Review project</small>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <h1 className='ideaTitle'>APPLICATIONS</h1>
                  <p>Our focus is designing and developing products, tools and spaces that are financially sustainable, and offer an even greater return for the environment, wellness, education, and collective stimulus of our communities.</p>
                  <p>While Kauai is our homebase for growing these solutions from the soil and sweat, Oakland California is our homebase for developing the software and network necessary to connect and exchange solutions around the whole world.</p>
                  <p>We employ both traditional and adaptive strageties in product and business development. While we model logistical approach around the <em>Software Development Life Cycle</em>, we appreciate those overlapping areas in the creative process and <strong>specialize in bringing it all together</strong>.</p>
                  <p className='text-center'><img alt='sdlc' src="/images/sdlc-a.png" width='175' /></p>
                  <p>For samples of work around the design and ideation stages checkout <a target="_blank" rel="noopener noreferrer" href="http://sammietaylor.com">SammieTaylor.com</a> and <a target="_blank" rel="noopener noreferrer" href="http://taylormadetraffic.com/years/design">TaylorMadeTraffic.com/taylormade/design</a>
                  </p>
                  <p>For software solutions visit <a target="_blank" rel="noopener noreferrer" href="https://taylormadetraffic.com">TaylorMadeTraffic.com</a>.
                  </p>
                </div>
              </div>
              <CaseStudies />
          </section>

          <section className='page' id="products">
              <div onClick={this.scrollTo} href='#home' className='backToTop mb-1'>back to top</div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <img src="/images/florul.jpg" className='img-fluid w-100' alt='florul' />
                </div>
                <div className="col-12 col-md-6">
                  <h1 className='ideaTitle'>PRODUCTS</h1>
                  <a href="https://ruhral.com">Ruhral.com</a>
                </div>
              </div>
          </section>

          <section className='page' id="susistence">
              <div className='idea'>
                <div className='generalInfo'>
                  <div onClick={this.scrollTo} href='#home' className='backToTop'>back to top</div>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <Link to="/red-dirt-fellows" style={{textDecoration:'none'}}>
                      <div id='applyNow' style={{backgroundImage:'url(/images/kh-reddirt.jpg)'}} >
                          <div>Apply Now</div>
                          <small className='text-center'><em>Due May 1st</em></small>
                      </div>
                      </Link>
                    </div>
                    <div className="col-12 col-md-6">
                      <h1 className='ideaTitle'>Red Dirt Fellowships</h1>
                      <p><a target="_blank" rel="noopener noreferrer" href="https://kapunahale.com">Kapuna Hale</a> is our creative workspace to grow, design, and develop our clients' ideas for sustainable living.</p>
                      <p>In turn, we now want to offer 1-12 month fellowships in any of the following disciplines. </p>
                      <p>We will provide free-housing housing for the term and a $5,000 budget to spend on a new solution for gardening, recycling, or repurposing materials</p>
                    </div>
                  </div>

                  <div className="row">
                    <GridList>
                      {this.props.tileData.map(tile => (
                        <GridListTile key={tile.img} cols={1}>
                          <img src={tile.img} alt={tile.title} />
                          <GridListTileBar title={tile.title} />
                        </GridListTile>
                      ))}
                    </GridList>
                  </div>


                </div>
            </div>
          </section>

          <section className='page' id="education" >
          <div className='idea'>
            <div className='generalInfo'>
              <div onClick={this.scrollTo} href='#home' className='backToTop'>back to top</div>
              <h2 className='ideaTitle'>Zamana: Girlki</h2>
              <div className="row p-0 flex-wrap-reverse align-content-center m-0">
                <div className="col-md-6 pl-md-0">
                  <p><strong>PROBLEM:</strong> Female youth in Pakistan do not have access to children's books in Urdu that are unrelated to religion. We focus on young girls in Pakistan as 32% of girls in Pakistan are out of school, compared with 21% of boys. </p>
                  <p><strong>SOLUTION:</strong> Provide young girls with books in Urdu featuring strong diverse female leads where lessons go beyond tradition.</p>
                  <small className='tags'>#education #girlpower</small>
                </div>
                <div className="col-md-6 pr-md-0">
                  <img src="/images/zamanalogo.png" alt='zamana girlki logo' className="img-fluid" />
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


          <section className='page' id="aboutus" >
          <div className='idea'>
            <div className='generalInfo'>
              <div onClick={this.scrollTo} href='#home' className='backToTop'>back to top</div>
              <h2 className='ideaTitle'>About Us</h2>
              <p>
                Ruhral Farms was founded in 2018 by <a target="_blank" rel="noopener noreferrer" href="https://taylormadetraffic.com">Eli A. Taylor</a> and <a target="_blank" rel="noopener noreferrer"  href="https://sammietaylor.com">Sammie A. Khalil</a>.
              </p>
              <div><img alt="oakland office" src="/images/oakland-office.jpg" style={{width:'100%'}} /></div>
            </div>
          </div>
          </section>


      </div>
    );
  }
}
