import React, { useState } from 'react'


import NavProvider from './context/NavContext';
import './App.scss';
import './base/style.scss';

import Header from './pages/Js/Header';
import Navigation from './components/Js/Navigation';
import Slides from './components/Js/Slides';

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
        </main>
        <footer>
        </footer>
      </NavProvider>
    </div>
  );
}

export default App;
