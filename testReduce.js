import reduce from "./reduce.js";

const elements = [1, 2, 3, 4, 5, 5];

function callbackFunction(accumulator, current){
    return accumulator + current;
}

const sum = reduce(elements,callbackFunction,0);

console.log(sum);