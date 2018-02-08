import React from 'react';
import './people-list.css';
import Person from '../Person/person';

function PeopleList(props) {
	return (
		<div className="people">
			<div className="may-know">People you may know</div>
			<div className="people-list">
			{props.people.map((person)=>{
				return <Person person={person} key={person.id}/>
			})}
			</div>
		</div>
	)
}
export default PeopleList;

