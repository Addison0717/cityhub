// import {ADD_EVENT, UPDATE_EVENTS, UPDATE_EVENT} from '../actions/events'
import {USER_LOGOUT} from '../actions/users'
import {UPDATE_EVENTS} from '../actions/events'

// import update from 'immutability-helper'


export default (state = null, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null

    // Update all events reducer
    case UPDATE_EVENTS:
    // return payload.reduce((events, event) => {
    //   events[event.id] = event
    //   return events
    // }, {})
    return payload

    // Default 
    default:
      return state
  }
}
