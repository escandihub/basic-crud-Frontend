// import { Model, Collection } from 'vue-mc'

class party extends Model {
  defaults() {
    return {
      name: null,
      objective: null,
      location: null,
      date: null,
      date: Number
    }
  }

  // Atributos y mutaciones
  mutations() {
    return {
      id: (id) => Number(id) || null,
      objective: String,
      location: String,
      date: String,
      date: String,
    }
  }
}