let values = [3, 1, 3, 5, 2, 4, 4, 4];
let uniqueValues = [...new Set(values)];
// uniqueValues is [3, 1, 5, 2, 4]

// Maps and Sets iteration

const names = new Map();
names.set(1, 'one');
names.set(2, 'two');

for (const [number, name] of names) {
    console.log(number, name);
}
// logs 1, 'one'
// logs 2, 'two'

const colors = new Set(['white', 'blue', 'red', 'white']);

for (color of colors) {
    console.log(color);
}
// 'white'
// 'blue'
// 'red'