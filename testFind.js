import find from "./find.js";

const items = [1, 2, 3, 4, 5, 5]; 

function callbackFunction(element){
    return element > 3;
}

const result = find(items,callbackFunction);

console.log(result);