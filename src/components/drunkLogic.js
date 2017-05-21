import DICT from 'dictany'

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

const debug = 'debug'
const debug2 = 'debug again!'
const mario = 'mama mia!'

const DictResponse = DICT({
  [debug]: debug2,
  [debug2]: mario,
  'DEFAULT': '...' 
})

export const think = (listen, talkTo) => {
  const { from, message } = listen
  if (message && message !== '...') {
    let reply = DictResponse(message || '')
    console.log('hear!', from, message, reply)
    setTimeout(
      () => {
        talkTo(reply, from)
      }, 1000)
  }
}
