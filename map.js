function map(elements, cb) {
    let result = [];
    for(let index = 0; index < elements.length; index++) {
        result.push(cb(elements[index], index));
    }
    return result;
}

export default map;