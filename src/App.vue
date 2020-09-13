<template>
  <div>
    <notification />
    <div class="container is-fluid mt-6" id="size">
      <article class="panel is-primary">
        <p class="panel-heading">
          Fiestas
        </p>
        <p class="panel-tabs">
          <router-link to="/" tag="a">Fiesta</router-link>
          <router-link to="/amigos" tag="a">Amigos</router-link>
        </p>
        <router-view />
      </article>
    </div>
  </div>
</template>

<script>
import home from "@/components/home";
import notification from "@/components/notification";
export default {
  components: {
    home,
    notification,
  },
};
</script>
<style lang="scss">
.panel-tabs a.router-link-exact-active {
  border-bottom-color: #8a4d76;
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
