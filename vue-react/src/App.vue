<script setup>
import { RouterLink, RouterView } from 'vue-router'
// export default {
//   computed: {
//     background: function() {
//       return "background: url('/background.png')"
//     }
//   }
// }
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Catch</RouterLink>
      <RouterLink to="/about">PokeDex</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  width: 120%;
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }
  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>