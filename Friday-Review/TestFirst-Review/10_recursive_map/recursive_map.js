// passes all tests. Key concept is recursion, Array.isArray

function recursiveMap(arr,cb){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let e = arr[i];
        if(Array.isArray(e)){
            let subArr = recursiveMap(e,cb);
            subArr.forEach(x => result.push(x));
        }else{
            result.push(cb(e));
        }
        
    }

    return result;
}

// console.log(recursiveMap([1, 2, 3, 4], num => {
//     return num * 2;}));

// console.log(recursiveMap(['keep', 'practicing', 'recursion'], str => {
//     return str.toUpperCase();
//   }));

 console.log(recursiveMap([1, 2, [3, 4], [5, 6]], num => {
    return num * 2;
  })); //[2, 4, 6, 8, 10, 12]



