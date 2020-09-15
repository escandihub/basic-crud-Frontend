<template>
  <div id="size">
    <div class="columns is-center">
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
    <div class="columns is-center" v-for="amigo in amigos" :key="amigo.id">
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
#size {
  margin: 10px auto;
  width: 100%;
}
@media screen and (min-width: 960px) {
  #size {
    width: 70%;
  }
}
</style>
