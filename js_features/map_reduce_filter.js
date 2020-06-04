/*
Простой поиск (чувствительный к регистру)

*Метод filter() создает новый массив со всеми элементами, которые проходят условие, реализованного предоставленной функцией.
* */

let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let res = users.filter(it => it.name.includes('oli'));

/*
* Простой поиск (не чувствительный к регистру)
*
*
* */
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let res = users.filter(it => new RegExp('oli', "i").test(it.name));
// res is
// [
//     { id: 97, name: 'Oliver', age: 28, group: 'admin' }
// ]

/*
* Проверка есть ли у пользователей права администратора
*
* Метод some() проверяет, соответствует ли хотя бы один элемент в массиве условию, реализованному в предоставленной функцией.
* */
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let hasAdmin = users.some(user => user.group === 'admin');
// hasAdmin is true

/*
*Сглаживание массива массивов
*
* */

let nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((acc, it) => [...acc, ...it], []);
// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]

/*
*Создание объекта, который содержит частоту использования ключей
* */

let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let groupByAge = users.reduce((acc, it) =>
        ({ ...acc, [it.age]: (acc[it.age] || 0) + 1 }),
    {});
// groupByAge is {23: 1, 28: 2, 34: 1}

/*
* Индексирование массива объектов (таблица соответствий)
*
* */

let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let uTable = users.reduce((acc, it) => ({...acc, [it.id]: it }), {})
// uTable equals:
// {
//     11: { id: 11, name: 'Adam', age: 23, group: 'editor' },
//     47: { id: 47, name: 'John', age: 28, group: 'admin' },
//     85: { id: 85, name: 'William', age: 34, group: 'editor' },
//     97: { id: 97, name: 'Oliver', age: 28, group: 'admin' }
// }

/*
* Извлечение уникальных значений для определенного ключа для каждого элемента в массиве.
* */
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let listOfUserGroups = [...new Set(users.map(it => it.group))];
// listOfUserGroups is ['editor', 'admin'];

/*
* Обратное мапирование объекта типа ключ/значение
* */

let cities = {
    Lyon: 'France',
    Berlin: 'Germany',
    Paris: 'France'
};
let countries = Object.keys(cities).reduce(
    (acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc) , {});
// countries is
// {
//     France: ["Lyon", "Paris"],
//         Germany: ["Berlin"]
// }

let countries = Object.keys(cities).reduce((acc, k) => {
    let country = cities[k];
    acc[country] = [...(acc[country] || []), k];
    return acc;
}, {});

/*
* Создание массива значений Фаренгейта из массива значений Цельсия
* */

let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
let fahrenheit = celsius.map(t => t * 1.8 + 32);
// fahrenheit is [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]

/*
* Кодировать объекта в строку запроса
* */

let params = {lat: 45, lng: 6, alt: 1000};
let queryString = Object.entries(params).map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&')
// queryString is "lat=45&lng=6&alt=1000"

/*
*Отображение таблицы пользователей в виде читаемой строки только с указанными ключами
* */


let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
users.map(({id, age, group}) => `\n${id} ${age} ${group}`).join('')
// it returns:
// "
// 11 23 editor
// 47 28 admin
// 85 34 editor
// 97 28 admin"


/*
* Поиск и замена пары ключ-значение в массиве объектов
*
* */

let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let updatedUsers = users.map(
    p => p.id !== 47 ? p : {...p, age: p.age + 1}
);
// John is turning 29 now

/*
* Объединение (A ∪ B) массивов
*
* */

let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
[...new Set([...arrA, ...arrB])]; // returns [1, 4, 3, 2, 5, 6, 7]


/*
 *
 * Поиск пересечений в массивах (A ∩ B)
 *
 */
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
arrA.filter(it => arrB.includes(it)); // returns [1, 2]


let rr = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]];
var twoCitySchedCost = function(costs) {
    return costs.reduce((acc, it) => ( acc+= Math.min(it[0], it[1])), 0)
};

console.log(twoCitySchedCost(rr));
