import React from 'react'

import { Navbar } from './components'
import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels, Gallery, FindUs, Footer } from './container'

import './App.css';

const App = () => (
  <React.Fragment>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    {/* <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer /> */}
  </React.Fragment>
);
 
export default App;