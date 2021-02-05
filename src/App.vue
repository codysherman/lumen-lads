<style lang="sass">
@import ~frow/_variables
@import @/assets/sass/_colors.sass
@import @/assets/sass/_variables.sass
@import ~frow
@import @/assets/sass/global.sass
</style>

<template lang="pug">
  router-view(:key="$route.fullPath")
</template>

<script>
export default {
  name: 'App',
  metaInfo: { title: 'Lumen Lads' },
};
</script>