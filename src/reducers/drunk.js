import { TO_ALL, TALK } from '../components/drunkLogic'

const initialState = {
  think: false,
  speak: [],
  listen: {}
}

export default DRUNK_NAME => {
  return function drunkReducer (state = initialState, action = {}) {
    const { type, msg, from, to } = action
    switch (type) {
      case TALK:
        if (from === DRUNK_NAME) {
          return {
            ...state,
            listen: {},
            speak: [
              ...state.speak,
              `@${to}: ${msg}` ],
            think: false
          }
        } else if (!state.think && [TO_ALL, DRUNK_NAME].indexOf(to) >= 0) {
          return {
            ...state,
            listen: {
              from: from,
              message: msg
            },
            think: true
          }
        }

      default:
        return state
    }
  }
}
