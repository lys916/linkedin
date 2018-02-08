import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import peopleData from './people-data';
import PeopleList from './components/PeopleList/people-list';
import Connectons from './components/Connections/connections';
import Navbar from './components/Navbar/navbar';
import Ads from './components/Ads/ads';
import SiteMap from './components/SiteMap/site-map';

let connections = peopleData.filter((connect)=>{
    return connect.connected === true;
});

let people = peopleData.filter((connect)=>{
    return connect.connected === false;
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Navbar />
        </div>
        <div className="wrapper">
          <div className="top-ad"><span>Need a new phone system??</span> - G12 Hosted PBX, Award winning customer care, fast porting and deployment</div>
          <div className="content"> 
              <Connectons connections={connections}/>
              <div>
                <div className="pending">
                  <div className="no-pending">No pending inviations</div>
                  <div className="manage-all">Manage all</div>
                </div>
                <PeopleList className="people-component" people={people}/>
              </div>
              <div>
                <Ads />
                <SiteMap />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
