wordWrap = function(str, cols) {
    var formatedString = '',
        wordsArray = [];


    wordsArray = str.split(' ');

    formatedString = wordsArray[0];

    for (var i = 1; i < wordsArray.length; i++) {
        if (wordsArray[i].length > cols) {
            formatedString += '\n' + wordsArray[i];
        } else {
            if (formatedString.length + wordsArray[i].length > cols) {
                formatedString += '\n' + wordsArray[i];
            } else {
                formatedString += ' ' + wordsArray[i];
            }
        }
    }
    return formatedString
}