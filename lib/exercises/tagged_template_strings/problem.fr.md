En plus des possibilités déjà évoquées, les template strings peuvent être **tagged**. On fait ça en préfixant un nom de fonction, par exemple `fn`, juste devant le littéral. Par exemple :

```js
fn`Bonjour ${you} ! Tu as l’air ${adjective} aujourd’hui !`
```

La sémantique d’une **tagged template string** est très différente de celle d’une template string classique. Fondamentalement, c’est un type spécial d’appel de fonction ; le code ci-dessus est en fait du « sucre syntaxique » pour le code suivant :

```js
fn(["Bonjour ", " ! Tu as l’air ", " aujourd’hui !"], you, adjective);
```

Remarquez comme le (n + 1)-ème argument correspond à la substitution qui doit avoir lieu entre la n-ème et la (n + 1)-ème chaîne du tableau initial. Ainsi, il y aura toujours au moins une chaîne de plus qu’il n’y a de substitutions ; dans l’exemple ci-dessus, on a 3 chaînes pour 2 substitutions.

Cette fonctionnalité peut s’avérer utile dans tout un tas de cas, mais celui qui vient immédiatement à l’esprit est l’échappement automatique des variables interpolées. Par exemple, vous pourriez écrire une fonction d’échappement HTML, la nommer `html()`, et vous pourriez alors faire :

```js
html`<p title="${title}">Bonjour ${you} !</p>`
```

…qui renverrait une `String` avec les variables interpolées aux bons endroits, mais avec tous leurs caractères dangereux pour HTML remplacés par les entités appropriées.

## Défi

Eh bien, faisons ça, justement. Votre programme recevra deux arguments en ligne de commande : un nom d’utilisateur, et un commentaire. Les eux risquent de contenir des caractères dangereux pour HTML (à savoir `'`, `"`, `<`, `>` et `&`). Votre travail consiste à utiliser les tagged template strings pour afficher une construction HTML du commentaire qui soit sécurisée pour les parties dynamiques (interpolées).

Par exemple, si le nom d’utilisateur est `"Domenic"` et le commentaire est `"<dl> est une balise sympa"`, vous devriez afficher :

```html
<b>Domenic dit</b> : "&lt;dl&gt; est une balise sympa"
```

Comme par le passé, vous pouvez commencer par réaliser ça en ES5 traditionnel. Mais l’objectif ici est d’écrire une fonction qui puisse être utilisée comme **tag** pour des tagged template strings, et qui fera l’échappement automatiquement.

## Conseils

Si vous n’avez pas en tête les entités HTML nécessaires, les voici :

```
' | &apos;
" | &quot;
< | &lt;
> | &gt;
& | &amp;
```

Souvenez-vous que la meilleure manière de faire des remplacements globaux de texte en JavaScript, ce sont les expressions rationnelles, par exemple :

```js
var replacedS = originalS.replace(/a/g, "b");
```

L’aspect général de votre programme devrait être le suivant :

```js
console.log(html`<b>${process.argv[2]} dit</b> : "${process.argv[3]}"`);

function html(/* que met-on là ? */) {
    // et que met-on ici ?
    // N’oubliez pas de renvoyer la `String` échappée !
}
```

Si vous ne savez pas par où commencer, pourquoi ne pas afficher avec `console.log()` les arguments que reçoit votre fonction `html()` ?

Pour finir, n’hésitez pas à utiliser les paramètres rest si vous trouvez qu’ils vous facilitent la tâche !
