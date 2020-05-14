import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './Components/Home';
import FellowApp from './Components/FellowApp';
import Counselors from "./Components/Counselors";

const tileData = [
  {
    img: 'http://kapunahale.com/wwwroot/photos/projects/20170528_111110_300x300.jpg',
    title: 'Propogation',
    invest: 'Hydroponic cloners, raised nursery beds, air pumps, ...?'
  },
  {
    img: '/images/kh/kh-permaculture.jpg',
    title: 'Permaculture',
    invest: 'Starter plants, trees and soils, ...?'
  },
  {
    img: 'http://kapunahale.com/wwwroot/photos/projects/16_300x300.jpg',
    title: 'Horticulture',
    invest: 'Starter plants, trees, soils, tillers, ground covers, irrigation systems, ...?'
  },
  {
    img: 'http://kapunahale.com/wwwroot/photos/projects/8_300x300.jpg',
    title: 'Landscape Design',
    invest: 'Pavers, rock cinders, and starter plants or trees, + a photoshoot and website for your portfolio?'
  },
  {
    img: '/images/kh/sammie-caters-A.png',
    title: 'Catering',
    invest: 'Mobile Clay oven, Mobile BBQ / Kitchen, drop freezers, appliances, ...?'
  },
  {
    img: 'http://kapunahale.com/wwwroot/photos/projects/IMG_0174_300x300.jpg',
    title: 'Interior Design',
    invest: 'Rolling privacy walls for the 1400 square foot lanai, + a photoshoot and website for your portfolio?',
  },
  {
    img: 'http://kapunahale.com/wwwroot/photos/projects/20170602_144257_300x300.jpg',
    title: 'Carpentry',
    invest: 'CNC machine, sawmill, laser cutter?'
  },
  {
    img: 'http://kapunahale.com/wwwroot/photos/projects/20141026_131414_300x300.jpg',
    title: 'Construction',
    invest: 'Mobile stage or kiosk, portable sawmill, ...?'
  },
  {
    img: 'http://kapunahale.com/wwwroot/photos/projects/59_300x300.jpg',
    title: 'Small Engines',
    invest: 'Robot parts, ...?'
  },
  {
    img: 'http://kapunahale.com/wwwroot/photos/projects/51_300x300.jpg',
    title: 'Electric Motors',
    invest: 'Old electric golf cart, Raspberry PI and robotic control units, ...?'
  },
  {
    img: 'http://kapunahale.com/wwwroot/photos/projects/9_300x300.jpg',
    title: 'Plumbing',
    invest: 'Irrigation systems, ...?'
  },
  {
    img: '/images/kh/concrete-firepit.jpg',
    title: 'Masonry',
    invest: 'Cement mixer, Hand trucks, ...?'
  },
  {
    img: '/images/team-music.jpg',
    title: 'Music',
    invest: 'Recording studio, instruments, mixing tools, ...?'
  },
  {
    img: '/images/team-diverse.jpg',
    title: 'Languages',
    invest: 'Instruction ...?'
  },
];

export default function App() {

  const theme =
      createMuiTheme({
        palette: {
          type: 'light',
          primary: {
            main: '#90AB43',
            contrastText: '#202020',
          },
          secondary: {
            main: '#495703',
            contrastText: '#202020',
          },
        },
      });

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/red-dirt-coworkers">
          <FellowApp tileData={tileData} />
        </Route>
        <Route path="/">
          <Home tileData={tileData}  />
        </Route>
        <Route path="/counselors">
          <Counselors tileData={tileData}  />
        </Route>
      </Switch>
  </Router>
    </ThemeProvider>
  );
}
