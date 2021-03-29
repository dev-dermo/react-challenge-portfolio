import React from 'react';

const Footer = () => {
	const today = new Date();

	return (
		<footer>
			<ul id="social">
				<li><a href="https://github.com/diarmuid-murphy" target="_blank" rel="noreferrer">GitHub</a></li>
				<li><a href="https://www.linkedin.com/in/diarmuidmurphy/" target="_blank" rel="noreferrer">LinkedIn</a></li>
			</ul>

			&copy; {today.getFullYear()} <a href="https://github.com/diarmuid-murphy" target="_blank" rel="noreferrer">diarmuid-murphy</a>
		</footer>
	);
};

export default Footer;