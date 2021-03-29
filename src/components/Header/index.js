import React, { useState } from 'react';
import Navigation from '../Navigation';

const Header = () => {
	const pages = ['About me', 'Portfolio', 'Contact', 'Resume'];
	const [currentPage, setCurrentPage] = useState(pages[0]);

	return (
		<header>
			<h1><a href="/">Diarmuid Murphy | Software Engineer</a></h1>

			<Navigation
				pages={pages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</header>
	);
};

export default Header;