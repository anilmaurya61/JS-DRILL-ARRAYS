function flatten(elements) {
    let outputArray = [];
    recursion(0,elements, outputArray);
    return outputArray;
}

function recursion(index, elements, outputArray) {
    if(index >= elements.length) return;

    if(Array.isArray(elements[index])){
        recursion(0, elements[index], outputArray);
    }
    else{
        outputArray.push(elements[index]);
    }

    recursion(index + 1, elements, outputArray);
}

export default flatten;