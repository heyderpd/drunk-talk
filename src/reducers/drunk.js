const TO_ALL = 'ALL'

const initialState = {
  speak: '...',
  listen: {}
}

export default DRUNK_NAME => {
  return function drunkReducer (state = initialState, action = {}) {
    console.log(action)
    switch (action.type) {
      case TO_ALL:
        return action.from !== DRUNK_NAME
          ? { ...state, listen: {
              from: action.from,
              message: action.payload
            }}
          : { ...state, speak: action.payload }

      case DRUNK_NAME:
        return { ...state, listen: {
            from: action.from,
            message: action.payload
          }}

      default:
        return action.from === DRUNK_NAME
          ? { ...state, speak: action.payload }
          : state
    }
  }
}
