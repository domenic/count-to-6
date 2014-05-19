In addition to the features you already learned about, template strings can be _tagged_. This is done by placing a function name before the template string, like so:

```js
fn`Hello ${you}! You're looking ${adjective} today!`
```

The semantics of a tagged template string are very different from those of a normal one. In essence, they are a special type of function call: the above "desugars" into

```js
fn(["Hello ", "! You're looking ", " today!"], you, adjective);
```

Note how the (n + 1)th argument corresponds to the substitution that takes place between the nth and (n + 1)th entries in the string array.

This can be useful for all sorts of things, but one of the most straightforward is automatic escaping of any interpolated variables. For example, you could write a HTML-escaping function such that

```js
html`<p title="${title}">Hello ${you}!</p>`
```

returns a string with the appropriate variables substituted in, but with all HTML-unsafe characters replaced.

---

In fact, let's do that right now. You will be given two arguments to your program: a username, and a comment. Both will potentially contain HTML-unsafe characters (namely `'`, `"`, `<`, `>`, and `&`). Your job is to use tagged template strings to log a HTML rendering of the comment.

For example, if the username is "domenic" and the comment is "<dl> is a fun tag", you should output

```html
<b>domenic says:</b> "&lt;dl&gt; is a fun tag"
```

As before, you could start doing this using simple ES5 constructs. But the goal is for you to write a function that you can use as a tag in a tagged template string, that will do any escaping automatically.

By the way, if you don't remember the corresponding escape sequences, they are:

```
' | &#39;
" | &quot;
< | &lt;
> | &gt;
& | &amp;
```
