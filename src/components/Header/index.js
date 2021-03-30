import React, { useEffect } from 'react';
import Navigation from '../Navigation';

const Header = ({ pages, currentPage, setCurrentPage }) => {
	useEffect(() => document.title = currentPage);

	return (
		<header>
			<h1><a href="./">Diarmuid Murphy | Software Engineer</a></h1>

			<Navigation
				pages={pages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</header>
	);
};

export default Header;