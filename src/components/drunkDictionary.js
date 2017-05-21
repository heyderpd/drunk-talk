import DICT from 'dictany'
import tendentious from 'random-tendentious'

export const time = tendentious({ l: [3000, 5000] })

const coin = () => Math.random() >= 0.5

const hi = 'hi.'
const hello = 'hello!'
const ya = 'ya...'
const mario = 'mama mia!'
const luid = 'oh Luid!'
const gusta = 'me gusta.'

const DictResponse = DICT({
  [hi]:     () => coin() ? hi : hello,
  
  [hello]:  () => coin() ? ya : mario,
  
  [ya]:     () => coin() ? luid : gusta,

  [gusta]:  () => mario,
  
  'DEFAULT': () => '...' 
})

export const drunkDictionary = message => DictResponse(message || '')
