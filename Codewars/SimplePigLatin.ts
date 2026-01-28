/**
 *
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 *
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 */

export function pigIt(str: string): string {
    return str
        .split(" ")
        .map(token => {
            // если токен НЕ состоит только из букв — это пунктуация/что-то ещё, не трогаем
            if (!/^[A-Za-z]+$/.test(token)) return token;

            // переносим первую букву в конец + "ay"
            return token.slice(1) + token[0] + "ay";
        })
        .join(" ");
}

// Примеры:
console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !"));     // elloHay orldway !
