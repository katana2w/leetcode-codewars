reduceString = function(str, amount) {
    var re = new RegExp("(.)(?=\\1{" + amount + "})","g");
    return str.replace(re, "");
}