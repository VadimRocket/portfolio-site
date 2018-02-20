import React, { Component } from 'react';
import  { Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';




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
      
      </div>
    );
 }
}
export default App;