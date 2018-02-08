import React from 'react';
import './people-list.css';
import Person from '../Person/person';

function PeopleList(props) {

	let toView = [];
	let buttonText = '';

	if(props.view === 'people'){
		buttonText = 'Connect';
		toView = props.people.filter((person)=>{
			return person.connected === false;
		});
	}else if(props.view === 'connections'){
		buttonText = 'Disconnect'
		toView = props.people.filter((person)=>{
			return person.connected === true;
		});
	}
	console.log(toView);
	return (
		<div className="people">
			<div className="may-know">{props.viewTitle}</div>
			<div className="people-list">
			{toView.map((person)=>{
				return <Person person={person} key={person.id} handleConnect={props.handleConnect} buttonText={buttonText}/>
			})}
			</div>
		</div>
	)
}
export default PeopleList;

