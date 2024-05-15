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
            operator: null,
            calculationCompleted: false,
            result: null,
            lastOperator: null
        };
    },
    methods: {
        append(label) {
            if (!this.calculationCompleted && this.calculatorStore.text !== "DIGIT LIMIT MET") {
                if (this.calculatorStore.text === "0" || this.isOperator(this.calculatorStore.text)) {
                    this.calculatorStore.text = label;
                    this.calculatorStore.formula += label;
                    this.result = null;
                } else {
                    if (this.calculatorStore.text.length + label.length <= 23) {
                        this.calculatorStore.text += label;
                        this.calculatorStore.formula += label;
                    } else {
                        this.calculatorStore.text = "DIGIT LIMIT MET";
                    }
                }
            } else if (this.result !== null) {
                if (this.isOperator(label)) {
                    // Store the result as the first number and set the operator
                    this.firstNumber = this.result;
                    this.operator = label;
                    this.calculatorStore.formula += label;
                    this.calculatorStore.text = label;
                } else {
                    // Treat the entered number as the second number

                    this.calculatorStore.text = label;
                    this.calculatorStore.formula += label;
                    this.calculationCompleted = false;
                    this.operator = label;
                }
            }
            else {
                this.calculatorStore.formula = "";
                this.calculatorStore.text = label;
                this.calculatorStore.formula += label;
                this.calculationCompleted = false;
                this.result = null
            }
        },

        isOperator(text) {
            return text === '+' || text === '-' || text === '*' || text === '/';
        },
        clearData() {
            this.calculatorStore.text = "0"
            this.calculatorStore.formula = ""
            this.firstNumber = null
            this.secondNumber = null
            this.result = null
            this.calculationCompleted = false;
        },
        addition() {
            if (this.lastOperator == null && this.result == null) {
                this.firstNumber = parseFloat(this.calculatorStore.text);
                this.calculatorStore.formula += "+"
                this.calculatorStore.text = "+"
                this.operator = "+"
                this.lastOperator = this.operator
            } else if (this.lastOperator == "+" || this.lastOperator == "*" || this.lastOperator == "/" || this.lastOperator == "-") {
                this.firstNumber = parseFloat(this.calculatorStore.formula.slice(0, -1));
                this.calculatorStore.formula = this.calculatorStore.formula.slice(0, -1) + this.operator
                this.calculatorStore.text = "+"
                this.operator = "+"
            } else {
                this.firstNumber = this.result;
                this.operator = "+"; // Set the operator for the next operation
                this.calculatorStore.formula += "+";
                this.calculatorStore.text = "+";
            }
        },
        // subtraction() {
        //     if (this.lastOperator == null) {
        //         this.firstNumber = parseFloat(this.calculatorStore.text);
        //         this.calculatorStore.formula += "-"
        //         this.calculatorStore.text = "-"
        //         this.operator = "-"
        //         this.lastOperator = this.operator
        //     } else if (this.lastOperator == "-") {
        //         this.calculatorStore.text = "-"
        //         this.operator = "-"
        //         this.firstNumber = parseFloat(this.calculatorStore.formula.slice(0, -1));
        //         this.calculatorStore.formula = this.calculatorStore.formula.slice(0, -1) + this.operator

        //     } else {
        //         this.secondNumber = parseFloat("-" * this.secondNumber)
        //         this.calculatorStore.formula += "-"
        //         this.calculatorStore.text = "-"
        //         console.log(this.secondNumber)
        //     }
        // },
        division() {
            if (this.lastOperator == null) {
                this.firstNumber = parseFloat(this.calculatorStore.text);
                this.calculatorStore.formula += "/"
                this.calculatorStore.text = "/"
                this.operator = "/"
                this.lastOperator = this.operator
            } else if (this.lastOperator == "+" || this.lastOperator == "*" || this.lastOperator == "/" || this.lastOperator == "-") {
                this.calculatorStore.text = "/"
                this.operator = "/"
                this.firstNumber = parseFloat(this.calculatorStore.formula.slice(0, -1));
                this.calculatorStore.formula = this.calculatorStore.formula.slice(0, -1) + this.operator

            }
        },
        multiplication() {
            if (this.lastOperator == null) {
                this.firstNumber = parseFloat(this.calculatorStore.text);
                this.calculatorStore.formula += "*"
                this.calculatorStore.text = "*"
                this.operator = "*"
                this.lastOperator = this.operator
            } else if (this.lastOperator == "+" || this.lastOperator == "*" || this.lastOperator == "/" || this.lastOperator == "-") {
                this.calculatorStore.text = "*"
                this.operator = "*"
                this.firstNumber = parseFloat(this.calculatorStore.formula.slice(0, -1));
                this.calculatorStore.formula = this.calculatorStore.formula.slice(0, -1) + this.operator

            }
        },
        clearAndEnableInput() {
            this.operator = null;
            this.firstNumber = null;
            this.calculationCompleted = false;
            this.lastOperator = null
        },
        computeResult() {
            if (this.operator != null) {
                const operatorIndex = this.calculatorStore.formula.indexOf(this.calculatorStore.text);
                this.secondNumber = parseFloat(this.calculatorStore.formula.substring(operatorIndex));
                switch (this.operator) {
                    case '+':
                        this.result = this.firstNumber + this.secondNumber;
                        break;
                    case '-':
                        this.result = this.firstNumber - this.secondNumber;
                        break;
                    case '/':
                        if (this.secondNumber !== 0) {
                            this.result = this.firstNumber / this.secondNumber;
                        } else {
                            this.result = 'Syntax Error';
                        }
                        break;
                    case '*':
                        this.result = this.firstNumber * this.secondNumber;
                        break;
                    default:
                        return this.operator = null;
                }

                this.calculatorStore.text = this.result;
                this.calculatorStore.formula += "=" + this.result.toString();
                this.calculationCompleted = true;
                this.operator = null;
                this.lastOperator = null;
                this.firstNumber = this.result; // Set the result as the first number for the next operation
            } else {
                // If operator is null, reset and prepare for the next calculation
                this.firstNumber = parseFloat(this.calculatorStore.text);
                this.calculatorStore.formula = this.firstNumber;
                this.calculatorStore.formula += "=" + this.firstNumber.toString();
                this.result = this.firstNumber;
                this.calculationCompleted = true;
                this.lastOperator = null;
            }
        }

    },

};
</script>
