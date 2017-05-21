import { combineReducers } from 'redux'

import drunk from './drunk'

const constantReducer = (state = {}) => state

export default combineReducers({
  drunkA: drunk('drunkA'),
  drunkB: drunk('drunkB'),
  drunkC: drunk('drunkC')
})
