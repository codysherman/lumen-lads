<style lang="sass">
@import ~frow/_variables
@import @/assets/sass/_colors.sass
@import @/assets/sass/_variables.sass
@import ~frow
@import @/assets/sass/global.sass

.main-grid
  display: grid
  grid-template-rows: 50px auto
</style>

<template lang="pug">
.main-grid
  Header
  router-view(:key="$route.fullPath")
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  metaInfo: { title: 'Lumen Lads' },
  components: { Header },
};
</script>