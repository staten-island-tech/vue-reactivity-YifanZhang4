<template>
  <div id="foundMon"></div>
  <button @click="findRandom" id="find">Explore Tall Grass</button>
  <button @click="runs" id="run">Run Away</button>
  <button @click="catches" id="catch">Catch</button>
  <img src="/src/assets/pokebal.gif" alt="Shaking PokeBall gif" id="gif" />
</template>

<script>
import PokeList from './PokeList.js'
export default {
  components: {},
  name: 'options',
  props: {
    found: Element
  },
  data() {
    return {
      list: PokeList
    }
  },
  computed: {
    findRandom: function findRandom() {
      console.log('find')
      const list = PokeList
      const found = list[Math.floor(Math.random() * list.length)]
      console.log(found)
      const div = document.getElementById('foundMon')
      div.insertAdjacentHTML(
        'beforeend',
        `<div class="thing">
      <img src="${found.front_sprite}" alt="Sprite of the Pokemon: ${found.name}" id="image"></img>
      <h2 id="text">${found.name} has been found!</h2>
    </div>`
      )
      const find = document.getElementById('find')
      find.remove()
      const run = document.getElementById('run')
      run.style.display = 'flex'
      const catches = document.getElementById('catch')
      catches.style.display = 'flex'
      return found
    },
    runs: function runs() {
      console.log('run')
      const text = document.getElementById('text')
      text.remove()
      const div = document.getElementById('foundMon')
      div.insertAdjacentHTML('beforeend', `<h2>You choose to run away.</h2>`)
      const run = document.getElementById('run')
      run.remove()
      const catches = document.getElementById('catch')
      catches.remove()
    },
    catches: function catches() {
      console.log('catch')
      const text = document.getElementById('text')
      text.remove()
      const catches = document.getElementById('catch')
      catches.remove()
      const run = document.getElementById('run')
      run.remove()
      const image = document.getElementById('image')
      image.remove()
      const gif = document.getElementById('gif')
      gif.style.display = 'flex'
      setTimeout(() => {
        this.attempts
      }, 4000)
    },
    attempts: function attempts() {
      const result = [Math.floor(Math.random() * 300)]
      console.log(result)
      if (result < this.found.chance || result === this.found.chance) {
        console.log('success')
        const div = document.getElementById('foundMon')
        div.insertAdjacentHTML(
          'beforeend',
          `<h2>You have sucessfully caught ${this.found.name}.</h2>`
        )
        this.found.got = true
      } else {
        console.log('fail')
        const div = document.getElementById('foundMon')
        div.insertAdjacentHTML('beforeend', `<h2>You failed to catch ${this.found.name}.</h2>`)
      }
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
  max-width: 10%;
  max-height: 10%;
  display: none;
}
</style>
