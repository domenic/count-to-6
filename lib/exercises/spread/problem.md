ES6 provides two closely related concepts, _rest_ and _spread_, for functions with variadic numbers of arguments. In this exercise we'll explore the spread side of things.

In ES6, you can use the `...args` syntax to "spread" an array out when calling a function that takes a variadic number of arguments. For example,

```js
var numbers = [1, 1, 2, 3, 5, 8];
var max = Math.max(...numbers);
```

This replaces the need for our old friend, `.apply`. Good riddance!

---

You'll be given a variable number of arguments to your program, all of which will be numbers. Use the ES6 spread operator to find the minimum value of these numbers and log it to the console.
