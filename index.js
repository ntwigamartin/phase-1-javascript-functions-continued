// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun('play football'));

const mondayWork = function(toDo = 'go to the office') {
    return `This Monday, I will ${toDo}.`
}
console.log(mondayWork());

function wrapAdjective(symbol = '*') {
    return function (adj = "special") {
        return `You are ${symbol}${adj}${symbol}!`;
    }
}
console.log(wrapAdjective("%")("a good man"));