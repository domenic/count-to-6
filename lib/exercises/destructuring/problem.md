The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables. It is a useful technique that allows extracting necessary data from complex elements.

```js
let numbers = [1, 2, 3];
let [foo, bar] = numbers;

console.log(foo); // 1
console.log(bar); // 2
```

In the above example, the value of the first cell of `numbers` is being assigned to a variable `foo` and the value of the second cell to a variable `bar`. 

A slightly different syntax is needed in order to assign cell values to object properties, instead of variables:

```js
let numbers = [1, 2, 3];
let data = {};
[data.foo, data.bar] = numbers;

console.log(data); // { foo: 1, bar: 2 }
```

When destructuring arrays, it is possible to omit any value:

```js
let numbers = [1, 2, 3];
let [foo, , baz] = numbers; // I don't need the second element

console.log(foo); // 1
console.log(baz); // 3
```

Objects can also be destructured:

```js
let box = {width: 10, height: 5, depth: 4};
let {width: x, depth} = box;

console.log(x, depth); // 10 4
//but
console.log(width); // ReferenceError: width is not defined
```

## Challenge

Let's assume that we need to extract certain pieces of information concerning a user from an input array, which has the following format:

```js
[userId, username, email, age, firstName, lastName]
```

The consecutive values of this array will be given as execution parameters, so you can obtain them using:
```js
let userArray = process.argv.slice(2); // userArray equals here e.g. [1, "jdoe", "jdoe@example.com", "John", "Doe"]
```

Your task is to extract information about the username and email to a separate object containing two properties - `username` and `email` - and log it out.

```js
let userArray = process.argv.slice(2);

// what goes here?

console.log(/* your result */); // {username: "jdoe", email: "john@doe.com"}
```
