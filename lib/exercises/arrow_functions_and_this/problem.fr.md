Les fonctions fléchées nous aident aussi à mieux maîtriser la valeur de `this`, ce qui évite quelques confusions.

Les fonctions fléchées utilisent un `this` lexical. Vous ne savez probablement pas ce que ça veut dire. Et ce n’est pas grave.

Ce que vous avez besoin de savoir, c’est que la valeur de `this` dans une fonction fléchée est la même que celle dans la portée qui l’entoure. Si vous préférez, la valeur de `this` dans une fonction fléchée est la même que celle de `this` juste autour de cette fonction (dans le code). Étudions un exemple.

```js
var foot = {
    kick: function () {
        this.yelp = "Aïeuh !";
        setImmediate(function () {
            console.log(this.yelp);
        });
    }
};
foot.kick();
```

Quand l’appel à `console.log()` a lieu, un développeur JavaScript débutant pourrait s’attendre à ce que `this.yelp` contienne `"Aïeuh !"`. En réalité, il est `undefined`, car la fonction que nous avons passée à `setImmediate()` a son propre `this` (qui, par défaut, est l’objet global, qui n’a pas de propriété `yelp`). En ES5, on dispose de plusieurs astuces pour contourner ce phénomène :

```js
setImmediate(function () {
    console.log(this.yelp);
}.bind(this));
```

ou même :

```js
var that = this;
setImmediate(function () {
    console.log(that.yelp);
});
```

En ES6, les fonctions fléchées nous permettent d’éviter ce type de contournement et de juste écrire ce qu’on veut dire. Si nous utilisons une fonction fléchée comme fonction de rappel pour `setImmediate()`, le code fonctionnera comme on s’y attend.

## Défi

Faisons ça, tiens. En partant du premier code d’exemple ci-dessus, remplacez la fonction de rappel anonyme passée à `setImmediate()` par une fonction fléchée.

## Conseil

Pour déclarer une fonction fléchée qui n’attend aucun argument, vous devrez utiliser `() => …`.
