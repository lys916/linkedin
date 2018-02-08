import React from 'react';
import './connections.css';

function Connections(props) {
	let connected = props.people.filter((person)=>{
		return person.connected === true;
	});
	let preview = connected.slice(0, 4);
	return (
		<div className="connections">
			<div className="total-connections">
				{connected.length}
			</div>
			<p><b>Your connections</b><br/><span onClick={()=>{props.changeView({view: 'connections', viewTitle: 'My connections'})}}>See all</span></p>

			<div className="preview-connections">

			{preview.map((connect)=>{
				return (
					<div key={connect.id} className="frame">
						<div className="crop">
							<img src={connect.imageUrl} alt="img" />
						</div>
					</div>
				);
			})}

			</div>
			<br/><br/>
			<div className="lineAccross"></div>
			<br/>
			<div className="find-people" onClick={()=>{props.changeView({view: 'people', viewTitle: 'People you may know'})}}>Find people</div>
			<br/>
			<p><b>Add personal contacts</b></p>
			<form>
				<input placeholder="Email"></input>
				<div className="continue">Continue</div>
				<p >More options</p>
				<div className="lineAccross"></div>
				<p className="message">We'll import your address book to suggest connections. Learn more</p>
			</form>
		</div>
	);
}

export default Connections;