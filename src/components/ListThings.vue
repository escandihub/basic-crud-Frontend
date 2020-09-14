<template>
  <div class="modal" id="activarCosas">
    <div class="modal-background"></div>
    <div class="modal-content">
      <section class="modal-card-body">
        <!-- Content ... -->

        <article class="panel is-link">
          <p class="panel-heading">
            Nombre de la Fiesta: {{ fiesta.name }}
            <button class="delete position" aria-label="close" @click="cerrarTio"></button>
          </p>

          <div class="panel-block columns ml-1">
            <div column>
              <p class="control has-icons-left">
                <input
                  class="input is-primary"
                  type="text"
                  placeholder="Agregar cosa"
                  v-model="thing.name"
                />
                <span class="icon is-left">
                  <fa-icon icon="search" />
                </span>
              </p>
            </div>
            <div class="column">
              <input class="input is-primary" type="number" placeholder="2" v-model="thing.amount"/>
            </div>
            <div class="column">
              <button class="button is-primary" @click="agregar(thing, fiesta.id)">
                <fa-icon icon="plus"></fa-icon>
              </button>
            </div>
          </div>
          <a class="panel-block is-active" v-for="item in cosas" :key="item.id">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{ item.name }} - {{ item.amount }}
          </a>
          <!-- <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              jgthms.github.io
            </a> -->
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thing: {
        name: '',
        amount: 0
      }
    }
  },
  props: {
    fiesta: {
      type: "",
      default: 0,
    },
    verThings: Boolean | false,
  },
  computed: {
    cosas() {
      return this.$store.getters.getCosas;
    },
  },
  watch: {
    verThings(newValue, oldValue) {
      if (newValue == false) {
        document.getElementById("activarCosas").className = "modal";
      } else {
        // aquí vamos a despachar del get de las cosas de la fiesta
        this.$store.dispatch("FETCH_THINGS", this.fiesta.id)
        document.getElementById("activarCosas").className = "modal is-active";
      }
    },
  },
  methods: {
    agregar(thing, id) {
      thing.party_id = this.fiesta.id
      this.$store.dispatch('UPDATE_THINGS', thing)
      this.$store.dispatch('NEW_THING', thing)
      this.thing = {}
    },
    cerrarTio() {
      this.$emit("closeThings", false);
    },
  },
};
</script>

<style>
.position {
  float: right;
}
</style>
