L'affectation par décomposition est une opération qui rend possible l'extraction de variables depuis des tableaux ou des objets. Il s'agit d'une technique très pratique permettant d'extraire rapidement et sans fioritures les données nécessaires d'une structure complexe.

```js
let numbers = [1, 2, 3];
let [foo, bar] = numbers;

console.log(foo); // 1
console.log(bar); // 2
```

Dans l'exemple ci-dessus, la valeur de la première case du tableau est affectée à la variable `foo` et la valeur de la seconde case à la variable `bar`.

Il est aussi possible d'assigner les valeurs à des propriétés d'un objet littéral en utilisant cette syntaxe :

```js
let numbers = [1, 2, 3];
let data = {};
[data.foo, data.bar] = numbers;

console.log(data); // { foo: 1, bar: 2 }
```

Lorsqu'on décompose des tableaux, il est possible d'omettre des valeurs :

```js
let numbers = [1, 2, 3];
let [foo, , baz] = numbers; // Si je n'ai pas besoin du deuxième élément

console.log(foo); // 1
console.log(baz); // 3
```

Tout comme les tableaux, les objets littéraux JavaScript peuvent être décomposés et affectés :

```js
let box = {width: 10, height: 5, depth: 4};
let {width: x, depth} = box;

console.log(x, depth); // 10 4
//mais
console.log(width); // ReferenceError: width is not defined
```

## Défi

Admettons que nous voulons extraire certaines informations bien spécifiques d'un tableau d'utilisateurs ayant la forme suivante :

```js
[userId, username, email, age, firstName, lastName]
```

Les différentes valeurs de ce tableau vous seront fournies en paramètres d'entrée. Voici comment les récupérer :
```js
let userArray = process.argv.slice(2); // userArray vaudra par exemple [1, "jdoe", "jdoe@example.com", "John", "Doe"]
```

Votre mission si vous l'acceptez sera d'extraire les informations du **nom d'utilisateur** et de son **email** et de les assigner aux propriétés d'un objet littéral qui doivent s'appeler `username` et `email`.

Vous devrez ensuite logguer cet objet littéral pour valider le défi.

```js
let userArray = process.argv.slice(2);

// votre solution ici ...

console.log(/* votre résultat */); // {username: "jdoe", email: "john@doe.com"}
```
