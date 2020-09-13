<template>
  <div class="columns mt-2">
    <div class="columns is-centered">
      <div class="column is-narrow">
        <table class="table">
          <thead>
            <tr>
              <th><abbr title="Position">Nombre</abbr></th>
              <th>Email</th>
              <th><abbr title="Played">Mood</abbr></th>
              <th><abbr title="Won">Phone</abbr></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="amigo in amigos" :key="amigo.id">
              <th> {{ amigo.name }}</th>
              <th> {{ amigo.email }}</th>
              <th> {{ amigo.mood }}</th>
              <th> {{ amigo.phone }}</th>
            </tr>
          </tbody>
        </table>
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
  width: 100%;
}
@media screen and (min-width: 960px) {
  #size {
    width: 70%;
  }
}
</style>
