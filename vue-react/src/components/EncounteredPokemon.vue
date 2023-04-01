<template>
  <h2 id="text">{{ found.name }} has been found!</h2>
  <RunAway />
</template>

<script>
import found from './GetPokemon.vue'
export default {
  name: 'EncounteredPokemon',
  props: {
    found: found
  }
}
</script>
