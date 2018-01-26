import React, {Component} from 'react'

class Explore extends Component{
	render(){
		return(
			<div className="explore-page">
				<h3>Explore Airbnb</h3>
				<div className="explore">
					<img src="http://lorempixel.com/200/300/cats" />
					<span>Homes</span>
				</div>
				<div className="explore">
					<img src="http://lorempixel.com/200/300/cats" />
					<span>Experiences</span>
				</div>
				<div className="explore">
					<img src="http://lorempixel.com/200/300/cats" />
					<span>Restaurants</span>
				</div>
			</div>
		)
	}
}

export default Explore;