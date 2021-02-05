<style scoped lang="sass">

</style>

<template lang="pug">
div
  User
</template>

<script>
import User from '@/components/User'

export default {
  name: 'Home',
  metaInfo() {
    return {
      title:
      'Lumen Lads',
    };
  },
  components: {
    User,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>