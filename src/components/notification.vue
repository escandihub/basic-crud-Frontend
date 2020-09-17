<template>
  <div class="notification is-success" v-if="notif.isVisible">
    <button class="delete"></button>
    {{ notif.mensaje }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      timeout: null,
    };
  },
  beforeUpdate() {
    this.timeout = setTimeout(() => {
      this.deleteNotification();
    }, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: {
    notif() {
      return this.$store.getters.notificar;
    },
  },
  methods: mapActions(["deleteNotification"]),
};
</script>

<style></style>
