// Old challenge from FCC. Blast from the past and still passes all tests.

function translatePigLatin(str) {
    var strArray = str.split(' ');
    var pigArr = [];
    function transCon(word) {
        var wordArr = word.split('');
        var result = [];
        for (var j = 0; j < wordArr.length; j++) {
            var myChar = wordArr[j];
            if ((/^[aeiou]$/i).test(myChar)) {
                var segment = wordArr.slice(j, wordArr.length);
                result.splice(0, 0, segment.join(''));
                result.push('ay');
                break;
            } else {
                result.push(myChar);
            }

        }
        pigArr.push(result.join(''));
    }

    for (var i = 0; i < strArray.length; i++) {
        var nextWord = strArray[i];
        if ((/[aeiou]/).test(nextWord[0])) {
            pigArr.push(nextWord + 'way');
        } else {
            transCon(nextWord);
        }
    }

    result = pigArr.join(' ');
    return result;
}

console.log(translatePigLatin('do you know the pig latin'));