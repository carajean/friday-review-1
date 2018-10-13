// passes all tests. This was a good one. I had to step through it in the debugger a few times before I got it. 

function renameFiles(arr){
    let result = [];
    let store = {};

    // iterate through result and add file name to store. If store has file name already, increment its value instead
    arr.forEach(e => {
        if(store.hasOwnProperty(e)){
            store[e]++;
        }else{
            store[e] = 0;
        }
    });

    // go through arr in descending order. if store has a value for that entry greater than zero, append (value) and decrement. If element(value) already exists, run a while loop starting with element(1) until it finds something unique.

    // if anyone hasn't seen it the whole `${}` thing is called string interpolation. Cool feature! Note the backticks instead of quotes.

    for(let i = arr.length -1; i >= 0; i--){
        let e = arr[i];
        if(store[e] > 0){
            let temp = 1;
            while(store.hasOwnProperty(e + `(${temp})`) || result.indexOf(e + `(${temp})`) !== -1){
                temp++;
            }
            result.push(e + `(${temp})`);
            store[e]--;
        }else{
            result.unshift(e);
        }
    }
    return result;
}

let files = [
    'a(1)',
    'a(6)',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
  ];
let newFileNames = renameFiles(files);
console.log(newFileNames);

// [ 'a(1)', 'a(6)', 'a', 'a(11)', 'a(2)', 'a(3)', 'a(4)', 'a(5)', 'a(10)', 'a(7)', 'a(8)', 'a(9)' ]

// [ 'a(1)', 'a(6)', 'a', 'a(2)', 'a(3)', 'a(4)', 'a(5)', 'a(7)', 'a(8)', 'a(9)', 'a(10)', 'a(11)' ]

