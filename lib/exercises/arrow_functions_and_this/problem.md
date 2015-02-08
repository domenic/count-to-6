Arrow functions help to make the confounding issue of `this` less counfounding.

Arrow functions lexically bind the value of `this`. It is very likely that you do not know what that sentence means. And that's OK.

What you most likely need to know is that the value of `this` in arrow functions is more likely to be what one would naively expect. Let's look at a contrived example.

```js
var foot = {
  kick: function () {
    this.yelp = 'Ouch!';
    setImmediate(function () {
      console.log(this.yelp);
    });
  }
}
foot.kick();
```

When the call to `console.log()` occurs, you might expect `this.yelp` to contain 'Ouch!'. In fact, it is undefined.

Declaring the anonymous callback used as a parameter for `setImmediate()` would result in this code working as expected.

Let's do exactly that. Starting with the code above, replace the anonymous function passed to `setImmediate()` with an arrow function.

Hint: To pass no parameters to an arrow function, you can use `()`.
