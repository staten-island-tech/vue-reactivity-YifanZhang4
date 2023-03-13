<script>
import PokeList from '../components/PokeList.vue'
import PokeCard from '../components/PokeCard.vue'
export default {
  components: PokeList,
  PokeCard
}
</script>

<template>
  <PokeCard v-for="pokemon in PokeList" :key="pokemon" />
</template>
