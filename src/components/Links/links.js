import React from 'react';
import './links.css';
import links from './links-data';

function Links(props) {
	return (
		<div className="links">
			{links.map((link)=>{
				return (
					<div className="link">
						<i className={"icon fas "+link.icon}></i>
						<div>{link.name}</div>
					</div>
				);
			})}
			<div className="link">
				<div className="premium">Free Upgrade <br/> to Premium</div>
			</div>
		</div>
	)
}
export default Links;

