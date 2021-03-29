import React, { useState } from 'react';
import './App.css';

import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

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
