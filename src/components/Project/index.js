import React from 'react';

const Project = ({ details }) => {
	const { name, description, link, image } = details;

	return (
		<div className="project">
			<img src={image} alt={name} />
			<h2>{name}</h2>
			<p>{description}</p>
			<a href={link}>More information</a>
		</div>
	);
};

export default Project;