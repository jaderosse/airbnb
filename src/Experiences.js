import React, {Component} from 'react'

class Experiences extends Component{
	render(){
		return(
			<div className="experiences">
				<img className="nature" src="http://lorempixel.com/200/300/nature" />
				<div>
					<p className="caps">HISTORY - PARIS</p>
					<p className="title"><strong>Paris' Best Kept Secrets Tour</strong></p>
					<p className="price">$63 per person</p>
					<img className="stars" src="https://i.imgur.com/GXZyhtV.png" />
				</div>
			</div>
		)
	}
}

export default Experiences;