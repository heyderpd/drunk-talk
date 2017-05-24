import DICT from 'dictany'
import tendentious from 'random-tendentious'

export const time = tendentious({ l: [1400, 2200] })

const coin = () => Math.random() >= 0.5

export const callAll = () => Math.random() <= 0.2

const hi = 'Hi.'
const hello = 'Hello!'
const ya = 'Ya...'
const ok = 'ok!'
const mario = 'I am Mario!'
const luigi = 'Oh Luigi!'
const pasta = 'Mamma mia!'
const gusta = 'Me gusta.'

const DictResponse = DICT({
  [hi]:     () => coin() ? hello : ya,

  [hello]:  () => coin() ? ya : ok,

  [ya]:     () => coin() ? luigi : mario,

  [ok]:     () => coin() ? pasta : luigi,

  [mario]:  () => coin() ? luigi : hi,

  [luigi]:  () => coin() ? gusta : pasta,

  [pasta]:  () => gusta,

  'DEFAULT': () => '...'
})

export const drunkDictionary = message => DictResponse(message || '')()
