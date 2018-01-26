import React, {Component} from 'react';

class Search extends Component{
	render(){
		return(
			<div className="bar">
				<h1 className="main">Airbnb</h1>
				<p className="tagline">Book unique homes and experiences all over the world.</p>
				<form className="search-form">
					<input type="text" name="search" placeholder="Try 'Orlando'" />
					<button>Search</button>
				</form>
			</div>
		)
	}
}

export default Search;