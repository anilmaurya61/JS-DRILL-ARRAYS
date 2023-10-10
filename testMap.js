import map from "./map.js";

const items = [1, 2, 3, 4, 5, 5]; 

function callback(item){
    return item * 2;
}

const result = map(items, callback);

console.log(result);