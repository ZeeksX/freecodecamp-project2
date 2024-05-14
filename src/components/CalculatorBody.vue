<template>
    <p>First Number: {{ firstNumber }}</p>
    <p>Second Number: {{ secondNumber }}</p>
    <div class="calculator">
        <div id="formula">{{ calculatorStore.formula }}</div>
        <div id="result">{{ calculatorStore.text }}</div>
        <div class="row" id="row1">
            <div class="calc" id="clear" @click="clearData">
                <div class="button-wrapper">AC</div>
            </div>
            <div class="calc oper" id="division" @click="division">
                <div class="button-wrapper">/</div>
            </div>
            <div class="calc oper" id="multiplication" @click="multiplication">
                <div class="button-wrapper">x</div>
            </div>
        </div>
        <div class="row" id="row2">
            <div class="calc num" id="seven" @click="append('7')">
                <div class="button-wrapper">7</div>
            </div>
            <div class="calc num" id="eight" @click="append('8')">
                <div class="button-wrapper">8</div>
            </div>
            <div class="calc num" id="nine" @click="append('9')">
                <div class="button-wrapper">9</div>
            </div>
            <div class="calc oper" id="subtraction" @click="subtraction">
                <div class="button-wrapper">-</div>
            </div>
        </div>
        <div class="row" id="row3">
            <div class="calc num" id="four" @click="append('4')">
                <div class="button-wrapper">4</div>
            </div>
            <div class="calc num" id="five" @click="append('5')">
                <div class="button-wrapper">5</div>
            </div>
            <div class="calc num" id="six" @click="append('6')">
                <div class="button-wrapper">6</div>
            </div>
            <div class="calc oper" id="addition" @click="addition">
                <div class="button-wrapper">+</div>
            </div>
        </div>
        <div class="row" id="row4">
            <div class="calc num" id="one" @click="append('1')">
                <div class="button-wrapper">1</div>
            </div>
            <div class="calc num" id="two" @click="append('2')">
                <div class="button-wrapper">2</div>
            </div>
            <div class="calc num" id="three" @click="append('3')">
                <div class="button-wrapper">3</div>
            </div>
            <div class="calc oper" id="equals" @click="computeResult('=')">
                <div class="button-wrapper">=</div>
            </div>
        </div>
        <div class="row" id="row5">
            <div class="calc num" id="zero" @click="append('0')">
                <div class="button-wrapper">0</div>
            </div>
            <div class="calc num" id="dot" @click="append('.')">
                <div class="button-wrapper">.</div>
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
            calculatorStore: useCalculatorStore(),
            firstNumber: null,
            secondNumber: null
        };
    },
    methods: {
        append(label) {
            if (this.calculatorStore.text !== "DIGIT LIMIT MET") {
                if (this.calculatorStore.text === "0") {
                    this.calculatorStore.text = label;
                } else {
                    if (this.calculatorStore.text.length + label.length <= 23) {
                        this.calculatorStore.text += label;
                    } else {
                        this.calculatorStore.text = "DIGIT LIMIT MET";
                    }
                }
            }
        },
        clearData() {
            this.calculatorStore.text = "0"
            this.calculatorStore.formula = ""
            this.firstNumber = ""
            this.secondNumber = ""
        },
        addition() {
            this.firstNumber = parseFloat(this.calculatorStore.text)
            this.calculatorStore.formula = this.calculatorStore.text + "+"
            this.calculatorStore.text = "+"
        },
        subtraction() {
            this.calculatorStore.formula = this.calculatorStore.text + "-"
            this.calculatorStore.text = "-"
        },
        division() {
            this.calculatorStore.formula = this.calculatorStore.text + "/"
            this.calculatorStore.text = "/"
        },
        multiplication() {
            this.calculatorStore.formula = this.calculatorStore.text + "-"
            this.calculatorStore.text = "-"
        },

    },

};
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

.calc:hover {
    .button-wrapper {
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

.button-wrapper {
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

p {
    color: white;
}
</style>