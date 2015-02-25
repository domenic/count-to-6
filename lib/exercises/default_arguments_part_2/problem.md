In JavaScript, unlike some other languages, default arguments can be expressions:

```js
function log(arg, transform = x => x) {
    console.log(transform(arg));
}

log("Hello");                       // => "Hello"
log("Hello", y => y.toUpperCase()); // => "HELLO"
```

In this example, the default value for the `transform` argument is the identity function, `x => x`.

Default argument values can even depend on earlier arguments:

```js
function assertEquals5(val, error = `${val} does not equal 5!`) {
    assert.strictEqual(val, 5, error);
}

assertEquals5(3); // "3 does not equal 5!"
```

## Challenge

For this exercise, you should write a Node module whose default export is a function that will make a string really important. It should do this by adding a bunch of exclamation marks after it. The exact number of exclamation marks should be configurable, but by default, it should be equal to the length of the string. So:

```js
makeImportant("Hi", 5);             // => "Hi!!!!!"
makeImportant("Hi");                // => "Hi!!"
makeImportant("Hello?", undefined); // => "Hello?!!!!!!"
```

Bonus ES6 knowledge that might be helpful: ES6 includes a `String.prototype.repeat` that does exactly what you'd imagine.
