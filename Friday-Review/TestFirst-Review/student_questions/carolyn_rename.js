const renameFiles = (arr) => {
    let renamed = [];
    let counter = {};

    //count indiv. file names
    arr.forEach(file => {
        if (!(counter.hasOwnProperty(file))) {
            counter[file] = 1;
        } else {
            counter[file]++;
        }
    })

    for (let file in counter) {
        let count = counter[file];
        //push single files
        if (count === 1) {
            renamed.push(file)
            debugger;
        } 

        //duplicate files
        else {
            //push original filename once
            renamed.push(file);
            debugger;
            //iterate over duplicates
            for (let i = count; i >= 2; i--) {
                renamed.push(`${file}(${count})`);
                debugger;
            }
        }
    }
    return renamed;
}

console.log(renameFiles([
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
])); 