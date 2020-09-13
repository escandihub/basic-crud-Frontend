<template>
  <div class="modal" id="activar">
    <div class="modal-card" style="width: 300px;">
      <section class="modal-card-body">
        <div class="content">
          <div class="field">
            <div class="control">
              <input
                type="text"
                class="input is-primary mt-2"
                placeholder="Nombre de la fiesta"
                v-model="fiesta.name"
              />
            </div>
            <div class="control">
              <input
                type="text"
                class="input is-primary mt-2"
                placeholder="Objetivo"
                v-model="fiesta.objective"
              />
            </div>
            <div class="control">
              <input
                type="text"
                class="input is-primary mt-2"
                placeholder="¿Donde va hacer?"
                v-model="fiesta.location"
              />
            </div>
            <div class="control">
              <input
                type="date"
                class="input is-primary mt-2"
                placeholder="Fecha"
                v-model="fiesta.date"
              />
            </div>
            <div class="control">
              <input
                type="number"
                class="input is-primary mt-2"
                placeholder="Numero de invitados"
                v-model="fiesta.number_guests"
              />
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="eho">Nueva Fiesta</button>
        <button class="button is-danger" @click="cerrar">Cerrar</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean | false,
  },
  name: "FormNewParty",
  data: () => {
    return {
      fiesta: {
        name: "",
        objective: "",
        location: "",
        date: "",
        number_guests: 0,
      },
    };
    noti: {
      isVisible: true;
      response: "Se guardo Correctamente";
    }
  },
  computed: {},
  watch: {
    show: function (newVal, old) {
      if (newVal == false) {
        document.getElementById("activar").className = "modal";
      } else {
        document.getElementById("activar").className = "modal is-active";
      }
    },
  },
  methods: {
    eho() {
      this.$store.dispatch("NEW_PARTY", this.fiesta);
      // this.$store.commit("SET_NOTIFY", this.noti);
      this.$emit("cerrar", true);
    },
    cerrar() {
      this.$emit("cerrar", true);
    },
  },
};
</script>

<style></style>
