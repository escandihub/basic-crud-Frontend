<template>
  <div>
    <FormNewParty :show="mostrar" @cerrar="closeModal" />
    <FormEditParty
      :showEditar="editShow"
      @cerrarE="closeEdit"
      :fiesta="propFiesta"
    />
    <!-- <div class="panel-block"> -->
    <div class="columns mt-1">
      <div class="column is-three-quarters">
        <p class="control has-icons-left">
          <input class="input is-primary" type="text" placeholder="Buscar" />
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <div class="column level">
        <div class="level level-left">
          <div class="level-item">
            <button class="button is-primary is-light" @click="mostrar = true">
              <p class="mr-3">nuevo</p>
              <fa-icon icon="plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end layout -->
    <div v-for="fiesta in partys" :key="fiesta.id" class="ml-3 mr-4">
      <div class="columns is-mobile">
        <a class="column is-mobile" @click="editFiesta(fiesta)">
          <span class="panel-icon">
            <fa-icon icon="home" />
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          {{ fiesta.name }}
        </a>
        <div class="column is-mobile">
          <article class="message is-small">
            <div class="message-header">
              <p>We need ...</p>
              <button class="delete is-small" aria-label="delete"></button>
            </div>
            <div class="message-body">
              <ul>
                <li v-for="thing in fiesta.things" :key="thing.id">
                  {{thing.name}} - {{thing.amount}}
                </li>
              </ul>
              <button class="button is-link is-light is-rounded is-pulled-right" @click="lista(fiesta)">
                <fa-icon icon="plus" />
              </button>
            </div>
            <hr>
          </article>
        </div>
      </div>
    </div>
    <ListThings 
    :verThings="verModalThings"
    :fiesta="propFiesta"
    @closeThings="verModalThings = false"
    />
  </div>
</template>

<script>
import FormNewParty from "@/components/FormNewParty";
import FormEditParty from "@/components/FormEditParty";
import ListThings from "@/components/ListThings";
export default {
  data: () => {
    return {
      mostrar: false,
      editShow: false,
      verModalThings: false,
      propFiesta: "",
    };
  },
  components: {
    FormNewParty,
    FormEditParty,
    ListThings,
  },
  name: "fiestas",
  computed: {
    partys() {
      return this.$store.getters.fiestas;
    },
  },
  created() {
    this.$store.dispatch("fetch_party");
  },
  methods: {
    openModal() {
      this.mostrar = true;
    },
    closeModal(e) {
      this.mostrar = false;
    },
    closeEdit(e) {
      this.editShow = false;
    },
    editFiesta(e) {
      this.propFiesta = e;
      this.editShow = true;
    },

    lista(f){
      this.propFiesta = f
      this.verModalThings = true
    }
  },
};
</script>

<style></style>
