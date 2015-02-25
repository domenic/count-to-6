Les **fonctions fléchées** (fonctions utilisant la nouvelle syntaxe avec `=>`) sont une des nouvelles fonctionalités d’ES6 les plus sympa.

Dans cet exercice, on va se concentrer sur leur utilisation la plus courante : réduire le code de fonctions simples. En ES6, on écrit une fonction fléchée comme ceci :

```js
x => x + 1
```

…et ça correspond au code ES5 suivant :

```js
function (x) { return x + 1; }
```

Plutôt sympa, n’est-ce pas ? Vous pouvez mettre n’importe quelle expression sur la droite du `=>`, et ça deviendra votre valeur de retour. C’est particulièrement utile lorsqu’on fait des opérations au travers d’itérateurs tels que `map` ou `filter` sur des collections.

Remarquez que si vous avez besoin de plusieurs arguments, il vous faudra les enrober entre des parenthèses, comme ceci :

```js
(x, y) => x + y
```

## Défi

Votre programme recevra sur la ligne de commande un nombre variable d’arguments (à partir de `process.argv[2]` et au-delà), qui seront tous à traiter comme des `String`s. Utilisez les fonctions fléchées pour effectuer une opération de map-reduce sur ces données, avant d’afficher le résultat en console.

En gros, votre solution devrait ressembler à ça :

```js
var inputs = process.argv.slice(2);
var result = inputs
  .map(/* là on met quoi ? */)
  .reduce(/* et là, on met quoi ? */);
```

Plus spécifiquement, vous devrez :

- Transformer chaque `String` entrante en son premier caractère ;
- Réduire le tableau obtenu en concaténant les caractères ensemble.

Du coup, une entrée `["Salut", "les", "fonctions", "fléchées"]` produirait `"Slff"`.

Affichez le résultat sur la console, qu’on puisse le voir, en respectant le format suivant :

```
[Salut,les,fonctions,fléchées] devient "Slff"
```
