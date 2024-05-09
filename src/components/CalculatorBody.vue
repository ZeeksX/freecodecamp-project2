<template>
    <div class="calculator">
        <div id="formula">5</div>
        <div id="result">0</div>
        <div v-for="(row, index) in calculatorStore.calculatorRows" :key="index" class="row" :id="'row' + (index + 1)">
            
                <div v-for="button in row" :key="button.id" :id="button.id" :class="['calc', button.type]">
                    <div class="button-wrapper">
                        {{ button.label }}
                    
                    
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { useCalculatorStore } from '@/store';


export default {
    name: "CalculatorBody",
    data() {
        return {
            calculatorStore: useCalculatorStore()
        }
    },
}
</script>
<style>
.calculator {
    width: 20rem;
}

#row5 {
    margin-top: -65px;
    width: 100%;
}

#zero {
    width: 50%;
}

#equals {
    background-color: #004466;
    height: 130px;
}

.calc {
    width: 25%;
}
.calc:hover{
    .button-wrapper{
        color: black;
    }
    color: black;
    cursor: pointer;
    filter: drop-shadow(#ffffff 0px 0px 1px);
}

.calc.num {
    background-color: #4D4D4D;
    box-sizing: border-box;
}
.button-wrapper{
    display: flex;
    flex-direction: row;
    padding: 0;
    color: white;
}

#clear,
.calc {
    padding: 0.0625rem 0.375rem;
    border-color: black;
    border: 0.5px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.0625rem;
}

#clear {
    width: 50%;
    background-color: #AC3939;
}

.calc.oper {
    background-color: #666666;
}

.row {
    display: flex;
    flex-direction: row;
    margin: 0;
}

#formula {
    min-height: 1.25rem;
    font-family: 'digital-clock-font';
    font-size: 1.25rem;
    color: orange;
    text-align: right;
    vertical-align: text-top;
    line-height: 1.25rem;
}

#result {
    font-size: 29px;
    font-family: 'digital-clock-font';
    color: white;
    text-align: right;
    line-height: 35px;
}
</style>