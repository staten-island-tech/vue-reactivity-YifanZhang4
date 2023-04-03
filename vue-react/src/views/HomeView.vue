<template>
  <body>
    <GetPokemon/>
  </body>
</template>

<script>
import GetPokemon from '../components/GetPokemon.vue'

export default {
  components: {
    GetPokemon
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
body {
  background-image: url('/background.png');
}
</style>
