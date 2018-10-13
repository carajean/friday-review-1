// passes all tests. key concepts: closures, basic Array methods

function rotater(str){
    let reverse = false;
    function innerFunc(rotations){
        if(rotations >= str.length){
            reverse = reverse === true ? false:true;
        }
        let result = str.split('');
        for(let i = 1; i <= rotations; i++){
            if(!reverse){
                result.push(result.splice(0,1));
            }else{
                result.unshift(result.splice(result.length -1,1))
            }
            
        }

        return result.join('');
    }

    return innerFunc;
}

