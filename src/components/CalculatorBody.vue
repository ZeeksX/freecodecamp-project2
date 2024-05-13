<template>
    <div class="calculator">
        <div id="formula">{{ calculatorStore.formula }}</div>
        <div id="result">{{ calculatorStore.text }}</div>
        <div class="row" id="row1">
            <div class="calc" id="clear" @click="clearData">
                <div class="button-wrapper">AC</div>
            </div>
            <div class="calc oper" id="division" @click="performOperation('/')">
                <div class="button-wrapper">/</div>
            </div>
            <div class="calc oper" id="multiplication" @click="performOperation('x')">
                <div class="button-wrapper">x</div>
            </div>
        </div>
        <div class="row" id="row2">
            <div class="calc num" id="seven" @click="updateFormula('7')">
                <div class="button-wrapper">7</div>
            </div>
            <div class="calc num" id="eight" @click="updateFormula('8')">
                <div class="button-wrapper">8</div>
            </div>
            <div class="calc num" id="nine" @click="updateFormula('9')">
                <div class="button-wrapper">9</div>
            </div>
            <div class="calc oper" id="subtraction" @click="performOperation('-')">
                <div class="button-wrapper">-</div>
            </div>
        </div>
        <div class="row" id="row3">
            <div class="calc num" id="four" @click="updateFormula('4')">
                <div class="button-wrapper">4</div>
            </div>
            <div class="calc num" id="five" @click="updateFormula('5')">
                <div class="button-wrapper">5</div>
            </div>
            <div class="calc num" id="six" @click="updateFormula('6')">
                <div class="button-wrapper">6</div>
            </div>
            <div class="calc oper" id="addition" @click="performOperation('+')">
                <div class="button-wrapper">+</div>
            </div>
        </div>
        <div class="row" id="row4">
            <div class="calc num" id="one" @click="updateFormula('1')">
                <div class="button-wrapper">1</div>
            </div>
            <div class="calc num" id="two" @click="updateFormula('2')">
                <div class="button-wrapper">2</div>
            </div>
            <div class="calc num" id="three" @click="updateFormula('3')">
                <div class="button-wrapper">3</div>
            </div>
            <div class="calc oper" id="equals" @click="performOperation('=')">
                <div class="button-wrapper">=</div>
            </div>
        </div>
        <div class="row" id="row5">
            <div class="calc num" id="zero" @click="updateFormula('0')">
                <div class="button-wrapper">0</div>
            </div>
            <div class="calc num" id="dot" @click="updateFormula('.')">
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
        updateFormula(label) {
            if (this.calculatorStore.formula.slice(-1) === '+' ||
                this.calculatorStore.formula.slice(-1) === '-' ||
                this.calculatorStore.formula.slice(-1) === 'x' ||
                this.calculatorStore.formula.slice(-1) === '/') {
                // Don't append operator again
                this.calculatorStore.text = label;
            } else {
                this.calculatorStore.text += label;
                this.calculatorStore.formula += label;
            }
        },
        clearData() {
            this.calculatorStore.text = "0"
            this.calculatorStore.formula = ""
            this.firstNumber = ""
            this.secondNumber = ""
        },
        // performOperation(oper) {
        //     if (oper === '+' || oper === '-' || oper === 'x' || oper === '/') {
        //         // Store the first number and operation
        //         this.firstNumber = parseFloat(this.calculatorStore.text);
        //         this.calculatorStore.formula = this.firstNumber + oper;
        //         this.calculatorStore.text = oper;
        //     } else if (oper === '=') {
        //         // Store the second number and evaluate the expression
        //         this.secondNumber = parseFloat(this.calculatorStore.text);
        //         let result;
        //         switch (this.calculatorStore.formula.slice(-1)) {
        //             case '+':
        //                 result = this.firstNumber + this.secondNumber;
        //                 console.log("First number:", this.firstNumber);
        //                 console.log("Second number:", this.secondNumber);

        //                 break;
        //             case '-':
        //                 result = this.firstNumber - this.secondNumber;
        //                 console.log("First number:", this.firstNumber);
        //                 console.log("Second number:", this.secondNumber);

        //                 break;
        //             case 'x':
        //                 result = this.firstNumber * this.secondNumber;
        //                 console.log("First number:", this.firstNumber);
        //                 console.log("Second number:", this.secondNumber);

        //                 break;
        //             case '/':
        //                 result = this.firstNumber / this.secondNumber;
        //                 console.log("First number:", this.firstNumber);
        //                 console.log("Second number:", this.secondNumber);

        //                 break;
        //             default:
        //                 result = 0;
        //                 console.log("First number:", this.firstNumber);
        //                 console.log("Second number:", this.secondNumber);
        //             // Default result if no operation is performed
        //         }
        //         // Update the text and formula with the result
        //         this.calculatorStore.text = result.toString();
        //         this.calculatorStore.formula += this.secondNumber + ' = ' + result;
        //     }
        // }
        performOperation(oper) {
            if (oper === '+' || oper === '-' || oper === 'x' || oper === '/') {
                // Store the first number and operation
                this.firstNumber = parseFloat(this.calculatorStore.text);
                this.calculatorStore.formula = this.firstNumber + oper;
                // Clear the text to display the second number
                this.calculatorStore.text = "";
            } else if (oper !== '=') {
                // If not equals sign, append number to second number
                this.calculatorStore.text += oper;
            } else {
                this.secondNumber = parseFloat(this.calculatorStore.text);
                let result;
                switch (this.calculatorStore.formula.slice(-1)) {
                    case '+':
                        result = this.firstNumber + this.secondNumber;
                        console.log("First number:", this.firstNumber);
                        console.log("Second number:", this.secondNumber);

                        break;
                    case '-':
                        result = this.firstNumber - this.secondNumber;
                        console.log("First number:", this.firstNumber);
                        console.log("Second number:", this.secondNumber);

                        break;
                    case 'x':
                        result = this.firstNumber * this.secondNumber;
                        console.log("First number:", this.firstNumber);
                        console.log("Second number:", this.secondNumber);

                        break;
                    case '/':
                        result = this.firstNumber / this.secondNumber;
                        console.log("First number:", this.firstNumber);
                        console.log("Second number:", this.secondNumber);

                        break;
                    default:
                        result = 0;
                        console.log("First number:", this.firstNumber);
                        console.log("Second number:", this.secondNumber);
                    // Default result if no operation is performed
                }
                // Update the text and formula with the result
                this.calculatorStore.text = result.toString();
                this.calculatorStore.formula += this.secondNumber + ' = ' + result;
            }
        }
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
</style>