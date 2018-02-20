import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 
import './NavBar.css';

const initialState = {showDropDown: false };

class NavBar extends Component {
	constructor() {
		super();
		this.state = initialState;
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({showDropDown: !this.state.showDropDown});
	}

	render() {
		const dropdown = this.state.showDropDown ? '' : ' hide';
		const hamburger = { backgroundImage: 'url(./assets/hamburger.png)'}; 		
		
		return (
			<nav className="navmenu">
				<NavLink to={`${process.env.PUBLIC_URL}/`}>
				   <h2 className="navmenu__title">Резюме</h2>
				</NavLink>
				<button className="hamburger" onClick={() => this.handleClick()} style={hamburger} />
				<ul className={`navmenu__list${dropdown}`}>
					<li>
						<NavLink activeClassName="active"
						 className="navmenu__link" to={`${process.env.PUBLIC_URL}/about`}>
						 	Обо мне 
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active"
						 className="navmenu__link" to={`${process.env.PUBLIC_URL}/projects`}>
						 	Проекты
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active"
						 className="navmenu__link" to={`${process.env.PUBLIC_URL}/contact`}>
						 	Контакты
						</NavLink>
					</li>
					<li>
						<a 
						 className="navmenu__link" href="https://url_path" target="_blank" rel="noreferrer noopener">
						 	Резюме
						</a>
					</li>		
				</ul>	
			</nav>
		); 		
	}
}

export default NavBar;