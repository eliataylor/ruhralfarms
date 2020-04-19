import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

class iReclaim22 extends Component {

    render() {
        return (
          <div className='idea'>
            <div className='generalInfo'>
              <div onClick={this.scrollTo} href='#home' className='backToTop'>extracurricular initiatives</div>
              <h2 className='ideaTitle'>iReclaim-22</h2>
              <p><strong>PROBLEM:</strong> Recycling old refrigerators & air conditioners requires unnecessary space, costs and risks to our safety, environment, and public funds.
                Read more on the <a target="_blank" rel="noopener noreferrer"  href="https://www.epa.gov/clean-air-act-overview">Clean Air Act</a>
              </p>

              <p><strong>SOLUTION:</strong> Provide county junkyards with a single tool to to verifiably vacuum test and extract refrigrants for safe disposal and resell, with cloud communication for EPA compliance. </p>
              <small className='tags'>#technology #environment #recycle #hazardous #waste</small>
            </div>

            <div className="block">
              <h3>BASIC PROCESS</h3>
              <ul>
                <li>Scan Barcode</li>
                <ul>
                  <li>Log Unit</li>
                  <li>Lookup Fastener position</li>
                  <li>RadialArm assists in </li>
                  <li>Remove interior cover</li>
                </ul>
                <li>Compress needle c-clamp onto any refrigrant lines</li>
                <li>Vacuum Test</li>
                <ul>
                   <li>Attempt to vacuum and measure refridgrant extracted</li>
                   <li>If no vacuum tag as accordingly</li>
                </ul>
                <li>Tag Refridgerator <em>emptied</em>, <em>no vacuum</em>, or <em>no acess</em></li>
              </ul>
            </div>

            <div id="progress" className="block row crumb-trail align-items-center ">
              <span className="col p-0"><img className="img-fluid" src='/images/training-ireclaim22-c.png' alt='training' /></span>
              <span className="arrow">&#x27A7;</span>
              <span className="col p-0"><img className="img-fluid" src='/images/checkedappliances.jpg' alt='after training' /></span>
            </div>

            <div className="block">
              <h3>TOOL ATTACHMENTS</h3>
              <p>Imagine a gun with these attachments</p>
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
        );
    }
}

export default iReclaim22;
