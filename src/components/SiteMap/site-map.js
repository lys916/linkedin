import React from 'react';
import './site-map.css';

let siteLinks = ['About', 'Help Center', 'Privacy & terms', 'Advertising', 'Business Services', 'Get the LinkedIn app', 'More'];

function SiteMap(props) {
	return (
		<div className="site-map">
			{siteLinks.map((link)=>{
				return <div className="site-link">{link}</div>
			})}
			<div className="corporation"><b>LinkedIn</b> LinkedIn Corporation 2018</div>
		</div>
	)
}
export default SiteMap;

