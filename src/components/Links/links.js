import React from 'react';
import './links.css';

function Links(props) {
	return (
		<div className="links">
			<div className="link home">
				<i class="icon fas fa-home"></i>
				<div>Home</div>
			</div>
			<div className="link network">
				<i className="icon fas fa-users"></i>
				<div>My Network</div>
			</div>
			<div className="link jobs">
				<i className="icon fas fa-suitcase"></i>
				<div>Jobs</div>
			</div>
			<div className="link messaging">
				<i className="icon fas fa-comments"></i>
				<div>Messaging</div>
			</div>
			<div className="link notifications">
				<i className="icon fas fa-bell"></i>
				<div>Notifications</div>
			</div>
			<div className="link me">
				<i className="icon fas fa-user-circle"></i>
				<div>Me</div>
			</div>
			<div className="link work">
				<i className="icon fas fa-building"></i>
				<div>Work</div>
			</div>
			<div className="link work">
				<div className="premium">Free Upgrad <br/> to Premium</div>
			</div>
		</div>
	)
}
export default Links;

