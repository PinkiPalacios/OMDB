import React from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreator from '../actions/actionCreator.jsx'


function mapStateToProps (state){
	return {
		state: state,

	}
}

function mapDispatchToProps (dispatch){
	return bindActionCreators(actionCreator,dispatch)
}



class Detail extends React.Component {
	constructor(props){
		super(props)
		this.componentWillMount=this.componentWillMount.bind(this)
	}

	componentWillMount (){
		console.log("ojoo", this.props.params.movieId)

		this.props.fetchPost0(this.props.params.movieId)	

	}

	render(){
		var peli= this.props.state.posts.movie
		console.log(this.props.state.posts.isFetching)
		if (this.props.state.posts.isFetching || !this.props.state.posts.movie){
			return (
				<div>loading</div>
				)
		}

		console.log(peli)
		
		return (
			<div>
				<img src={peli.Poster}/>
				<h3>{peli.Title}</h3>
				<h3>{peli.Director}</h3>
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
