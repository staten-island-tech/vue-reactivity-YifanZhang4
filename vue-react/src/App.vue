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
header {
  line-height: 1.5;
  max-height: 100vh;
}
nav {
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;
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

</style>
