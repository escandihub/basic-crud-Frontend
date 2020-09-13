import base from "./base"

export function fiestas() {
  return new Promise((response, reject) => {
    base().get('/party').then(function (res) {
      response(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function newFiestas(fiesta) {
  return new Promise((response, reject) => {
    base().post('/party', fiesta).then(function (res) {
      response(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}
export function EditFiestas(fiesta, id) {
  console.log(id);
  return new Promise((response, reject) => {
    base().put( `/party/${id}`, fiesta).then(function (res) {
      response(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

