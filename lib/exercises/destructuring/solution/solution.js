let args = process.argv.slice(2);
let result = {};

[, result.username, result.email] = args;

console.log(result);