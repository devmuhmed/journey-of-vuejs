<template>
    <form action="" class="form">
        <fieldset class="form-fieldset">
            <legend class="form-legend">Choose a number</legend>
            <label for="number" class="form-label">Luck Number</label>
            <input class="form-input" type="number" id="number" name="number" v-model="userNumber">
        </fieldset>
        <fieldset class="form-fieldset">
            <legend class="form-legend">Text Color</legend>
            <label for="color" class="form-label">Color</label>
            <!-- <input class="form-input" type="color" id="color" name="color" value="" @input> -->
            <input class="form-input" type="color" id="color" name="color" v-model="userColor">
        </fieldset>
        <form-result :color="userColor" :advice="getAdvice"></form-result>
        <form-result :color="userColor" :advice="adviceDataJson"></form-result>
    </form>
</template>

<script>
import FormResult from './FormResult.vue'
export default {
    name: 'PageForm',
    data(){
        return {
            userNumber: 5,
            userColor: '#000000',
            advices: ["advice 1", "advice 2", "advice 3", "advice 4"]
        }
    },
    computed: {
        // not given argument will return specfic value
        getAdvice(){
            const advice = this.advices.find(
                // (advice,index) => index === this.userNumber
                (a,i) => i === this.userNumber
            )
            // console.log(advice)
            if(!advice) return "unlucky enough, no advice for you "

            return advice
        },
        adviceDataJson() {
            const advice = this.dataJson.find(
                // (advice,index) => index === this.userNumber
                (a,i) => i === this.userNumber
            )
            // console.log(advice)
            if(!advice) return "unlucky enough, no advice for you "
    
            return advice.adviceText
        }
    },
    components:{
        FormResult,
    },
    inject: ['dataJson']
}
</script>

<style scoped>
.form {
    margin: 5rem auto;
    max-width: 70%;
}

.form-fieldset{
    margin: 2rem 0;
    padding: 2rem;
    border-radius: 10px;
    background: linear-gradient(80deg, #e5e5e5, lightblue);
}

.form-legend {
    display: block;
    margin: 0;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    background: linear-gradient(80deg, yellow, lightgreen);
    border-radius: 10px;
}
.form-label {
    display: block;
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
}

.form-input{
    outline: none;
    border:none;
    font-size: 2rem;
    color: tomato;
    text-align: center;
    max-width: 30%;
}
</style>
