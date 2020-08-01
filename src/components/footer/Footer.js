import React from 'react';
import { footer } from '../../Data/landing';
import FooterAddress from './footer-components/FooterAddress';
import FooterAction from './footer-components/FooterAction';
import FooterList from './footer-components/FooterList';
import FooterSocial from './footer-components/FooterSocial';
import './main.css';

const Footer = () => {
	const { list, action, social, address, copyRights } = footer;
	return (
		<footer className="footer">
			<div className="container">
				<FooterList list={list} />
				<FooterAction action={action} />
				<FooterAddress address={address} />
				<FooterSocial social={social} copyRights={copyRights} />
			</div>
		</footer>
	);
};

export default Footer;
