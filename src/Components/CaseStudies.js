import React, { Component } from 'react';
// import {Link} from "react-router-dom";
import '../bootstrap.scss';
// import Button from '@material-ui/core/Button';

class CaseStudies extends Component {

    render() {
        return (
          <div >
            <div className="jumbotron d-flex flex-column" style={{backgroundImage:'url(http://sammietaylor.com/assets/Desktop-Img.png)', marginTop:50}}>
              <div className="flex-grow-1"></div>
              <div>
                <h3>Farm Fresh</h3>
                <p className="fontLight mb-4 mt-4">Buying produce directly from<br /> farmers has never been easier</p>
                <a rel="noopener noreferrer" target="_blank" href="http://sammietaylor.com/case-studies/case-studies/farm-fresh" style={{fontSize:15, fontWeight:600, padding:'15px 44px'}} className="btn btn-outline-light btn-lg">READ CASE STUDY</a>
              </div>
            </div>

            <div className="jumbotron d-flex flex-column" style={{backgroundImage:'url(http://sammietaylor.com/assets/santa-photo.png)', marginBottom:75}}>
              <div className="flex-grow-1"></div>
              <div>
                <h3>Santa App</h3>
                <p className="fontLight mb-4 mt-4">Help fulfill wishes for the<br /> homeless of your community</p>
                <a rel="noopener noreferrer" target="_blank" href="http://sammietaylor.com/case-studies/case-studies/santa" style={{fontSize:15, fontWeight:600, padding:'15px 44px'}} className="btn btn-outline-light btn-lg">READ CASE STUDY</a>

                <p className="mt-5">
                  <a href="https://www.fungiving.net/#comingsoon" className="btn btn-outline-light btn-lg mr-2" > <img src="/images/app-store-og.png" alt="app store" height={35} className='mr-1' />App Store</a>
                  <a href="https://www.fungiving.net/#comingsoon" className="btn btn-outline-light btn-lg" > <img src="/images/google-play-store.png" alt="play store" height={35} className='mr-1' />Play Store</a>
                </p>
              </div>
            </div>


          </div>
        );
    }
}

export default CaseStudies;
