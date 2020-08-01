import React from 'react';
import { features } from '../../../Data/landing';
import { Link } from 'react-router-dom';
import './main.css';
const Features = () => {
	return (
		<div className="features">
			{features.map((item) => {
				const { id, title, desc, btn, img } = item;
				return (
					<div key={id} className="features-item">
						<figure>
							<img className="features-item-img" src={img} alt="" />
						</figure>
						<div className="features-item-content">
							<h2 className="heading-2">{title}</h2>
							<p className="features-item-content-desc">{desc}</p>
							<Link className="features-item-content-link">{btn}</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Features;
