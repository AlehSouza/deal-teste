<template>
  <div class="home">
    <h1>Listagem de Usuários</h1>
    <br>
    <UsersTable :users="users"/>
  </div>
</template>

<script>
// @ is an alias to /src
import UsersTable from '@/components/UsersTable.vue';

import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    UsersTable,
  },
  data() {
    return {
      // Usuário default pra exemplo
      users: [
        {
          nome: 'Usuario',
          sobrenome: 'Teste',
          data_nascimento: '01/01/2001',
          email: 'usuario.teste@email.com',
          sexo: 'M',
        },
      ],
    };
  },
  methods: {
    getUsers() {
      axios.get('http://192.168.0.126:8085/api/usuarios').then((resp) => {
        this.users = resp.data.usuarios;
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
    height: 84vh;
    color: white;
    background-color: #35a9e7;
  }
</style>
