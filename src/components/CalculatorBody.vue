<template>
    <div>
        <p>First Number: {{ firstNumber }}</p>
        <p>Second Number: {{ secondNumber }}</p>
        <div class="calculator">
            <div id="formula">{{ calculatorStore.formula }}</div>
            <div id="result">{{ calculatorStore.text }}</div>
            <div class="row" id="row1">
                <div class="calc" id="clear" @click="clearData">
                    <div class="button-wrapper">AC</div>
                </div>
                <div class="calc oper" id="division" @click="append('/')">
                    <div class="button-wrapper">/</div>
                </div>
                <div class="calc oper" id="multiplication" @click="append('*')">
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
                <div class="calc oper" id="subtraction" @click="append('-')">
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
                <div class="calc oper" id="addition" @click="append('+')">
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
                <div class="calc oper" id="equals" @click="computeResult('=')"
                    :class="{ 'disabled': calculationCompleted }">
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
            secondNumber: null,
            calculationCompleted: false
        };
    },
    methods: {
        append(label) {
            if (!this.calculationCompleted && this.calculatorStore.text !== "DIGIT LIMIT MET") {
                if (this.calculatorStore.text === "0" || this.isOperator(this.calculatorStore.text)) {
                    this.calculatorStore.text = label;
                    this.calculatorStore.formula += label;
                } else {
                    if (label === "." && !this.calculatorStore.formula.includes(".")) {
                        this.calculatorStore.text += label;
                        this.calculatorStore.formula += label;
                    } else if (this.calculatorStore.formula.length + label.length <= 23) {
                        this.calculatorStore.text += label;
                        this.calculatorStore.formula += label;
                    } else {
                        this.calculatorStore.text = "DIGIT LIMIT MET";
                    }
                }
            } else {
                this.calculatorStore.formula = label;
                this.calculatorStore.text = label;
                this.calculationCompleted = false;
            }
        },
        isOperator(text) {
            return text === "+" || text === "-" || text === "*" || text === "/";
        },

        clearData() {
            this.calculatorStore.text = "0";
            this.calculatorStore.formula = "";
            this.firstNumber = null;
            this.secondNumber = null;
            this.calculationCompleted = false;
        },
        computeResult() {
            try {
                this.calculatorStore.text = eval(this.calculatorStore.formula);
            } catch (error) {
                this.calculatorStore.text = "Error";
            }
            this.calculatorStore.formula += "=" + this.calculatorStore.text;
            this.calculationCompleted = true;
        },
    }
};
</script>
