import base from './base';

export function getThings(id_fiesta) {
  return new Promise((response, reject) => {
    base().get('/things',   {
      params: {
        idParty: id_fiesta
      }
    }).then(res => {
      response(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function addNewThing(thing, id){
  return new Promise((response, reject) => {
    base().post('/things', thing
    // {
    //   params: {
    //     idParty: id
    //   }
    // }
    ).then(res => {
      response(res)
    }).catch(error => {
      reject(error)
    })
  })
}