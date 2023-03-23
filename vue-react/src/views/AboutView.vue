<script>
import PokeCard from '../components/PokeCard.vue'
import PokeList from '../components/PokeList.js'
export default {
  components: {
    PokeCard
  },
  data() {
    return {
      list: PokeList
    }
  },
  methods: {
    test() {
      console.log(this.list)
    }
  }
}
</script>

<template>
  <div class="all">
    <PokeCard
      v-for="pokemon in list"
      :key="pokemon"
      :pokemon="pokemon"
      :name="pokemon.name"
      :front_sprite="pokemon.front_sprite"
      :type="pokemon.type"
      :got="pokemon.got"
    />
  </div>
</template>

<style scoped>
.all {
  display: flex;
  flex-flow: row wrap;
}
</style>
