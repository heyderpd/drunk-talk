import { combineReducers } from 'redux'

import drunk from './drunk'

const constantReducer = (state = {}) => state

export default combineReducers({
  Maria: drunk('Maria'),
  Enzo: drunk('Enzo'),
  Jose: drunk('Jose')
})
