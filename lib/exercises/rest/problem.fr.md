À présent que nous avons vu l’opérateur de décomposition, voyons son cousin, les paramètres **rest**.

Les paramètres rest sont utiles lorsque vous voulez écrire une fonction qui prend un nombre quelconque d‘arguments, mais traiter ceux-ci comme un tableau. Par exemple :

```js
function sum(...args) {
    var result = 0;
    args.forEach(function (value) {
        result += value;
    });

    return result;
}

sum(1, 2, 3); // => 6
```

Remarquez que dans l’exemple ci-dessus, `args` est un véritable tableau, puisqu’on peut appeler sa méthode `.forEach()` et toutes les autres. De la même manière que l’opérateur de décomposition nous débarrasse des bidouilles à base de `.apply()`, les paramètres rest envoient aux oubliettes la vieille astuce du `Array.prototype.slice.call(arguments)`. En fait, vous n’aurez probablement plus jamais à utiliser cet affreux objet `arguments`. Hourra !

## Défi

Cet exercice utilise un format un peu différent de ceux que nous avons faits jusqu’ici. Cette fois, vous allez écrire un module Node, dont l’export par défaut sera une fonction de moyenne. Vous **n’afficherez rien** sur la console. Votre solution devrait avoir l’aspect suivant :

```js
module.exports = function average(/* que met-on ici ? */) {
    // et que met-on là ?
};
```

Nous testerons votre module en lui passant diverses séries d’arguments, par exemple `average(1, 2, 3)` et `average(5, 10)`, et en vérifiant qu’il fonctionne bien dans tous les cas de figure.

À part ça, le processus ne change pas, comme en attestent les instructions ci-dessous.
