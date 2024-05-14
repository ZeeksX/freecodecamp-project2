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
                    if (this.calculatorStore.text.length + label.length <= 23) {
                        this.calculatorStore.text += label;
                        this.calculatorStore.formula += label;
                    } else {
                        this.calculatorStore.text = "DIGIT LIMIT MET";
                    }
                }
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
            this.calculationCompleted = false;
        },
        addition() {
            this.firstNumber = parseFloat(this.calculatorStore.text)
            this.calculatorStore.formula += "+" // Add the operator to the formula
            this.calculatorStore.text = "+"
            this.operator = "+"
        },
        subtraction() {
            this.firstNumber = parseFloat(this.calculatorStore.text)
            this.calculatorStore.formula += "-" // Add the operator to the formula
            this.calculatorStore.text = "-"
            this.operator = "-"
        },
        division() {
            this.firstNumber = parseFloat(this.calculatorStore.text)
            this.calculatorStore.formula += "/" // Add the operator to the formula
            this.calculatorStore.text = "/"
            this.operator = "/"
        },
        multiplication() {
            this.firstNumber = parseFloat(this.calculatorStore.text)
            this.calculatorStore.formula += "." // Add the operator to the formula
            this.calculatorStore.text = "x"
            this.operator = "x"
        },
        computeResult() {
            let result = '';
            const operatorIndex = this.calculatorStore.formula.indexOf(this.calculatorStore.text);
            this.secondNumber = parseFloat(this.calculatorStore.formula.substring(operatorIndex));

            switch (this.operator) {
                case '+':
                    result = this.firstNumber + this.secondNumber;
                    break;
                case '-':
                    result = this.firstNumber - this.secondNumber;
                    break;
                case '/':
                    if (this.secondNumber !== 0) {
                        result = this.firstNumber / this.secondNumber;
                    } else {
                        result = 'ERROR: Division by zero';
                    }
                    break;
                case 'x':
                    result = this.firstNumber * this.secondNumber;
                    break;
                case '=':
                    result = this.firstNumber
                    break;    
                default:
                    console.log(this.calculationCompleted)
                    result = 'ERROR: Invalid operation';

            }
            // Reset calculator state
            this.calculatorStore.text = result.toString();
            this.calculatorStore.formula += "=" + result.toString();
            this.operator = null;
            this.calculationCompleted = true
        }
    },

};
</script>

<style>
.calculator {
    width: 20rem;
}

.disabled {
    pointer-events: none;
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