import React from 'react';
import './person.css';
import styled from 'styled-components';

function Person(props) {
return (
	<div className="person">
		<div className="frame">
			<div className="crop">
				<img src={props.person.imageUrl} alt="img" />
			</div>
		</div>
		<div className="name">{props.person.username}</div>
		<div className="occupation">{props.person.occupation}</div>
		<div className="connect">Connect</div>
	</div>
);
}

export default Person;