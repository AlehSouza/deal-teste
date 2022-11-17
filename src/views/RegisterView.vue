<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="about">
    <form>
      <h1>Cadastro de Usuários</h1>
      <label z for="nome"> Nome </label>
      <input v-model="user.nome" required id="nome" type="text" placeholder="john doe"/>
      <label for="sobrenome"> Sobrenome </label>
      <input v-model="user.sobrenome" required id="sobrenome" type="text" placeholder="jdoe"/>
      <label for="data_nascimento"> Data Nascimento </label>
      <input
        v-model="user.data_nascimento"
        required id="data_nascimento"
        type="date"
        placeholder="dd-mm-yyyy"
      />
      <label for="email"> Email </label>
      <input
        v-model="user.email"
        required id="email"
        type="email"
        placeholder="john.doe@example.com"
      />
      <label for="sexo"> Sexo </label>
      <select v-model="user.sexo" name="" id="" required>
        <option value="" selected disabled hidden>Selecione</option>
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
      </select>
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
      }).then(() => {
        alert('Cadastrado com sucesso');
      }).catch((err) => {
        alert(`Verifique os campos, erro: ${err}`);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  .about {
    height: 84vh;
    color: white;
    background-color: #35a9e7;
    padding: 40px;
    flex-direction: column;
    align-items: center;
    display: flex;
  }
  form {
    background-color: white;
    color: black;
    padding: 24px;
    border-radius: 5px;
    margin: 0 auto;
    width: 430px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    flex-direction: column;
    display: flex;
  }
  label {
    width: 100%;
    padding: 8px;
    padding-left: 0px;
    font-weight: bold;
    text-align: left;
  }
  input {
    padding: 8px;
    border: 1px solid #999999;
    border-radius: 2px;
  }
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #999999;
    cursor: pointer;
  }
  button {
    box-shadow:inset 0px -3px 7px 0px #29bbff;
    background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
    background-color:#2dabf9;
    border-radius:3px;
    border:1px solid black;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:15px;
    padding:12px 23px;
    margin: 20px 0px 20px 0px;
    text-decoration:none;
    text-shadow:0px 1px 0px #263666;
    &:hover {
      background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
      background-color:#0688fa;
    }
    &:active {
      position:relative;
      top:1px;
    }
  }
</style>
