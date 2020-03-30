import React from 'react';
import { Link } from "react-router-dom";
import Collaborate from './Collaborate';

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
            <div className='d-flex w-100 justify-content-around'>
              <a href="#technology" onClick={this.scrollTo} className='col-4 sqCta ctaTech' style={{ backgroundImage:'url(/images/robottech.png)'}}>TECHNOLOGY</a>
              <a href="#susistence" onClick={this.scrollTo} className='col-4 sqCta' style={{backgroundImage:'url(/images/kh-reddirt.jpg)'}}>RED DIRT</a>
              <a href="#education" onClick={this.scrollTo} className='col-4 sqCta' style={{backgroundImage:'url(/images/zamanalogo.png)'}}>EDUCATION</a>
            </div>

            <div className="text-center" style={{margin:'40px auto'}}>
              <Collaborate />
            </div>
          </section>

          <section className='page' id="technology">
              <div onClick={this.scrollTo} href='#home' className='backToTop mb-1'>back to top</div>
              <div className="row">
                <div className="col-md-6">
                  <h1 className='ideaTitle'>TECHNOLOGY</h1>
                  <img src="/images/franck-v-g29arbbvPjo-unsplash.jpg" className='img-fluid w-100' alt='technology' />
                </div>
                <div className="col-md-6">
                  <p>We seek out technical solutions for communities to common problems with our environment, health, wellness and education.</p>
                  <p>We employ proven strategies throughout full software development life cycle from ideation to implementation and evaluation</p>
                  <p className='text-center'><img alt='sdlc' src="/images/sdlc-a.png" width='175' /></p>
                  <p>For ideation stages, visit <a target="_blank" rel="noopener noreferrer" href="http://sammietaylor.com">SammieTaylor.com</a>.
                  For software solutions visit <a target="_blank" rel="noopener noreferrer" href="https://taylormadetraffic.com">TaylorMadeTraffic.com</a>.
                  Below are featured projects for our focuse initiatives</p>
                </div>
              </div>
              <div className='idea'>
                <div className='generalInfo'>
                  <div onClick={this.scrollTo} href='#home' className='backToTop'>feature initiative</div>
                  <h2 className='ideaTitle'>iReclaim-22</h2>
                  <p><strong>PROBLEM:</strong> Recycling old refrigerators & air conditioners requires unnecessary space, costs and risks to our safety, environment, and public funds. Read more on the <a target="_blank" rel="noopener noreferrer"  href="https://www.epa.gov/clean-air-act-overview">Clean Air Act</a></p>
                  <p><strong>SOLUTION:</strong> Build and train a robot to visually identify refrigerator and AC lines in junkyards, in order to capture refrigerants for safe disposal.</p>
                  <small className='tags'>#technology #environment #recycle #hazardous #waste</small>
                </div>

                <div className="block">
                  <h3>BASIC OBJECTIVES</h3>
                  <ul>
                    <li>Establish junkyard GPS boundaries</li>
                    <li>Visually ID refrigerator and interior cover panel</li>
                    <li>Visually ID and log barcode if available</li>
                    <li>Remove interior cover</li>
                    <li>Visually ID copper lines on AC system</li>
                    <li>Compress recovery tool onto line</li>
                    <li>Vacuum refrigrant out into canister</li>
                    <li>Tag and Log Refridgerator as <em>emptied</em>, <em>no vacuum</em>, or <em>no acess</em></li>
                  </ul>
                </div>

                <div id="progress" className="block row crumb-trail align-items-center ">
                  <span className="col-6 p-0"><img className="img-fluid" src='/images/training-ireclaim22-c.png' alt='training' /></span>
                  <span className="arrow">&#x27A7;</span>
                  <span className="col-6 p-0"><img className="img-fluid" src='/images/checkedappliances.jpg' alt='after training' /></span>
                </div>

                <div className="block">
                  <h3>TOOL ATTACHMENTS</h3>
                  <dl>

                    <dt>Fastner multitool</dt>
                    <dd>A multi tool attachment for common screws and bolts on back panel.

                    <a className='d-none' href="https://www.amazon.com/Protocol-Bicycle-Multi-Tool-screwdrivers/dp/B00OQDME5G/ref=sr_1_4?dchild=1&keywords=bolt+and+screw+multitool&qid=1585348372&s=industrial&sr=1-4"><sup>$</sup>8<sup>99</sup></a>

                    <img src="/images/multitool.jpg" alt='multitool' className='partImg' />

                    </dd>

                    <dt>Suction cup grabber</dt>
                    <dd>To remove loose back panel.
                    <img src="/images/suction-cup.jpg" alt='suction-cup' className='partImg' />
                    </dd>

                    <dt>Pipe piercing needle</dt>
                    <dd>A c-clamp pipe needle to quickly vacuum out refrigrant

                    <a className='d-none' href="https://www.amazon.com/Imperial-PT-109-Refrigerant-Recovery-Tool/dp/B00PGPRYCG"><sup>$</sup>53<sup>42</sup></a>

                    <img src="/images/pt-109.jpg" alt='pt-109' className='partImg' />

                    </dd>

                    <dt style={{borderBottom:'3px double #fff'}}>Vacuum Pump</dt>
                    <dd style={{borderBottom:'3px double #000'}}>A rotary Air HVAC vacuum pump, gauge and canister

                    <a className='d-none' href="https://www.homedepot.com/p/Stark-1-4-HP-3-CFM-Rotary-Air-Vacuum-Pump-HVAC-A-C-Refrigerant-71096/308442652?mtc=Shopping-B-F_D25H-G-D25H-25_28_COMPRESSORS_AND_AIR_TOOL-Multi-NA-Feed-PLA-NA-NA-Compressors_PLA&cm_mmc=Shopping-B-F_D25H-G-D25H-25_28_COMPRESSORS_AND_AIR_TOOL-Multi-NA-Feed-PLA-NA-NA-Compressors_PLA-71700000052227371-58700005026398229-92700050718652120&gclid=Cj0KCQjwyPbzBRDsARIsAFh15JYiVTDKza3IKF7Wr-xd_rglx2-vDt-DCFZEq488OClNjwZFs7g-i4EaAuIMEALw_wcB&gclsrc=aw.ds"><sup>$</sup>65<sup>98</sup></a>

                    <img src="/images/vacuumpump.jpg" className='partImg' alt='vacuum pump' />

                    </dd>

                    <dt>Robot</dt>
                    <dd>


                    <a href="https://www.bostondynamics.com/spot" target="_blank" rel="noopener noreferrer" >Spot<sup dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> from <em>Boston Dynamics</em></a>

                    <img src="/images/Boston-Dynamics-Spot.jpg" alt='robot spot' className='partImg' />

                    </dd>
                  </dl>
                </div>

            </div>
          </section>

          <section className='page' id="susistence">
              <div className='idea'>
                <div className='generalInfo'>
                  <div onClick={this.scrollTo} href='#home' className='backToTop'>back to top</div>
                  <h2 className='ideaTitle'>Red Dirt Fellowships</h2>

                  <p><a target="_blank" rel="noopener noreferrer" href="https://kapunahale.com">Kapuna Hale</a> is our creative workspace to grow, design, and develop ideas for sustainable living. </p>
                  <p>In turn, we now want to offer 1-12 month fellowships in any of the following disciplines. </p>
                  <p>We will provide free-housing housing for the term and a $5,000 budget to spend on a new solution for gardening, recycling, or repurposing materials</p>

                  <div className="row">
                    <GridList cellHeight={160} cols={3}>
                      <GridListTile>
                        <Link to="/red-dirt-fellows" style={{textDecoration:'none'}}>
                        <div id='applyNow' >
                            <div>Apply Now</div>
                            <small className='text-center'><em>Due May 1st</em></small>
                        </div>
                        </Link>
                      </GridListTile>

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
                <div class="col-md-6 pl-md-0">
                  <p><strong>PROBLEM:</strong> Female youth in Pakistan do not have access to children's books in Urdu that are unrelated to religion. We focus on young girls in Pakistan as 32% of girls in Pakistan are out of school, compared with 21% of boys. </p>
                  <p><strong>SOLUTION:</strong> Provide young girls with books in Urdu featuring strong diverse female leads where lessons go beyond tradition.</p>
                  <small className='tags'>#education #girlpower</small>
                </div>
                <div class="col-md-6 pr-md-0">
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
              <p>Ruhral Farms is the marriage of <b>Software Developer</b> <a target="_blank" rel="noopener noreferrer"  href="https://taylormadetraffic.com">Eli A. Taylor</a> and <b>Product Designer</b> <a target="_blank" rel="noopener noreferrer"  href="https://sammietaylor.com">Sammie Khalil Taylor</a></p>
            </div>
          </div>
          </section>


      </div>
    );
  }
}
