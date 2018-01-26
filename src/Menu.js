import React, {Component} from 'react';
import Dropdown from 'react-dropdown';

const options = [
	{value: 'Home', label: 'Home'},
	{value: 'Airbnb for Work', label: 'Airbnb for Work'},
	{value: 'Host a home', label: 'Host a home'},
	{value: 'Host an experience', label: 'Host an experience'},
	{value: 'Sign Up', label: 'Sign Up'},
	{value: 'Log In', label: 'Log In'},
]

class Menu extends Component{
	render(){
		return(
			<nav>
				<p className="nav-link">Become a host</p>
				<p className="nav-link">Help</p>
				<p className="nav-link">Signup</p>
				<p className="nav-link">Login</p>
				<img className="logo" src="https://i.imgur.com/aM9YzNB.png" />
				<Dropdown options={options} placeholder="." />

			</nav>
		)
	}
}

export default Menu;