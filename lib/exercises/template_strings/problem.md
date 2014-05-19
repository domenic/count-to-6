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

You will be given a name as the first argument to your program (`process.argv[2]`). You should output a two-line message, first greeting that entity, and then telling them their name in lowercase. For example, if the name was `"Domenic"`, you would output:

```
Hello, Domenic!
Your name lowercased is "domenic".
```

You can start by doing this using ES5 constructs if you like, but the correct solution should use a single ES6 template string.
