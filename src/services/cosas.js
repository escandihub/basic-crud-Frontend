import base from './base';

export function getThings() {
  return new Promise((response, reject) => {
    base().get('/things').then(res => {
      response(res)
    }).catch(err => {
      reject(err)
    })
  })
}