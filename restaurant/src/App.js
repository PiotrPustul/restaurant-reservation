import React from 'react';

import NavProvider from './context/NavContext';

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
      <NavProvider >
        <header>
          <Header />
        </header>
        <nav>
          <Navigation />
        </nav>
        <main>
          <Slides />
          <About />
          <Menu />
          <Booking />
        </main>
        <footer>
          <Footer />
        </footer>
      </NavProvider>
    </div>
  );
}

export default App;
