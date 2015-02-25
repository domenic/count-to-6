En JavaScript, contrairement à certains autres langages, les arguments par défaut peuvent être des **expressions** :

```js
function log(arg, transform = x => x) {
    console.log(transform(arg));
}

log("Bonjour");                       // => "Bonjour"
log("Bonjour", y => y.toUpperCase()); // => "BONJOUR"
```

Dans l’exemple ci-dessus, la valeur par défaut pour le paramètre `transform` est la fonction identité, `x => x`.

Les valeurs des arguments par défaut peuvent même **dépendre d’arguments précédents** :

```js
function assertEquals5(val, error = `${val} n’est pas égal à 5 !`) {
    assert.strictEqual(val, 5, error);
}

assertEquals5(3); // "3 n’est pas égal à 5 !"
```

## Défi

Pour cet exercice, écrivez un module Node dont l’export par défaut est une fonction qui va rendre une `String` très, très importante. Pour ce faire, elle lui ajoutera un paquet de points d’exclamation sur la fin. Le nombre exact de points d’exclamation doit être configurable, mais par défaut, il devrait être égal à la longueur de la chaîne. Du coup :

```js
makeImportant("Hé", 5);              // => "Hé!!!!!"
makeImportant("Hé");                 // => "Hé!!"
makeImportant("Salut ?", undefined); // => "Salut ?!!!!!!!"
```

Un petit bonus ES6 qui pourrait s’avérer utile : on a désormais une méthode `String.prototype.repeat()` qui fait exactement ce que vous croyez.
