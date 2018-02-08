import React from 'react';
import './person.css';
import styled from 'styled-components';

function Person(props) {

return (
	<div className="person">

				<img src={props.person.imageUrl} alt="img" />

		<div className="name">{props.person.username}</div>
		<div className="occupation">{props.person.occupation}</div>
		<div className="connect" onClick={()=>{props.handleConnect(props.person.id)}}>{props.buttonText}</div>
	</div>
);
}

export default Person;