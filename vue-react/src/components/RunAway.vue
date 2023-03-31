<template>
  <div>
    <h2 id="text">You run away from {{ found.name }}.</h2>
  </div>
</template>

<script>
import found from './GetPokemon.vue'
export default {
  name: 'RunAway',
  props: {
    found: found
  }
}
</script>
