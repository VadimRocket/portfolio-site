import React, { Component } from 'react';
import  { Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

const initialState = {};

class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	render() {
    return (
      <div className="app">
       
        <NavBar />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          component={Home}  
        />
        <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
        <Route path={`${process.env.PUBLIC_URL}/contacts`} component={Contacts}/>
      
      </div>
    );
 }
}
export default App;