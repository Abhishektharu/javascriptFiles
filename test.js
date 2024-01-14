function memoize(fn) {
    const cache = new Map(); // A map to store cached results

    return function (...args) {
        const key = JSON.stringify(args); // Generate a unique key based on the arguments

        if (cache.has(key)) {
            // If the result is already cached, return it
            console.log("Result retrieved from cache");
            return cache.get(key);
        } else {
            // Otherwise, calculate the result, cache it, and return it
            const result = fn(...args);
            cache.set(key, result);
            console.log("Result calculated and cached");
            return result;
        }
    };
}

// Example usage
function expensiveOperation(x, y) {
    console.log("Performing expensive operation...");
    return x + y;
}

const memoizedExpensiveOperation = memoize(expensiveOperation);

console.log(memoizedExpensiveOperation(2, 3)); // Output: Performing expensive operation... \n Result calculated and cached \n 5
console.log(memoizedExpensiveOperation(2, 3)); // Output: Result retrieved from cache \n 5
console.log(memoizedExpensiveOperation(2, 3)); // Output: Result retrieved from cache \n 5
console.log(memoizedExpensiveOperation(2, 3)); // Output: Result retrieved from cache \n 5
console.log(memoizedExpensiveOperation(1, 3)); // Output: Result retrieved from cache \n 5

