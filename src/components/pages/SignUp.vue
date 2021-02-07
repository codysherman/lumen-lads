<style scoped lang="sass">

</style>

<template lang="pug">
div
  form(@submit.prevent="submitForm")
    label(
      for="userName"
    )
      | User Name
    input(
      type="text"
      id="userName"
      name="userName"
      v-model="userName"
    )
    label(
      for="userPassword"
    )
      | Password
    input(
      type="password"
      id="userPassword"
      name="userPassword"
      v-model="userPassword"
    )
    button(
      type="submit"
    )
      | Submit

</template>

<script>
export default {
  name: 'Profile',
  metaInfo() {
    return {
      title:
      'Lumen Lads',
    };
  },
  components: { },
  data() {
    return {
      userName: '',
      userPassword: '',
    };
  },
  methods: {
    submitForm() {
      console.log('hello', this.userName, this.userPassword);
    },
  },
};
</script>