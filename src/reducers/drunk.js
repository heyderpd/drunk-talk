import { TO_ALL, TALK } from '../components/drunkLogic'

const initialState = {
  think: false,
  speak: [],
  listen: {}
}

export default DRUNK_NAME => {
  return function drunkReducer (state = initialState, action = {}) {
    const { type, msg, from, to } = action
    if (type === TALK) {
      if (!state.think && from !== DRUNK_NAME && (to === TO_ALL || to === DRUNK_NAME)) {
        return {
          ...state,
          listen: {
            from: from,
            message: msg
          },
          think: true
        }
      }
      if (from === DRUNK_NAME) {
        return {
          ...state,
          listen: {},
          speak: [
            ...state.speak,
            `@${to}: ${msg}` ],
          think: false
        }
      }
    }
    return state
  }
}
