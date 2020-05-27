import {combineReducers} from 'redux'
import filtringReducer from './filtringReducer'
import appsReducer from './appsReducer'
import authReducer from './authReducer'

export default combineReducers({
    apps:appsReducer,
    filtring:filtringReducer,
    auth:authReducer
})

