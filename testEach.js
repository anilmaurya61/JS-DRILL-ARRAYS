import each from "./each.js";

const items = [1, 2, 3, 4, 5, 5]; 

function callback(item, index){
    console.log(`Item at index ${index}: ${item}`);
}

each(items, callback);

