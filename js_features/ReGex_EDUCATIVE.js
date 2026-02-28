// Detect a number in a string

containsNumber = function(str) {
    return /\d/.test(str);
}

// Detect a repeating letter in a string

containsRepeatingLetter = function(str) {
    return (/([a-zA-Z]).*?\1/).test(str)
}

// Determine whether a string ends with a vowel (aeiou)

endsWithVowel = function(str) {
    return (/[aeiou]$/).test(str.toLowerCase())
}

// for begin and end - will be /^[aeiou].*[aeiou]$/



// Return first 3 consecutive digits
// or return false
captureThreeNumbers = function(str) {
    if((/[0-9]\d\d/).test(str)) {
        return +(str.match(/\d+/).toString().substring(0,3))
    } else {
        return false;
    }
}

// Does string match the pattern XXX-XXX-XXXX
// where X is a digit.
isPhoneNumber = function(str) {
    return (/\b\d{3}\b-\b\d{3}\b-\b\d{4}\b/).test(str)
}

