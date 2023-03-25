<template>
  <div id="foundMon"></div>
  <button @click="findRandom" id="find">Explore Tall Grass</button>
</template>

<script>
import PokeList from './PokeList.js'
import runAway from './runAway.vue'
export default {
  components: runAway,
  name: 'findRandom',
  props: {
    front_sprite: String,
    name: String
  },
  data() {
    return {
      list: PokeList
    }
  },
  computed: {
    findRandom: function findRandom() {
      const list = PokeList
      const found = list[Math.floor(Math.random() * list.length)]
      const div = document.getElementById('foundMon')
      div.insertAdjacentHTML(
        'beforeend',
        `<div class="thing">
      <img src="${found.front_sprite}" alt="${found.name}" id="image"></img>
      <h2 id="text">${found.name} has been found!</h2>
      <runAway />
    </div>`
      )
      const find = document.getElementById('find')
      find.remove()
    }
  }
}
</script>
