<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="about">
    <h1>Cadastro de Usuário</h1>
    <form>
      <label z for="nome"> Nome </label>
      <input v-model="user.nome" required id="nome" type="text" placeholder="john doe"/>
      <label for="sobrenome"> Sobrenome </label>
      <input v-model="user.sobrenome" required id="sobrenome" type="text" placeholder="jdoe"/>
      <label for="data_nascimento"> Data Nascimento </label>
      <input
        v-model="user.data_nascimento"
        required id="data_nascimento"
        type="date"
        placeholder="01/01/01"
      />
      <label for="email"> Email </label>
      <input
        v-model="user.email"
        required id="email"
        type="email"
        placeholder="john.doe@example.com"
      />
      <label for="sexo"> Sexo </label>
      <input v-model="user.sexo" required id="sexo" type="text" placeholder="john doe"/>
      <br>
      <button type="button" @click="postUser" >Cadastrar</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        nome: '',
        sobrenome: '',
        data_nascimento: '',
        email: '',
        sexo: '',
      },
    };
  },
  methods: {
    postUser() {
      axios.post('http://192.168.0.126:8085/api/usuario/inserir', {
        nome: this.user.nome,
        sobrenome: this.user.sobrenome,
        data_nascimento: this.user.data_nascimento,
        email: this.user.email,
        sexo: this.user.sexo,
      }).then((response) => {
        console.log(response);
        alert('Cadastrado');
      }).catch((err) => {
        alert(`Verifique os campos, erro${err}`);
      });
    },
  },
};
</script>
<style scoped>
  form {
    margin: 0 auto;
    max-width: 500px;
    flex-direction: column;
    display: flex;
  }
  label {
    padding: 8px;
  }
  input {
    padding: 8px;
  }
  button {
    padding: 8px;
  }
</style>
