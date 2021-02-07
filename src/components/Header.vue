<style scoped lang="sass">
header
  width: 100%
  height: 100%
  background-color: #bddef8
  color: white
  padding: 5px 10px

.navigate:hover
    cursor: pointer
    background-color: red
</style>

<template lang="pug">
header
  .frow.row-between.items-center.height-100
    div
      router-link.navigate(tag="div" to="/") Header
    .frow.row-between.items-center.height-100
      .mx-10 Settings
      router-link.navigate(tag="div" to="Profile") Profile
</template>

<script>

export default {
  name: 'Header',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>