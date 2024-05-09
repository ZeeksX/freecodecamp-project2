<template>
  <div class="container">
    <HomePage />
  </div>
</template>
<script>
import HomePage from "@/views/HomePage.vue"
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>
<style>
.container {
  background-color: black;
  border: 2px solid #47476b;
  padding: 5px;
}
</style>
