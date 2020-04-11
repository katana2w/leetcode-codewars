function check (brackets) {
    let stack = [];
    for (let i = 0; i < brackets.length; i++) {
        switch (brackets.charAt(i)) {
            case '(':
                stack.push(')');
                break;
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            default:
                if (stack.pop() !== brackets.charAt(i)) {
                    return false;
                }
        }
    }
    return stack.length === 0;
}

check('{[()]}');
check('{[(])}');