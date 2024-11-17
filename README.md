En este video, me gustaría hablar sobre los **bucles** y cómo los usaríamos en **Svelte** si alguna vez quisiéramos recorrer un conjunto de datos, como un arreglo, y mostrar un poco de HTML para cada elemento de ese arreglo.

La mejor manera de aprender esto es con un ejemplo. Ya he limpiado todo el script y el HTML dentro de la etiqueta `<main>` aquí. Ahora, voy a crear una variable llamada `people` y asignarle un arreglo. Dentro de ese arreglo, pegaré estos tres objetos. Estos datos provienen de mi repositorio de **GitHub**.

Cada uno de estos objetos representa a una sola persona, con las propiedades `name` (nombre), `beltColor` (color del cinturón), `age` (edad) y `id` (identificador). Veremos por qué necesitamos un `id` más adelante, ya que **Svelte** lo requiere cuando usamos bucles.

### Cómo mostrar datos manualmente

Si quisiéramos mostrar un poco de HTML para cada uno de estos elementos, ¿cuáles son las opciones? Podríamos hacerlo manualmente, de la siguiente forma:

```html
<div>
  <h4>{people[0].name}</h4>
  <p>{people[0].beltColor}</p>
</div>
<div>
  <h4>{people[1].name}</h4>
  <p>{people[1].beltColor}</p>
</div>
<div>
  <h4>{people[2].name}</h4>
  <p>{people[2].beltColor}</p>
</div>
```

Esto funcionaría, pero no es la forma más eficiente. Si tuviéramos 20 elementos en el arreglo, tendríamos que hacer esto 20 veces. Y si tuviéramos 100 elementos, lo haríamos 100 veces. Además, no siempre sabemos cuántos datos hay en el arreglo, ya que podrían venir de una base de datos. No sabríamos cuántos elementos debemos mostrar.

Por lo tanto, esta no es la forma más eficaz de hacerlo. En su lugar, deberíamos usar un **bucle** para recorrer estos datos y mostrar el HTML correspondiente para cada uno.

### Usando un bucle `each` en Svelte

La forma correcta de hacerlo en **Svelte** es usando el bucle `each`. Para esto, usamos llaves `{}` y la palabra clave `each`. Esto funciona de manera similar a un bucle `forEach` en JavaScript. Así es como lo haríamos:

```html
{#each people as person}
<div>
  <h4>{person.name}</h4>
  <p>{person.age} años, {person.beltColor} cinturón</p>
</div>
{/each}
```

Lo que está pasando aquí es que **Svelte** recorrerá el arreglo `people` y, por cada elemento, mostrará un bloque de HTML. En este caso, el bloque de HTML contiene el nombre, la edad y el color del cinturón de cada persona. Cada vez que pase por el arreglo, la variable `person` representará uno de los objetos del arreglo.

Así que en la primera iteración, `person` será el primer objeto del arreglo, en la segunda iteración será el segundo, y en la tercera será el tercero. Esto simplifica muchísimo la forma en que generamos HTML dinámico.

### Vinculando un identificador único

Cuando usamos bucles `each` en **Svelte**, es recomendable asignar una clave única a cada elemento dentro del arreglo. Para ello, podemos pasar la propiedad de clave al bucle.

Vamos a usar la propiedad `id` de cada persona como clave única:

```html
{#each people as person (person.id)}
<div>
  <h4>{person.name}</h4>
  <p>{person.age} años, {person.beltColor} cinturón</p>
</div>
{/each}
```

Al usar `(person.id)`, **Svelte** puede hacer un seguimiento de qué elemento del DOM está vinculado con cada ítem del arreglo. Esto es muy útil para la manipulación de datos y evita posibles problemas cuando modificamos los datos o el DOM en el futuro.

Aunque en este momento el efecto de esto puede parecer pequeño, es una buena práctica para asegurar que **Svelte** pueda enlazar correctamente los elementos del DOM con los datos, especialmente cuando los datos cambian o se manipulan más tarde.

### Usando `else` dentro de un bucle `each`

Además, si quieres manejar el caso en el que el arreglo esté vacío, puedes usar la palabra clave `else` dentro del bloque `each`. De esta forma, si el arreglo no tiene elementos, se mostrará un mensaje indicando que no hay personas para mostrar:

```html
{#each people as person (person.id)}
<div>
  <h4>{person.name}</h4>
  <p>{person.age} años, {person.beltColor} cinturón</p>
</div>
{:else}
<p>No hay personas para mostrar.</p>
{/each}
```

Esto es útil si en algún momento el arreglo está vacío. Si guardamos y probamos esto ahora, no verá el mensaje de "No hay personas para mostrar" porque el arreglo no está vacío. Sin embargo, si comentamos los objetos dentro del arreglo y guardamos los cambios, se mostrará el mensaje.

### Conclusión

Así es como usamos un **bucle `each`** para mostrar un bloque de HTML para cada elemento dentro de un arreglo en **Svelte**. En el siguiente video, me gustaría mostrarte cómo podemos eliminar estos elementos haciendo clic en ellos.

---

Este es el texto ordenado y traducido para que sea más claro y fácil de entender. Espero que te sea útil para comprender cómo trabajar con bucles en **Svelte**.
