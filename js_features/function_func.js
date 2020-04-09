let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // использует func, чтобы снова вызвать себя же
    }
};

sayHi(); // Hello, Guest

// А вот так - не cработает:
func(); // Ошибка, func не определена (недоступна вне функции)