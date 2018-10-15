import md5 from 'blueimp-md5'
// import qs from 'qs'
// import memory from './memory.js'
const AppKey = 'joker'

const setNonce = () => {
  const data = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  ]
  let result = ''
  for (let j = 0; j < 500; j++) {
    result = ''
    for (let i = 0; i < 9; i++) {
      let r = Math.floor(Math.random() * 16)
      result += data[r]
    }
  }
  return result
}
const sortOptions = (url, options = {}) => {
  const arr = []
  for (let o in options) {
    if (typeof o === 'object') {
      arr.push(o.trim())
    } else {
      arr.push(o.trim())
    }
  }
  arr.sort()
  let objParameter = {}
  let code = ''
  if (url.indexOf('http://') === 0) {
    code += url.slice(url.indexOf('/', 7)) + '?AppKey=' + AppKey
  } else if (url.indexOf('https://') === 0) {
    code += url.slice(url.indexOf('/', 8)) + '?AppKey=' + AppKey
  } else {
    code = url + '?AppKey=' + AppKey
  }
  for (let i = 0; i < arr.length; i++) {
    let _this = arr[i]
    objParameter[_this] = options[_this]
    code += '&' + _this + '=' + options[_this]
  }
  let nonce = setNonce()
  objParameter['nonce'] = nonce
  code += '&nonce=' + nonce
  objParameter['xyz'] = md5(code)
  return {
    objParameter: objParameter
  }
}

export default function({ $axios }) {
  $axios.onRequest(config => {
    console.log('$axios')
    const url = config.url
    if (config.method === 'post') {
      config.data = sortOptions(url, config.data).objParameter
    }
    if (config.method === 'get') {
      config.params = sortOptions(url, config.params).objParameter
    }
  })
}
