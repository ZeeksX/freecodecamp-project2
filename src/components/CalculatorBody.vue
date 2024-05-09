<template>
    <div class="calculator">
        <div id="formula">5</div>
        <div id="result">0</div>
        <div class="row" id="controls">
            <div id="clear"><span>AC</span></div>
            <div class='calc oper' id="division"><span>/</span></div>
            <div class='calc oper' id="multiplication"><span>x</span></div>
        </div>
        <div class="row" id="row2">
            <div class='calc num' id="seven"><span>7</span></div>
            <div class='calc num' id="eight"><span>8</span></div>
            <div class='calc num' id="nine"><span>9</span></div>
            <div class='calc oper' id="subtraction"><span>-</span></div>
        </div>
        <div class="row" id="row3">
            <div class='calc num' id="four"><span>4</span></div>
            <div class='calc num' id="five"><span>5</span></div>
            <div class='calc num' id="six"><span>6</span></div>
            <div class='calc oper' id="addition"><span>+</span></div>
        </div>
        <div class="row" id="row4">
            <div class='calc num' id="one"><span>1</span></div>
            <div class='calc num' id="two"><span>2</span></div>
            <div class='calc num' id="three"><span>3</span></div>
            <div class="calc" id="equals">
                <span>=</span>
            </div>
        </div>
        <div class="row" id="row5">
            <div class='calc num' id="zero"><span>0</span></div>
            <div class='calc num' id="dot"><span>.</span></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CalculatorBody"
}
</script>
<style>
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

.calc.num {
    background-color: #4D4D4D;
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
    font-family: digital;
    font-size: 1.25rem;
    color: orange;
    text-align: right;
    vertical-align: text-top;
    line-height: 1.25rem;
}

#result {
    font-size: 29px;
    font-family: digital;
    color: white;
    text-align: right;
    line-height: 35px;
}
</style>