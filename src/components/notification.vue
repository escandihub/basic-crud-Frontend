<template>
  <div class="notification is-success" v-show="false">
    <button class="delete"></button>
    {{ 'notif.mensaje' }}
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  created() {
    setTimeout(() => {
       
    })
  },
   computed: {
     notif(){
       
       return this.$store.getters.notificar
     }
   }
};
</script>

<style></style>
