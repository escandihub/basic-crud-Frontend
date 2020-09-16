import friend from "../store/friend";
import base from "./base"

export function getAmigos() {
  return new Promise((response, reject) => {
    base().get('/friends').then(res => {
      response(res.data)
    }).catch(error => {
      reject(error)
    });
  });
}

export function nuevoAmigos(amigo) {
  return new Promise((response, reject) => {
    base().post('/friends', amigo).then(res => {
      response(res);
    }).catch(error => {
      reject(error);
    });
  });
}
export function deleteFriendService(friend){
  return new Promise( ( response, reject ) => {
    base().delete('/friends/'+friend.id).then( res => {
      response(res);
    }).catch( error => {
      reject(error);
    });
  });
}

export function updateFriendService(friend){
  console.log(friend);
  return new Promise(( response, reject) => {
    base().put(`/friends/${friend.id}`, friend).then( res => {
      response(res)
    }).catch( error => {
      reject(error)
    })
  })
}
