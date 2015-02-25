Les chaînes de caractères interpolables ES6 (à l’avenir, on dira comme en anglais, hein : « template strings », c’est quand même nettement plus court…) utilisent une nouvelle syntaxe de `String`, basée sur des **backticks** (**\`**) au lieu des apostrophes (`'`) ou guillemets (`"`) habituels. Les template strings vous offrent des possibilités bien plus puissantes pour construire du texte. Elles autorisent l’interpolation, avec la syntaxe que voici :

```js
`Salut, ${person}! 1 + 1 = ${1 + 1} !`
```

Elles peuvent aussi être multi-lignes, rien qu’en plaçant un saut de ligne littéral dans la chaîne :

```js
`Bonjour,
monde !`
```

## Défi

Votre programme recevra un nom comme premier argument sur sa ligne de commande (`process.argv[2]`). Vous devez afficher un message sur deux lignes, qui commence par saluer cette personne, puis lui indique son nom en minuscules. Par exemple, si le nom est « Domenic », vous afficheriez :

```
Bonjour, Domenic !
Ton nom en minuscules est "domenic".
```

Vous pouvez bien sûr commencer par faire ça en ES5 classique, mais la solution véritablement correcte utilise **une seule** template string ES6, et n’a pas recours à l’opérateur `+`.
