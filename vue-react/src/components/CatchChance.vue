<template>
  <button @click="findRandom"></button>
</template>

<script>
import PokeList from '../components/PokeList.js'
export default {
  name: 'findRandom',
  props: {},
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

function findRandom() {
  const rand = list[Math.floor(Math.random() * list.length)]
  console.log(rand.name)
}
</script>
