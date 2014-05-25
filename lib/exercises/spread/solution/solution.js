var numbers = process.argv.slice(2);
var min = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${min}`);
