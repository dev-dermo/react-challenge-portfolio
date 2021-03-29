import React from 'react';

const Navigation = ({ pages, currentPage, setCurrentPage }) => {
	return (
		<ul id="navigation">
			{pages.map(page => {
				return (
					<li key={page}>
						<a
							className={currentPage === page ? 'active' : ''}
							href="#"
							onClick={(e) => {
								e.preventDefault();
								setCurrentPage(page);
							}}
						>
							{page}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Navigation;