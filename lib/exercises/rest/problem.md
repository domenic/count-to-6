Now that you know how to use the spread operator, we can introduce you to its counterpart, **rest parameters**.

Rest parameters are used when you want to write a function that accepts a variadic number of arguments, but acts on them as if they were an array. For example:

```js
function sum(...args) {
    var result = 0;
    args.forEach(function (value) {
        result += value;
    });

    return result;
}

sum(1, 2, 3); // 6
```

Note that in the above example, `args` is a real array, with a `forEach` method and everything. Just like the spread operator helps us get rid of `.apply`, rest parameters help us get rid of `Array.prototype.slice.call(arguments)`. In fact, you should never need to use the horrible `arguments` object again. Yayyyy!

## Challenge

This exercise uses a slightly different format than usual. This time, your goal is to write a Node module whose default export is an average function. You *don't* need to print anything to the console. That is, your solution should look something like:

```js
module.exports = function average(/* what goes here */) {
    // what goes here?
};
```

We'll test your module by passing it a few different sets of arguments, e.g. `average(1, 2, 3)` and `average(5, 10)`, and making sure that it works in all cases.

Otherwise, the process is the same as before: use `{appname} verify program.js` to test your result, and so on.
