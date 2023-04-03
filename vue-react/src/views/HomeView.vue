<template>
  <body>
    <GetPokemon />
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
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
  width: 100vw;
}
</style>
