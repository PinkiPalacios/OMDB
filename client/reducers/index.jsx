import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import posts from './posts.jsx';
import comments from './comments.jsx'
import movies from './movies.jsx'

const rootReducer = combineReducers({movies,posts, routing: routerReducer})
export default rootReducer;