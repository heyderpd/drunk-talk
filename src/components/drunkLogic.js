export const mapDispatchToProps = NAME => dispatch => ({
  talkTo: (TALK, TO) => dispatch(talk(NAME, TALK, TO)),
})

export const mapStateToProps = NAME => state => ({
  speak: state[NAME].speak,
  listen: state[NAME].listen
})

export const talk = (NAME, TALK, TO) => ({
  type: TO,
  payload: TALK,
  from: NAME
})

export const think = (listen, talkTo) => {
  const { from, message } = listen
  let reply
  if (message) {
    switch (message) {
      case 'debug':
        reply = 'debug again!'; break

      case 'debug again!':
        reply = 'no! debug you!'; break

      case 'no! debug you!':
        reply = 'mama mia!'; break

      default:
        reply = ''
    }
    console.log('hear!', from, message, reply)
    setTimeout(
      () => {
        talkTo(reply, from)
      }, 1000)
  }
}
