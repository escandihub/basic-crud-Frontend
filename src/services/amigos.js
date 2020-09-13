import base from "./base"

export function getAmigos() {
  return new Promise((response, reject) => {
    base().get('/friends').then(res => {
      response(res.data)
    }).catch(error => {
      reject(error)
    })
  })
}

export function nuevoAmigos(amigo) {
  return new Promise((response, reject) => {
    base().post('/friends', amigo).then(res => {
      response(res)
    }).catch(error => {
      reject(error)
    })
  })
}

