<style scoped lang="sass">
header
  width: 100%
  height: 100%
  background-color: #bddef8
  color: white
  padding: 5px 10px
</style>

<template lang="pug">
header
  .frow.row-between.items-center.height-100
    div
      div Header
    div
      div Settings
</template>

<script>

export default {
  name: 'Header',
  components: {},
  props: {
    publicRoomCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>