<style scoped lang="sass">
  .user-list:hover
    background-color: red
</style>

<template lang="pug">
div
  User
  div(v-for="user in users")
    .user-list {{ user.name }}
</template>

<script>
import { Users } from '@/utils/enums/Users';

import User from '@/components/User.vue';

export default {
  name: 'Home',
  metaInfo() {
    return {
      title:
      'Lumen Lads',
    };
  },
  components: { User },
  data() {
    return { users: Users };
  },
  methods: {},
};
</script>