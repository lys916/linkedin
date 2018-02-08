import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import peopleData from './people-data';
import PeopleList from './components/PeopleList/people-list';
import Connectons from './components/Connections/connections';
import Navbar from './components/Navbar/navbar';
import Ads from './components/Ads/ads';
import SiteMap from './components/SiteMap/site-map';

// let connections = peopleData.filter((connect)=>{
//     return connect.connected === true;
// });

// let people = peopleData.filter((connect)=>{
//     return connect.connected === false;
// });


class App extends Component {

  state = {people: peopleData, view: 'people', viewTitle: 'People you may know'};

  handleConnect = (id) => {
   let people = this.state.people;
   people.forEach((person)=>{
    if(person.id === id && person.connected === false) {
      person.connected = true;
    }else if(person.id === id && person.connected === true){
      person.connected = false;
    }
   });

   this.setState({people: people});
  }

  handleView = (data) => {
    this.setState({view: data.view, viewTitle: data.viewTitle});
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <Navbar />
        </div>
        <div className="wrapper">
          <div className="top-ad-parent">
            <div className="top-ad"><span>Need a new phone system??</span> - G12 Hosted PBX, Award winning customer care, fast porting and deployment</div>
          </div>
          <div className="content"> 
              <div className="content-left">
              <Connectons people={this.state.people} changeView={this.handleView}/>
              </div>
              <div>
                <div className="pending">
                  <div className="no-pending">No pending invitations</div>
                  <div className="manage-all">Manage all</div>
                </div>
                <PeopleList people={this.state.people} view={this.state.view} handleConnect={this.handleConnect} viewTitle={this.state.viewTitle}/>
              </div>
              <div className="content-right">
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
