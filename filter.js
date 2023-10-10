function filter(elements, cb) {
   let result = [];
   for(let index = 0; index < elements.length; index++){
       if(cb(elements[index])){
           result.push(elements[index]);
       }
   }
   return result;
}

export default filter;