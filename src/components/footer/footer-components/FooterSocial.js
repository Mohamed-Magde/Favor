import React from 'react';

const FooterSocial = ({ social, copyRights }) => {
	const { accessibility, policy, terms, title } = copyRights;
	return (
		<div className="footer-social">
			<div className="footer-social-icons">
				{social.map((item) => {
					const { id, icon } = item;
					return <i key={id} className={icon} />;
				})}
			</div>
			<div className="footer-social-copyrights">
				<div className="footer-social-copyrights-title">{title}</div>
				<div className="footer-social-copyrights-terms">{terms}</div>
				<div className="footer-social-copyrights-policy">{policy}</div>
				<div className="footer-social-copyrights-accessibility">{accessibility}</div>
			</div>
		</div>
	);
};

export default FooterSocial;
