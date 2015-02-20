Arrow functions help to make the confounding issue of `this` less confounding.

Arrow functions lexically bind the value of `this`. It is very likely that you do not know what that sentence means. And that's OK.

What you need to know is that the value of `this` in arrow functions is the same as it was in the enclosing scope. That is, the `this` value inside an arrow function is the same as the `this` value outside of it. Let's look at an example.

```js
var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(function () {
            console.log(this.yelp);
        });
    }
};
foot.kick();
```

When the call to `console.log()` occurs, a beginning JavaScript programmer might expect `this.yelp` to contain `"Ouch!"`. In fact, it is `undefined`, because the function we passed to `setImmediate` got its own `this` (which by default is the global object, which has no `yelp` property). In ES5, you might work around this with hacks like:

```js
setImmediate(function () {
    console.log(this.yelp);
}.bind(this));
```

or even

```js
var that = this;
setImmediate(function () {
    console.log(that.yelp);
});
```

In ES6, arrow functions allow us to avoid such workarounds and instead just say what we mean. If we use an arrow function for the callback to `setImmediate`, the code will work as expected.

## Challenge

Let's do exactly that. Starting with the original code example above, replace the anonymous function passed to `setImmediate` with an arrow function.

## Hint

To declare an arrow function that expects no arguments, you can use `() => ...`.
