<template>
  <div class="PokeCard" v-if="got === false" :style="border" v-bind="$attrs">
    <h2 class="name">{{ name }}</h2>
    <img :src="front_sprite" :alt="name" class="grayscale" />
    <h2>Type: {{ type[0] }} {{ type[1] }}</h2>
    <h2>Not Obtained</h2>
  </div>
  <div class="PokeCard" v-if="got === true" :style="border">
    <h2 class="name">{{ name }}</h2>
    <img :src="front_sprite" :alt="name" />
    <h2>Type: {{ type[0] }} {{ type[1] }}</h2>
    <h2>Obtained</h2>
  </div>
</template>

<script>
export default {
  name: 'PokeCard',
  props: {
    name: String,
    front_sprite: String,
    type: Object,
    got: Boolean
  },
  data() {
    return {
      colors: {
        Normal: '#a8a77a',
        Fire: '#ee8130',
        Water: '#6390f0',
        Electric: '#f7d02c',
        Grass: '#7ac74c',
        Ice: '#96d9d6',
        Fighting: '#c22e28',
        Poison: '#a33ea1',
        Ground: '#e2bf65',
        Flying: '#a98ff3',
        Psychic: '#f95587',
        Bug: '#a6b91a',
        Rock: '#b6a136',
        Ghost: '#735797',
        Dragon: '#6f35fc',
        Dark: '#705746',
        Steel: '#b7b7ce',
        Fairy: '#d685ad'
      }
    }
  },
  computed: {
    border: function() {
      return 'border: ' + '5px ' + 'solid ' + this.colors[`${this.type[0]}`]
    }
  }
}
</script>

<style>
:root {
  /*TypeScale*/
  --h1: 2.488rem;
  --h2: 2.074rem;
  --h3: 1.728rem;
  --h4: 1.44rem;
  --h5: 1.2rem;
}
</style>

<style scoped>
.PokeCard {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  height: 17rem;
  width: 17rem;
  margin: 10px 10px;
  padding: 15px 15px;
  background-color: #f2f2f2;
  align-items: center;
}
h2 {
  text-align: center;
  font-size: 1rem;
  display: block;
}
.name {
  font-size: var(--h3);
}
img {
  max-width: 100%;
  max-height: 100%;
}
.grayscale {
  filter: grayscale();
}
</style>
