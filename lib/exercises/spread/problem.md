ES6 provides two closely related concepts, **rest** and **spread**, for variadic functions with a variable number of arguments. In this exercise we'll explore the **spread** side of things.

An example of a variadic function would be `Math.max`, which you can call with any number of arguments: `Math.max(1, 2)` or `Math.max(1, 2, 3)` or ...

In ES6, you can use the `...args` syntax to "spread" an array out when calling such a function. For example:

```js
var numbers = [1, 1, 2, 3, 5, 8];
var max = Math.max(...numbers);
```

This replaces the need for our old friend, `.apply`. Good riddance!

## Challenge

You'll be given a variable number of arguments (`process.argv[2]` onward) to your program, all of which will be numbers. Use the ES6 spread operator to find the minimum value of these numbers and log it to the console.

And let's log the list of numbers themselves, to make it clearer. So the output should be, for example:

```
The minimum of [18,5,7,24] is 5
```
