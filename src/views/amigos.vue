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
      <div class="column">
        We should?
      </div>
    </div>
    <div
      class="columns is-center is-desktop"
      v-for="amigo in amigos"
      :key="amigo.id"
    >
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
      <div class="column">
        <div class="select" v-if="amigo.party_id == null">
          <select name="partys" id="partys" @change="enableInvite(amigo, $event)">
            <option value="">Parties?</option>
            <option :value="party.id" v-for="party in parties" :key="party.id">
              {{ party.name }}
            </option>
          </select>
        </div>
        <div v-if="amigo.party_id && amigo.party">
          <span class="tag is-primary"><b>{{amigo.party.name}}</b></span>
          <span class="tag is-primary is-light">Invited</span>
        </div>
        <button
          v-if="isSelected && selectedFriend.id == amigo.id"
          class="button is-success"
          @click="inviteFriend(amigo)"
        >
          Invite
        </button>
        <button
          v-if="!isSelected"
          class="button is-danger"
          @click="deleteFriend(amigo)"
        >
          Delete
        </button>
      </div>
      <p class="divider">
        ________________________________________________________
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isSelected: false,
      selectedFriend: null,
      fiestaIdentificado: 0,
    };
  },
  name: "amigos",
  computed: {
    amigos() {
      return this.$store.getters.getterAmigos;
    },
    parties() {
      return this.$store.getters.fiestas;
    },
  },
  render() {},
  methods: {
    enableInvite(friend, fiesta) {
      this.fiestaIdentificado = fiesta.target.value
      this.selectedFriend = friend;
      return (this.isSelected = true);
    },
    inviteFriend(friend) {
      friend.party_id = this.fiestaIdentificado;
      this.$store.dispatch("UPDATE_FRIEND_PARTY", friend).then(resp =>{
        this.$store.dispatch("FETCH_AMIGOS");
      }).catch(err=>{
        console.log(err);
      });
      this.selectedFriend = null;
      this.isSelected = false;
    },
    deleteFriend(id) {
      this.$store
        .dispatch("DELETE_FRIEND", id)
        .then((response) => {
          return this.$store.getters.getterAmigos;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.$store.dispatch("fetch_party");
    this.$store.dispatch("FETCH_AMIGOS");
  },
};
</script>

<style>
.table {
  margin-left: auto;
  margin-right: auto;
  /* display: flex; */
  justify-content: center;
}
.head {
  display: none;
}
/* mobile first*/
#size {
  padding: 4%;
  width: 92%;
}
.column:nth-child(odd) {
  background-color: whitesmoke;
}
.divider {
  display: block;
  color: purple !important;
  overflow: hidden;
}
/* big screen */
@media screen and (min-width: 960px) {
  #size {
    padding: 5%;
    width: 100%;
  }
  .column:nth-child(odd) {
    background-color: #eff0eb;
  }
  .divider {
    display: none;
  }
  .head {
    display: block;
  }
}
</style>
