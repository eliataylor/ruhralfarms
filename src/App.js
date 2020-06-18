import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './Components/Home';
import FellowApp from './Components/FellowApp';
import Counselors from "./Components/Counselors";
import { SnackbarProvider } from 'notistack';

const tileData = [
  {
    img: 'https://kapunahale.com/wwwroot/photos/projects/20170528_111110_300x300.jpg',
    title: 'Propagation',
    invest: 'Hydroponic cloners, raised nursery beds, air pumps...?',
    plan: 'Take ~75% of produce to market'
  },
  {
    img: '/images/kh/kh-permaculture.jpg',
    title: 'Permaculture',
    invest: 'Starter plants, trees and soils, ...?',
    plan: 'Take ~75% of produce to market'
  },
  {
    img: 'https://kapunahale.com/wwwroot/photos/projects/16_300x300.jpg',
    title: 'Horticulture',
    invest: 'Starter plants, trees, soils, tillers, ground covers, irrigation systems, ...?',
    plan: 'Take ~75% of produce to market'
  },
  {
    img: 'https://kapunahale.com/wwwroot/photos/projects/8_300x300.jpg',
    title: 'Landscape Design',
    invest: 'Pavers, rock cinders, and starter plants or trees, a photoshoot and website for your portfolio, ...?',
    plan: 'Start your own landscaping business'
  },
  {
    img: '/images/kh/sammie-caters-A.png',
    title: 'Catering',
    invest: 'Mobile Clay oven, Mobile BBQ / Kitchen, drop freezers, appliances, ...?',
    plan: 'Start a mobile catering company'
  },
  {
    img: 'https://kapunahale.com/wwwroot/photos/projects/IMG_0174_300x300.jpg',
    title: 'Interior Design',
    invest: 'Turn our 1400 square foot lanai into a yoga and fitness space, + a photoshoot and website for your portfolio?',
    plan: 'Start your interior design business'
  },
  {
    img: 'https://kapunahale.com/wwwroot/photos/projects/20170602_144257_300x300.jpg',
    title: 'Carpentry',
    invest: 'CNC machine, sawmill, laser etcher / cutter, ...?',
    plan: 'Build and sell crafts, cabinets, or services'
  },
  {
    img: 'https://kapunahale.com/wwwroot/photos/projects/20141026_131414_300x300.jpg',
    title: 'Construction',
    invest: 'Mobile stage or kiosk, portable sawmill, ...?',
    plan: 'Start a event production business, milling service, or just build your portfolio and experience'
  },
  {
    img: 'https://kapunahale.com/wwwroot/photos/projects/59_300x300.jpg',
    title: 'Combustion Engines',
    invest: 'Parts and materials for restoration projects',
    plan:'Restore and resell cars, trucks and machinery'
  },
  {
    img: 'https://kapunahale.com/wwwroot/photos/projects/51_300x300.jpg',
    title: 'Electric Motors',
    invest: 'Old electric golf cart, tractors, refrigerators',
    plan:'Rebuild and resell tools and appliances with solar powered motors'
  },
  {
    img: 'https://kapunahale.com/wwwroot/photos/projects/9_300x300.jpg',
    title: 'Plumbing',
    invest: 'Water catchment systems, farm irrigation systems, ...?',
    plan:'Start your plumbing business'
  },
  {
    img: '/images/kh/concrete-firepit.jpg',
    title: 'Masonry',
    invest: 'Cement mixer, Hand trucks, ...?',
    plan:'Build and sell stone and cement Art, building services'
  },
  {
    img: '/images/team-music.jpg',
    title: 'Music',
    invest: 'Recording studio, instruments, mixing tools, ...?',
    plan:'Record, release, and market an album'
  },
  {
    img: '/images/team-diverse.jpg',
    title: 'Languages',
    invest: 'Instruction and event promotion',
    plan:'Host language exchange events'
  }
];

// TOOD: add "Fitness", "Software?"

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
      <SnackbarProvider maxSnack={3}>
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
    </SnackbarProvider>
    </ThemeProvider>
  );
}
