<template>
  <div class="container-user">
    <span> {{user.nome }} </span>
    <span> {{user.sobrenome }} </span>
    <span> {{user.email }} </span>
    <span> {{user.sexo }} </span>
    <span> {{user.data_nascimento }} </span>
  </div>
</template>

<script>

export default {
  name: 'SistemaComponent',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
  h1{
    text-transform: capitalize;
  }
  .container-user {
    padding: 8px;
    justify-content: space-between;
    display: flex;
    span {
      width: 300px;
    }
  }
</style>
