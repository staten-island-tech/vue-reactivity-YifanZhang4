<script setup>
const pokeList = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    if (response.status < 200 || response.status > 299) {
      throw error(response.status)
    } else {
      const actualList = await response.json()
      return actualList
    }
  } catch (error) {
    console.log('api fetch error')
  }
}
</script>
