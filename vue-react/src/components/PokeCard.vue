<template>
  <div class="PokeCard">
    <h2>{{ name }}</h2>
    <img v-bind:src="gray_scale" alt="" v-if="got === false" />
    <img v-bind:src="front_sprite" alt="" v-if="got === true" />
    <h2>Type: {{ type[0] }} {{ type[1] }}</h2>
    <h2 v-if="got === false">Not Obtained</h2>
    <h2 v-if="got === true">Obtained</h2>
    <ObtainedButton />
  </div>
</template>

<script>
import ObtainedButton from './ObtainedButton.vue'
export default {
  name: 'PokeCard',
  props: {
    name: String,
    gray_scale: String,
    front_sprite: String,
    type: String,
    got: Boolean
  },
  components: { ObtainedButton }
}
</script>

<style>
:root {
  /*Type Colors*/
  --Normal: #a8a77a;
  --Fire: #ee8130;
  --Water: #6390f0;
  --Electric: #f7d02c;
  --Grass: #7ac74c;
  --Ice: #96d9d6;
  --Fighting: #c22e28;
  --Poison: #a33ea1;
  --Ground: #e2bf65;
  --Flying: #a98ff3;
  --Psychic: #f95587;
  --Bug: #a6b91a;
  --Rock: #b6a136;
  --Ghost: #735797;
  --Dragon: #6f35fc;
  --Dark: #705746;
  --Steel: #b7b7ce;
  --Fairy: #d685ad;

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
  height: 13rem;
  width: 13rem;
  margin: 10px 10px;
  padding: 15px 15px;
  background-color: #f2f2f2;
  align-items: center;
  border-style: solid;
}
h2 {
  text-align: center;
  font-size: 1rem;
  display: block;
}
img {
  max-width: 100%;
  max-height: 100%;
}
</style>
