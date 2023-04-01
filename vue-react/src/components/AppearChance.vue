<template>
  <div id="foundMon"></div>
  <button @click="$emit(findRandom)" id="find">Explore Tall Grass</button>
  <button @click="test" id="run">Run Away</button>
  <button @click="catches" id="catch">Catch</button>
  <button @click="next" id="next" type="button">Onto the Next!</button>
  <img src="/src/assets/pokebal.gif" alt="Shaking PokeBall gif" id="gif" />
  <div v-if="status != null">{{ status }}</div>
</template>

<script>
import PokeList from './PokeList.js'
export default {
  components: {},
  name: 'AppearChance',
  props: {},
  data() {
    return {
      list: PokeList,
      found: null,
      status: null
    }
  },
  methods: {
    test: function () {
      this.status = 'You ran away'
    }
  },
  computed: {
    findRandom: function findRandom() {
      console.log('find')
      const found = PokeList[Math.floor(Math.random() * PokeList.length)]
      console.log(found)
      const div = document.getElementById('foundMon')
      div.insertAdjacentHTML(
        'beforeend',
        `<div class="stuff">
      <img src="${found.front_sprite}" alt="Sprite of the Pokemon: ${found.name}" id="image"></img>
      <h2 id="text">${found.name} has been found!</h2>
    </div>`
      )
      const find = document.getElementById('find')
      find.style.display = 'none'
      const run = document.getElementById('run')
      run.style.display = 'flex'
      const catches = document.getElementById('catch')
      catches.style.display = 'flex'
      this.found = found
      console.log(this.found)
    },
    runs: function runs() {
      console.log('run')
      const text = document.getElementById('text')
      text.remove()
      const stuff = document.querySelector('.stuff')
      stuff.insertAdjacentHTML('beforeend', `<h2>You choose to run away.</h2>`)
      const run = document.getElementById('run')
      run.style.display = 'none'
      const catches = document.getElementById('catch')
      catches.style.display = 'none'
      const next = document.getElementById('next')
      next.style.display = 'flex'
    },
    catches: function catches() {
      console.log('catch')
      const text = document.getElementById('text')
      text.remove()
      const catches = document.getElementById('catch')
      catches.style.display = 'none'
      const run = document.getElementById('run')
      run.style.display = 'none'
      const stuff = document.querySelector('.stuff')
      stuff.remove()
      const gif = document.getElementById('gif')
      gif.style.display = 'flex'
      setTimeout(() => {
        this.attempts
      }, 4000)
    },
    attempts: function attempts() {
      const result = [Math.floor(Math.random() * 200)]
      console.log(result)
      console.log(this.found.chance)
      if (result <= this.found.chance) {
        console.log('success')
        const gif = document.getElementById('gif')
        gif.style.display = 'none'
        const div = document.getElementById('foundMon')
        div.insertAdjacentHTML(
          'beforeend',
          `<div id="success" class="stuff"><img src="/src/assets/sucess pokebal.gif" alt="PokeBall gif with sparkles and a halo"/><h2>You caught ${this.found.name}!</h2>`
        )
        const next = document.getElementById('next')
        next.style.display = 'flex'
        this.found.got = true
        PokeList.splice(this.found.id)
      } else {
        console.log('fail')
        const gif = document.getElementById('gif')
        gif.style.display = 'none'
        const div = document.getElementById('foundMon')
        div.insertAdjacentHTML(
          'beforeend',
          `<div id="fail" class="stuff"><img src="/src/assets/fal pokebal.gif" alt="PokeBall gif with a dark blue cloud behind it and gloomy lines"/><h2>You failed to catch ${this.found.name}.</h2></div>
       `
        )
        const next = document.getElementById('next')
        next.style.display = 'flex'
      }
    },
    next: function next() {
      const next = document.getElementById('next')
      next.style.display = 'none'
      let stuff = document.querySelector('.stuff')
      stuff.remove()
      const find = document.getElementById('find')
      find.style.display = 'flex'
    }
  }
}
</script>

<style scoped>
#run {
  display: none;
}
#catch {
  display: none;
}
#gif {
  display: none;
}
#next {
  display: none;
}
</style>
