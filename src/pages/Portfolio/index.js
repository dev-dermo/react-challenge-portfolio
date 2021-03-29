import React from 'react';
import Project from '../../components/Project';

const Portfolio = () => {
	const projects = [
		{
			name: 'Example',
			description: 'More information coming soon.',
			link: 'http://example.org/',
			image: 'https://via.placeholder.com/600x400'
		},
		{
			name: 'Another Example',
			description: 'More information coming here too.',
			link: 'http://example.org/',
			image: 'https://via.placeholder.com/600x400'
		},
		{
			name: 'Final Example',
			description: 'More information coming here too.',
			link: 'http://example.org/',
			image: 'https://via.placeholder.com/600x400'
		},
		{
			name: 'Example',
			description: 'More information coming soon.',
			link: 'http://example.org/',
			image: 'https://via.placeholder.com/600x400'
		},
		{
			name: 'Another Example',
			description: 'More information coming here too.',
			link: 'http://example.org/',
			image: 'https://via.placeholder.com/600x400'
		},
		{
			name: 'Final Example',
			description: 'More information coming here too.',
			link: 'http://example.org/',
			image: 'https://via.placeholder.com/600x400'
		},
	];
	return (
		<section>
			<h2>Portfolio</h2>

			<div className="project-container">
				{projects.map(project => <Project key={project.name} details={project} />)}
			</div>
		</section>
	);
};

export default Portfolio;