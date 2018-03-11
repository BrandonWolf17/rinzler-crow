import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';


import NavBar from './NavBar';
import SideMenu from './SideMenu';
import ListEntries from '../listEntries';

class Dashboard extends Component {

  render () {

    return (
      <div>
        <div className="clearfix">

          <div className="left-content sidemenu-wrapper">
            <SideMenu/>
          </div>

          <div className="left-content main-container-wrapper">
            <NavBar/>
            <div className="container">
              <Redirect to="/dashboard/list"/>
              <Route
                exact path="/dashboard/list"
                render={() => (                  
                  <ListEntries/>                                   
                )}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default Dashboard;
