// let's go!
import React from 'react'
import {render} from 'react-dom'

//import css



//import Components
import App from './containers/app.jsx'
import Home from './containers/home.jsx'
import SearchContainer from './containers/SearchContainer.jsx'
import Movie from './components/movie.jsx'


// import Single from './components/single.jsx'
// import PhotoGrid from './components/photoGrid.jsx'

//import react touter deps

import {Router, Route, IndexRoute, hashHistory} from "react-router"


import {Provider} from 'react-redux'
import store, {history} from './store.jsx'

import Details from './components/details.jsx'



const router =(
	

	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="/movie/:movieId" component={Details}> </Route>
			</Route>
		</Router>
	</Provider>
	
)

render(router, document.getElementById('root'));

// Asi deberia estar la constante router
// <Provider store={store}>
// 		<Router history={history}>
// 			<Route path='/' component={App}>
// 				<IndexRoute component={Home}></IndexRoute>
				
// 			</Route>
// 		</Router>
		
// 	</Provider>