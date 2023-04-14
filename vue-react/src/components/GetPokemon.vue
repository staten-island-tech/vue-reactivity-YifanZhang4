<template>
 
  <div id="get"> 
    <div v-if="start != null">
      <br>
      <br>
      <br>
      <br>
      <button @click="encounter" id="start">Explore Tall Grass</button>
    </div>
    <div v-if="meet != null">
      <img :src="image" :alt="name" class="man" />
      <br />
      {{ meet }}
      {{ have }}
      <button @click="capture">Catch</button>
      <button @click="run">Run Away</button>
    </div>
    <div v-if="leave != null">
      <img :src="image" :alt="name" class="man" />
      <br />
      {{ leave }}
      <br />
      <button @click="next">Onto the Next!</button>
    </div>
    <div v-if="attempt != null">
      <img :src="image" :alt="name" id="gif" />
      {{ attempt }}
      <button @click="next">Onto the Next!</button>
      <br />
    </div>
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
#get {
  margin: auto;
  width: 50%;
  padding: 10px;
}
#start {
  display: grid;
  position: relative;
}
img {
  display: grid;
  align-self: center;
}
.man {
  width: 110px;
}
#gif {
  display: block;
  width: 120px;
}
button {
  margin: 5px;
  display: block;
  text-align: center;
  font-family: 'Silkscreen';
}
</style>
