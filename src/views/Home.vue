<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Country/>
    <State/>
  </div>
</template>

<script>
// @ is an alias to /src
import Country from '@/components/Country.vue'
import States from '@/components/State.vue'

export default {
  name: 'home',
  components: {
    Country
  }
}
</script>
