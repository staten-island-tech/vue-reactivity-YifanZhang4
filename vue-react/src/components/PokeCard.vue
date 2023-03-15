<template>
  <div class="PokeCard">
    <h1>{{ name }}</h1>
    <img v-bind:src="front_sprite" alt="">
  </div>
</template>

<script>
export default {
  name: 'PokeCard',
  props: {
    name: String,
    front_sprite: String
  }
}
</script>

<style scoped>
div {
  border-radius: 15px;
  text-align: center;
  font-size: .5rem;
  height: 10rem;
  width: 10rem;
  margin: 20px 100px;
  padding: 25px 15px;
  background-color: #f2f2f2;
  box-shadow: 0px 12px 22px 4px #202e42;
  border-style: solid;
  border-width: 5px;
  align-items: center;
}
</style>
