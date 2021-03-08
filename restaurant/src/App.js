import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavProvider from './context/NavContext';
import BookingProvider from './context/BookingContext';

import './App.scss';
import './base/style.scss';

import Navigation from './components/Js/Navigation';
import Slides from './components/Js/Slides';

import Header from './pages/Js/Header';
import About from './pages/Js/About';
import Menu from './pages/Js/Menu';
import Booking from './pages/Js/Booking';
import Footer from './pages/Js/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavProvider >
          <BookingProvider>
            <Header />
            <Navigation />
            <Switch>
              <Route path='/' exact>
                <Slides />
                <About />
                <Menu />
                <Footer />
              </Route>
              <Route path='/booking'>
                <Booking />
              </Route>
            </Switch>
          </BookingProvider>
        </NavProvider>
      </Router>
    </div>
  );
}

export default App;
