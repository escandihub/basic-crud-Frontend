<template>
  <div id="size">
    <div class="columns is-center is-desktop head">
      <div class="column">
        Nombre
      </div>
      <div class="column">
        Email
      </div>
      <div class="column">
        Mood
      </div>
      <div class="column">
        Phone
      </div>
    </div>
    <div class="columns is-center is-desktop" v-for="amigo in amigos" :key="amigo.id">
      <div class="column">
        {{ amigo.name }}
      </div>
      <div class="column">
        {{ amigo.email }}
      </div>
      <div class="column">
        {{ amigo.mood }}
      </div>
      <div class="column">
        {{ amigo.phone }}
      </div>
      <p class="divider">________________________________________________________</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "amigos",
  computed: {
    amigos() {
      return this.$store.getters.getterAmigos;
    },
  },
    created() {
      this.$store.dispatch('FETCH_AMIGOS')
    }
};
</script>

<style>
.table {
  margin-left: auto;
  margin-right: auto;
  /* display: flex; */
  justify-content: center;
}
.head{
  display: none;
}
/* mobile first*/
#size {
  padding: 4%;
  width: 92%;
}
.column:nth-child(odd){
  background-color: whitesmoke;
}
.divider{
  display: block;
  color: purple !important;
  overflow: hidden;
}
/* big screen */
@media screen and (min-width: 960px) {
  #size {
    padding: 1%;
    width: 92%;
  }
  .column:nth-child(odd){ 
    background-color: #EFF0EB;
  }
  .divider{
    display: none;
  }
  .head{
    display: block;
  }
}
</style>
