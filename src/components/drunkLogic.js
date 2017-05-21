import { time, drunkDictionary } from './drunkDictionary'

export const mapDispatchToProps = NAME => dispatch => ({
  talkTo: (TALK, TO) => dispatch(talk(NAME, TALK, TO)),
})

export const mapStateToProps = NAME => state => ({
  speak: state[NAME].speak,
  listen: state[NAME].listen
})

export const talk = (NAME, TALK, TO) => ({
  type: 'talk',
  from: NAME,
  to: TO,
  talk: TALK
})

export const think = (listen, talkTo) => {
  const { from, message } = listen
  if (message && message !== '...') {
    const reply = drunkDictionary(message)()
    console.log('hear!', from, message, reply)

    setTimeout(
      () => {
        talkTo(reply, from)
      }, time())
  }
}
