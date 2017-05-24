import { time, callAll, drunkDictionary } from './drunkDictionary'

export const TALK = 'TALK'
export const TO_ALL = 'TO_ALL'

export const talk = (NAME, MSG, TO) => ({
  type: TALK,
  from: NAME,
  to: TO,
  msg: MSG
})

export const mapDispatchToProps = NAME => dispatch => ({
  talkTo: (TALK, TO) => dispatch(talk(NAME, TALK, TO)),
})

export const mapStateToProps = NAME => state => ({
  speak: state[NAME].speak,
  listen: state[NAME].listen
})

export const think = (listen, talkTo) => {
  const { from, message } = listen
  if (message && message !== '...') {
    setTimeout(
      () => {
        talkTo(
          drunkDictionary(message),
          callAll() ? TO_ALL : from)
      }, time())
  }
}
