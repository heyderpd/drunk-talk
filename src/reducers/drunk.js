const TO_ALL = 'ALL'

const initialState = {
  think: false,
  speak: '...',
  listen: {}
}

export default DRUNK_NAME => {
  return function drunkReducer (state = initialState, action = {}) {
    console.log(state.think, state, action)
    switch (action.to) {
      case TO_ALL:
      case DRUNK_NAME:
        if (action.from !== DRUNK_NAME) {
          if (state.think === false) {
            return {
                ...state,
                listen: {
                  from: action.from,
                  message: action.talk
                },
                think: true
              }

          } else {
            return state
          }
        }
      
      default:
        return { ...state, speak: action.talk, think: false }
    }
  }
}
