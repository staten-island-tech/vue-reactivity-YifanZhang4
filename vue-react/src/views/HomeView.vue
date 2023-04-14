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
  background-image: url('/bacground.png');
  background-repeat: no-repeat;
  background-size: 60rem;
  background-position: center;
  background-attachment: fixed;
  width: 80vw;
  margin: auto;
  padding: 10px;
}
</style>
