<template>
  <div class="container">
    <HomePage />
    <CoderDetail/>
  </div>
</template>
<script>
import HomePage from "@/views/HomePage.vue"
import CoderDetail from "./components/CoderDetail.vue";
export default {
  name: 'App',
  components: {
    HomePage,
    CoderDetail
  }
}
</script>

