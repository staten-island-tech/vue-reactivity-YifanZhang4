<template>
  <button @click="$emit('runs')">Run Away</button>
</template>

<script>
export default {
  name: 'runAway',
  props: {
  },
  computed: {
    runs: function runs() {
      const flavorText = document.getElementById('text')
      flavorText.remove()
      const div = document.getElementById('foundMon')
      div.insertAdjacentHTML('beforeend', `<h2>You run away from ${found.name}</h2>`)
    }
  }
}
</script>
