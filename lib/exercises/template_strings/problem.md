ES6 template strings provide syntactic sugar for constructing strings. They allow both string interpolation, with syntax like

```js
`Hello, ${person}!`
```

and multiline strings, with

```js
`Hello,
world!`
```

---

You will be given a name as the first argument to your program (`process.argv[2]`). You should output a two-line message, first greeting that entity, and then telling them the current date/time (in ISO 8601 format). For example, if the name was `"Domenic"`, you would output:

```
Hello, Domenic!
The current date/time is 2014-05-18T18:20:30.308Z.
```

You can start by doing this using ES5 constructs if you like, but the correct solution should use a single ES6 template string.
