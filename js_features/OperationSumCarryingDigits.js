function res(a, b, result, carry, base, ress) {
    if(a.length == 0 && b.length == 0 && !carry)
        return ress;

    //берем младшие разряды
    var left = parseInt(a.pop() || '0', 10);
    var right = parseInt(b.pop() || '0', 10);

    //складываем и добавляем перебор с прошлой итерации
    var l = left + right + (carry || 0);

    //вызываем для следующих разрядов, правильно вычисляя добавленную цифру и цифру переноса
    return res(a, b, l % base + (result || ""), Math.floor(l/base), base, (Math.floor(l/base) > 0 ? ress += 1 : ress));
}

function add(a, b) {
    return res(a.toString().split(""), b.toString().split(""), "","",10, 0).toString();
}

function another(n1, n2) {
    let res = 0;
    if(n1 === 0 || n2 === 0) return res;
    let a1 = Array.from(n1.toString(), Number);
    let a2 = Array.from(n2.toString(), Number);
    let carry = 0;
    while (a1.length > 0 || a2.length > 0) {
        let a1Item = a1.pop() || 0;
        let a2Item = a2.pop() || 0;

        let l = a1Item + a2Item + (carry || 0);
        carry = Math.floor(l/10);
        res = (carry > 0 ? res += 1 : res)
    }
    return res;
}

// console.log(add(9999, 1))
console.log(another(145, 55))
// console.log(another(9999, 1))