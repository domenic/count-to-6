ES6 fournit deux nouveaux concepts étroitement liés : le **rest** et le **spread** (« décomposition »), pour les fonctions dont le nombre d’arguments varie. Dans cet exercice, nous allons explorer la partie décomposition.

Un exemple classique de fonction variadique (dont le nombre d’arguments varie) est `Math.max`, qu’on peut appeler avec un nombre quelconque d’arguments : `Math.max(1, 2)` ou `Math.max(1, 2, 3)` ou…

En ES6, vous pouvez utiliser la syntaxe `...args` pour « décomposer » un tableau en valeurs individuelles, notamment quand vous appelez ce genre de fonction. Par exemple :

```js
var numbers = [1, 1, 2, 3, 5, 8];
var max = Math.max(...numbers);
```

Ça remplace un cas d’utilisation de notre vieux copain `.apply()`, et c’est tant mieux !

## Défi

Votre programme recevra un nombre variable d’arguments sur sa ligne de commande (à partir de `process.argv[2]` et au-delà), et tous seront à traiter comme des nombres. Utilisez l’opérateur de décomposition d’ES6 pour trouver la plus petite valeur parmi ces nombres, et l’afficher sur la console.

Et tant qu’à faire, affichons la liste des nombres d’abord, pour que ça soit clair. Votre affichage devrait donc avoir le format suivant :

```
Le minimum de [18,5,7,24] est 5
```
