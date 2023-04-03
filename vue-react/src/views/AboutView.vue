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
  <img src="/GOWHITEBOYGO.jpg" alt="Emil Sinclair from Limbus Company dancing on a casino table with maracas">
</template>

<style scoped>
.all {
  display: flex;
  flex-flow: row wrap;
}
img {
  width: 55em;
}
</style>