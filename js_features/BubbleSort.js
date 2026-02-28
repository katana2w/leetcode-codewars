var m = [1, 7, 5, 13, 8],
    count = m.length - 1,
    max;

for (var i = 0; i < count; i++) {
    for (var j = 0; j < count - i; j++) {
        if (m[j] > m[j + 1]) {
            max = m[j];
            m[j] = m[j + 1];
            m[j + 1] = max;
        }
    }
}