<style scoped lang="sass">

</style>

<template lang="pug">
div
  form(@submit.prevent="submitForm")
    label(
      for="cryptoType"
    )
      | Crypto Name
    input(
      type="text"
      id="cryptoType"
      name="cryptoType"
      v-model="inputCryptoType"
    )
    label(
      for="accountAddress"
    )
      | Account Address
    input(
      type="text"
      id="accountAddress"
      name="accountAddress"
      v-model="inputAccountAddress"
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
      inputCryptoType: '',
      inputAccountAddress: '',
    };
  },
  methods: {
    submitForm() {
      console.log('hello', this.inputCryptoType, this.inputAccountAddress);
    },
  },
};
</script>