<style scoped lang="sass">

</style>

<template lang="pug">
div
  form
    label(
      for="cryptoType"
    )
      | Crypto Name
    input(
      type="text"
      id="cryptoType"
      name="cryptoType"
    )
    label(
      for="accountAddress"
    )
      | Account Address
    input(
      type="text"
      id="accountAddress"
      name="accountAddress"
    )

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
    return { };
  },
  methods: {},
};
</script>