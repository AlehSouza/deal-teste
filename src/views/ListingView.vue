<template>
  <div class="home">
    <UsersComponent v-for="(user, i) in users" v-bind:key="i" :user="user"/>
  </div>
</template>

<script>
// @ is an alias to /src
import UsersComponent from '@/components/UsersComponent.vue';

import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    UsersComponent,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      axios.get('http://192.168.0.126:8085/api/usuarios').then((resp) => {
        this.users = resp.data.usuarios;
        console.log(this.users);
      });
    },
  },
  beforeMount() {
    this.getUsers();
  },
};
</script>
<style scoped>
  .home {
    padding: 80px;
  }
</style>
