import {combineReducers} from 'redux'
import {user} from './user'
import {chatters} from './chater'


const rootReducer = combineReducers({user,chatters})

export default rootReducer