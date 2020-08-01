import React from 'react';
import { Link } from 'react-router-dom';

const FooterList = ({ list }) => {
	return (
		<ul className="footer-list">
			{list.map((item) => {
				const { id, name, link } = item;
				return (
					<li key={id}>
						<Link className="footer-list-item" to={link}>
							<span>{name}</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default FooterList;
