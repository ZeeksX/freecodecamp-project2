<template>
    <div class="calculator">
        <div id="formula">5</div>
        <div id="result">0</div>
        <div id="controls">
            <div id="clear"><span>AC</span></div>
            <div id="division"><span>/</span></div>
            <div id="multiplication"><span>x</span></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CalculatorBody"
}
</script>
<style>
#clear,#division, #multiplication{
    padding: 0.0625rem 0.375rem;
}
#clear{
    width: 60%;
    background-color: #AC3939;
}
#division, #multiplication{
    width: 20%;
    background-color: #666666;
}
#controls{
    display: flex;
    flex-direction: row;
}
#formula{
    min-height: 1.25rem;
    font-family: digital;
    font-size: 1.25rem;
    color: orange;
    text-align: right;
    vertical-align: text-top;
    line-height: 1.25rem;
}
#result{
    font-size: 29px;
    font-family: digital;
    color: white;
    text-align: right;
    line-height: 35px;
}
</style>