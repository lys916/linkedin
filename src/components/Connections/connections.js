import React from 'react';
import './connections.css';

function Connections(props) {
	let preview = props.connections.slice(0, 4);
	return (
		<div className="connections">
			<div className="total-connections">
				{props.connections.length}
			</div>
			<p><b>Your connections</b><br/><span>See all</span></p>

			<div className="preview-connections">

			{preview.map((connect)=>{
				return (
					<div className="frame">
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
			<p><b>Add personal contacts</b></p>
			<form>
				<input placeholder="Email"></input>
				<div className="continue">Continue</div>
				<p >More options</p>
				<div className="lineAccross"></div>
				<p class="message">We'll import your address book to suggest connections. Learn more</p>
			</form>
		</div>
	);
}

export default Connections;