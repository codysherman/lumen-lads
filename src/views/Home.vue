<style scoped lang="sass">

</style>

<template lang="pug">
div
  User
  div
    | {{users}}
</template>

<script>
import {Users} from '@/utils/enums/Users.js'

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
    return {
      users: Users,
    };
  },
  methods: {},
};
</script>