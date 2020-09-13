<template>
  <div class="modal" id="activarE">
    <div class="modal-card" style="width: 300px;">
      <section class="modal-card-body">
        <div class="content">
          <div class="field">
            <div class="control">
              <input
                type="text"
                class="input is-primary mt-2"
                :placeholder="fiesta.name"
                v-model="amigo.name"
              />
            </div>
            <div class="control">
              <input
                type="text"
                class="input is-primary mt-2"
                placeholder="Objetivo"
                v-model="amigo.email"
              />
            </div>
            <div class="control">
              <input
                type="text"
                class="input is-primary mt-2"
                placeholder="¿Donde va hacer?"
                v-model="amigo.mood"
              />
            </div>
            <div class="control">
              <input
                type="date"
                class="input is-primary mt-2"
                placeholder="Fecha"
                v-model="amigo.phone"
              />
            </div>∆
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="updateParty">
          Actualizar
        </button>
        <button class="button is-danger" @click="cerrar">Cerrar</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    amigo: "",
    mostrarFromAmigos: Boolean | false,
  },
  methods: {
    cerrar() {
      this.$emit("cerrarE", false);
    },
    updateParty() {
      this.$store
        .dispatch("EDIT_FIESTA", this.fiesta)
        .then((reponse) => {
          console.log(reponse);
          this.$emit("cerrarE", false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    mostrarFromAmigos: function (newVal, old) {
      if (newVal == false) {
        document.getElementById("activarE").className = "modal";
      } else {
        document.getElementById("activarE").className = "modal is-active";
      }
    },
  },
};
</script>

<style></style>
