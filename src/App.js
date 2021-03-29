import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
