var numbers = process.argv.slice(2);
var min = Math.min(...numbers);

console.log(`Le minimum de [${numbers}] est ${min}`);
