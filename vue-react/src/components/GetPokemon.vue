<template>
  <button v-if="start != null" @click="encounter">Explore Tall Grass</button>
  <div v-if="meet != null">
    <img :src="image" :alt="name" />
    {{ meet }}
    {{ have }}
    <button @click="capture">Catch</button>
    <button @click="run">Run Away</button>
  </div>
  <div v-if="leave != null">
    <img :src="image" :alt="name" />
    {{ leave }}
    <button @click="next">Onto the Next!</button>
  </div>
  <div v-if="attempt != null">
    <img :src="image" :alt="name" />
    {{ attempt }}
    <button @click="next">Onto the Next!</button>
  </div>
</template>

<script>
import PokeList from './PokeList.js'
export default {
  components: {},
  name: 'GetPokemon',
  props: {},
  data() {
    return { list: PokeList, found: Array, start: true, meet: null, leave: null, attempt: null }
  },
  methods: {
    encounter: function () {
      this.start = null
      const found = PokeList[Math.floor(Math.random() * PokeList.length)]
      console.log(found)
      this.image = `${found.front_sprite}`
      this.name = `${found.name}`
      this.meet = `You encounter ${found.name}.`
      this.found = found
      if (found.got === true) {
        this.have = `You've already caught a ${found.name} before.`
      } else {
        this.have = ``
      }
    },
    run: function () {
      this.meet = null
      this.image = `${this.found.front_sprite}`
      this.name = `${this.found.name}`
      this.leave = `You run away from ${this.found.name}!`
    },
    capture: function () {
      this.meet = null
      const result = [Math.floor(Math.random() * 200)]
      console.log(result)
      console.log(this.found.chance)
      if (result <= this.found.chance) {
        console.log('success')
        this.image = `/sucess pokebal.gif`
        this.name = `PokeBall gif with sparkles and a halo`
        this.attempt = `You successfuly caught ${this.found.name}!`
        this.found.got = true
      } else {
        console.log('failure')
        this.image = `/fal pokebal.gif`
        this.name = `PokeBall gif with a dark blue cloud behind it and gloomy lines`
        this.attempt = `${this.found.name} ran away...`
      }
    },
    next: function () {
      this.start = true
      this.leave = null
      this.attempt = null
    }
  }
}
</script>

<style scoped>
img {
  display: block
}
button {
  display: block;
  margin: 5px;
  font-family: 'Silkscreen';
}
</style>
