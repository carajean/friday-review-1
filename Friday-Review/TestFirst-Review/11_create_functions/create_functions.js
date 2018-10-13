// passes all tests. key concepts: closure and scope

function createFunctions(num) {
    var functionArray = [];

    function makeFunction(num) {
        var func = function () {
            return num;
        }
        return func;
    }

    for (var i = 0; i < num; i++) {
        functionArray.push(makeFunction(functionArray.length));
    }
    return functionArray;
}