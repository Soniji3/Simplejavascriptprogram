
function first(array, n) {
    if (n === undefined) {
        // If n is not provided, return the first element
        return array[0];
    } else if (n < 0) {
        // If n is negative, return an empty array
        return [];
    } else {
        // Otherwise, return the first 'n' elements of the array
        return array.slice(0, n);
    }
}

// Test Data
console.log(first([7, 9, 0, -2]));           // Output: 7
console.log(first([], 3));                   // Output: []
console.log(first([7, 9, 0, -2], 3));        // Output: [7, 9, 0]
console.log(first([7, 9, 0, -2], 6));        // Output: [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3));       // Output: []
