<template>
    <div class="home-page">
        <CalculatorBody />
    </div>
</template>

<script>
import CalculatorBody from "@/components/CalculatorBody.vue"
export default {
    name: "HomePage",
    components: {
        CalculatorBody
    }
}
</script>
<style>
.home-page {
    width: 20rem;
}
</style>