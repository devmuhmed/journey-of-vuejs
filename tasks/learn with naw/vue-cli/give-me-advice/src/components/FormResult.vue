<template>
    <div class="result-box">
        <div class="result-title">Here is your advice</div>
        <p class="result-text" :style="{color: color}">{{ advice }}</p>
    </div>
</template>

<script>
export default {
    name: "FormResult",
    props:['advice', 'color']
}
</script>


<style scoped>
.result-box {
    margin:2rem auto;
    padding: 2rem;
    background: linear-gradient(80deg, #e5e5e5, lightblue);
    border-radius: 10px;
}

.result-title {
    background: linear-gradient(80deg, yellow, lightgreen);
    border-radius: 10px;
    font-size: 2rem;
    font-weight: bold;
}
.result-text {
    font-size: 2rem;
    line-height: 3rem;
}
</style>
