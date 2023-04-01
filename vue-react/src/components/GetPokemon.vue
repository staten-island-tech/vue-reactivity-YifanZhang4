<template>
  <button @click="encounter">Explore Tall Grass</button>
  <div v-if="status != null">{{ met }}</div>
</template>

<script>
import PokeList from './PokeList.js'
export default {
  components: {},
  name: 'GetPokemon',
  props: {
    found: found
  },
  data() {
    return { list: PokeList, status: null, met: null }
  },
  methods: {
    encounter: function () {
      const found = PokeList[Math.floor(Math.random() * PokeList.length)]
      console.log(found)
      found = found
    }
  }
}
</script>
