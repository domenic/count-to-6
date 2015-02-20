En ES6, les fonctions peuvent avoir des arguments par défaut :

```js
function sayHello(greeting = "Bonjour", name = "CampJS") {
    console.log(`${greeting} ${name} !`);
}
```

Quand on appelle la fonction sans arguments pour ces positions, les valeurs par défaut sont utilisées à la place :

```js
sayHello();         // "Bonjour CampJS !"
sayHello("Salut");  // "Salut CampJS !"
```

Vous pouvez aussi passer `undefined` pour n’importe quelle position d’argument afin d’en utiliser la valeur par défaut, si elle est définie :

```js
sayHello(undefined, undefined); // "Bonjour CampJS !"
sayHello("Yo", undefined);      // "Yo CampJS !"
sayHello(undefined, "JSConf");  // "Bonjour JSConf !"
```

Remarquez que `undefined` est la **seule** valeur qui déclenchera le recours à la valeur par défaut. Les valeurs *falsy*, telles que `null`, `false`, `""` ou `0` seront utilisées telles quelles :

```js
sayHello(null, 0); // "null 0 !"
```

## Défi

Comme dans l’exercice sur les paramètres **rest**, vous devez écrire un module Node dont l’export par défaut est une fonction. Cette fois-ci, elle prendra deux arguments : une borne basse et une borne haute. Elle renverra le point milieu entre les deux.

Toutefois, elle se doit d’avoir des valeurs par défaut pertinentes. La borne basse devrait valoir par défaut `0`, et la borne haute `1`.

Comme précédemment, n’affichez rien dans la console. Votre solution devrait avoir l’aspect suivant :

```js
module.exports = function midpoint(/* que met-on ici ? */) {
    // et que met-on là ?
};
```

Nous testerons votre module en lui passant diverses séries d’arguments, parfois aucun, parfois un, parfois deux. Parfois nous passerons même explicitement `undefined`, aussi vous devriez vous assurer de traiter ce cas comme étant celui par défaut.
