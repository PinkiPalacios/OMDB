import React from 'react'
import {Link} from 'react-router'

class Main extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		console.log("eee",this)

		return (
		<div>
			<h1>
				<Link to='/'>OMDB</Link>
				

			</h1>	
			{this.props.children}
		</div>)
	}
}

export default Main