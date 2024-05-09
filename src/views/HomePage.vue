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
    background-color: black;
    border: 2px solid #47476b;
    padding: 5px;
}
</style>