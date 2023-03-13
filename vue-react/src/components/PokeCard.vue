<template>
  <div class="PokeCard">
    <h2>{{ name }}</h2>
    <img src="{{ front_sprite }}" />
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
  border-radius: 5px;
  width: 5rem;
  height: 5rem;
}
img {
  max-width: 100%;
  max-height: 100%;
}
</style>
