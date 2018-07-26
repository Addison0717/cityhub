import * as request from 'superagent'
import {baseUrl} from '../constants'
// import {logout} from './users'
// import {isExpired} from '../jwt'


// Get all events from server
export const getEvents = () => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(updateEvents(result.body)))
    .catch(err => console.error(err))
}

// Dispatch action to store
export const UPDATE_EVENTS = 'UPDATE_EVENTS'
const updateEvents = events => ({
  type: UPDATE_EVENTS,
  payload: events
})

