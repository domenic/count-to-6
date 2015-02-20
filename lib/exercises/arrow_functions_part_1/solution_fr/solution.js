var inputs = process.argv.slice(2);
var result = inputs
  .map(s => s[0])
  .reduce((soFar, s) => soFar + s);

console.log(`[${inputs}] devient "${result}"`);
