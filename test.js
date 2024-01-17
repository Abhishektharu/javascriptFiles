const functionPairsMap = new Map();

functionPairsMap.set('key1', function (a, b) {
    return a + b;
});

functionPairsMap.set('key2', function (x, y) {
    return x * y;
});

// Accessing and calling functions
const result1 = functionPairsMap.get('key1')(2, 3); // result1 = 5
const result2 = functionPairsMap.get('key2')(4, 5); // result2 = 20
console.log(result1);