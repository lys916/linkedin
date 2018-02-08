import React from 'react';
import './ads.css';
import adList from './ad-data';

function Ads(props) {
	let ads = adList.slice(0, 3);
	return (
		<div className="ads">
			<div className="promoted">
				<p>Promoted</p>
				<span><i className="fas fa-ellipsis-h"></i></span>
			</div>
			{ads.map((ad)=>{
				return (
					<div key={ad.id} className="ad">
						<div className="logo">
							<img src={ad.logo} alt="img" />
						</div>
						<div className="description">
							<span><b>{ad.title}</b></span><br/>
							<span>{ad.description}</span>
						</div>
						<div className="arrow"><i className="fas fa-chevron-right"></i></div>
					</div>
				);
			})}
		</div>
	);
}

export default Ads;