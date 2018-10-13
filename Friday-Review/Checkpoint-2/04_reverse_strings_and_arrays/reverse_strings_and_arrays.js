//passes all tests. Key concepts: nested loops, descending for loops, for-in loops, Array.isArray, typeof

// Fullstack solution is cleaner but basically the same idea

function reverseStringsAndArrays(arr) {
  let result = [];
  // descending for loop to reverse array
  for(let i = arr.length -1; i >= 0; i--){
    let e = arr[i];
    // check for array
    if(Array.isArray(e)){
      result.push(reverseStringsAndArrays(e));
    }
    // check for string
    else if(typeof e === 'string'){
      result.push(e.split('').reverse().join(''));
    }
    // check for object literal
    else if(typeof e ==='object'){
      // iterate through object properties looking for arrays or strings
      for(let key in e){
        if(Array.isArray(e[key])){
          e[key] = reverseStringsAndArrays(e[key]);
        }else if(typeof e[key] === 'string'){
          e[key] = reverseStringsAndArrays(e[key]).join('');
        }
      }
      // push formatted object to result array
      result.push(e);
    }
    else{
      result.push(e);
    }
  }
  return result;
}

console.log(reverseStringsAndArrays([10,[20,'thirty', [40, 50, 60, 'seventy'], 80], 90,{greeting:'hi'},null]));