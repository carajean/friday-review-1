function reverseStringsAndArrays(arr) {
  return arr
    .map(val => {

      if (Array.isArray(val)) return reverseStringsAndArrays(val);

      if (typeof val === 'object') {
        for (let key in val) {
          if (Array.isArray(val[key])) {
            val[key] = reverseStringsAndArrays(val[key]);
            return val;
          }

          if (typeof val[key] === 'string') {
            val[key] = val[key]
              .split('')
              .reverse()
              .join('');
            return val;
          }
          return val;
        }
      }

      if (typeof val === 'string') {
        return val
          .split('')
          .reverse()
          .join('');
      }

      return val;
    })
    .reverse();
}

console.log(reverseStringsAndArrays([10,[20,'thirty', [40, 50, 60, 'seventy'], 80], 90,{greeting:'hi'},null]));