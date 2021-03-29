import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const pages = ['About me', 'Portfolio', 'Contact', 'Resume'];
	const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="container">
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {
        (currentPage === 'About me' && <About />) || 
        (currentPage === 'Portfolio' && <Portfolio />) || 
        (currentPage === 'Contact' && <Contact />) ||
        (currentPage === 'Resume' && <Resume />)
      }
      <Footer />
    </div>
  );
}

export default App;
