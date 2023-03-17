<template>
  <button v-if="got === true" @click="change()">Not Got</button>
  <button v-if="got === false" @click="change()">Got</button>
</template>

<script>
export default {
  name: 'ObtainedButton',
  props: {
    got: Boolean
  }
}
function change() {
  got.value = !got.value
  console.log('got changed')
}
</script>
