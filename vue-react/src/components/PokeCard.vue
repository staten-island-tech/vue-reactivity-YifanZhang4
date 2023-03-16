<template>
  <div class="PokeCard">
    <h2>{{ name }}</h2>
    <img v-bind:src="front_sprite" alt="" />
    <h2>Type: {{ type[0] }} {{ type[1] }}</h2>
  </div>
</template>

<script>
export default {
  name: 'PokeCard',
  props: {
    name: String,
    front_sprite: String,
    type: String
  }
}
</script>

<style scoped>
.PokeCard {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  height: 12rem;
  width: 12rem;
  margin: 15px 15px;
  padding: 25px 15px;
  background-color: #f2f2f2;  
  align-items: center;
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
}
</style>
