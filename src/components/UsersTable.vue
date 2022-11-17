<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="10"
    class="elevation-2"
    :footer-props="{
      'items-per-page-text': 'Linhas por página',
      'page-text': '{0} de {1}',
      'items-per-page-all-text': 'Todos',
    }"
  ></v-data-table>
</template>
<script>
export default {
  props: {
    users: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        { text: 'Nome', value: 'nome' },
        { text: 'Sobrenome', value: 'sobrenome' },
        { text: 'Data de Nascimento', value: 'data_nascimento' },
        { text: 'Email', value: 'email' },
        { text: 'sexo', value: 'sexo' },
      ],
    };
  },
};
</script>
