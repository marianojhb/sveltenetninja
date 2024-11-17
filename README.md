En el último video, recorrimos los datos y mostramos un fragmento de HTML para cada persona en el arreglo usando el bucle `each`. Como podemos ver aquí, todo parece estar bien. Ahora imagina que quiero colocar un botón en cada persona, y cuando hacemos clic en ese botón, eliminamos a esa persona del arreglo de datos. Cuando eso sucede, debemos actualizar los datos, lo que debería reflejar ese cambio en el navegador y volver a renderizar la lista.

Podemos hacer esto. Primero, agreguemos el botón aquí abajo. Es un botón (no `button`), y escribimos "Eliminar" dentro de él. Necesitamos agregar un controlador de clics a este botón porque vamos a reaccionar cuando el usuario haga clic en él. Dentro de este controlador, vamos a hacer referencia a una función, por ejemplo, `handleClick`, pero puedes llamarla como quieras. Luego, necesitamos crear esa función aquí arriba:

```javascript
const handleClick = () => {
  // Lógica para eliminar a la persona
}
```

Entonces, ¿cómo eliminamos a la persona del arreglo? El problema aquí es que no sabemos qué persona eliminar porque no estamos pasando esa persona como argumento a la función. No podemos acceder a la persona dentro de esta función. Si intento hacer un `console.log(person)` aquí, no vamos a poder acceder a esa variable.

Si refrescamos y tratamos de eliminar algo, veremos que aparece el error: `person is not defined`.

Esto sucede porque, aunque estamos haciendo referencia a la función dentro del bucle, donde sí tenemos acceso a `person`, **no tenemos acceso a esa variable dentro de la función del controlador de clics**. Para solucionarlo, necesitamos encontrar una forma de pasar los datos a la función como un parámetro o argumento. Por ejemplo, podemos pasar el objeto `person` o incluso su `ID`:

```html
<button on:click="{handleClick(person.id)}">Eliminar</button>
```

El problema aquí es que estamos invocando la función automáticamente, lo que significa que la función se ejecutará tan pronto como se renderice el componente, no cuando realmente haga clic. Esto sucederá porque estamos usando paréntesis en la invocación de la función, lo que provoca que la función se ejecute inmediatamente. Si tienes código para eliminar a la persona, se ejecutará de inmediato, lo cual no es lo que queremos.

Déjame mostrarte esto en acción. Si hago `console.log(person)` dentro de la función, verás que el código se ejecuta automáticamente para cada persona en el arreglo. Queremos evitar esto, por lo que debemos cambiar la forma en que llamamos a la función.

En lugar de invocar la función directamente, podemos usar una función inline (en línea). Por ejemplo:

```html
<button on:click="{()" ="">handleClick(person.id)}>Eliminar</button>
```

Con esta sintaxis, la función no se invocará automáticamente. Solo se ejecutará cuando el usuario haga clic en el botón. Ahora, si hacemos un `console.log` en el cuerpo de esa función inline, veremos que el log solo se muestra cuando se hace clic en el botón, lo que funciona correctamente.

Pero no queremos solo hacer un log, queremos eliminar la persona. Así que, dentro de la función `handleClick`, pasamos el `id` de la persona y usaremos ese `id` para filtrar el arreglo de personas y eliminar al que corresponda.

Para eliminar a una persona del arreglo, usaremos el método `filter` de JavaScript. El método `filter` recorre el arreglo y ejecuta una función de devolución de llamada (callback) por cada elemento. Si la función devuelve `true`, se mantiene el elemento en el arreglo; si devuelve `false`, se elimina.

El código sería algo como esto:

```javascript
const handleClick = (id) => {
  people = people.filter((person) => person.id !== id)
}
```

Este código filtra el arreglo de personas y mantiene solo aquellas personas cuyo `id` no coincide con el `id` que pasamos al hacer clic en el botón. Esto elimina la persona seleccionada.

Ahora, necesitamos reasignar el valor de `people` con el nuevo arreglo filtrado, porque **Svelte** observa los cambios y vuelve a renderizar la lista automáticamente cuando se realiza esta reasignación.

Si guardamos y probamos esto, al hacer clic en "Eliminar" veremos cómo la persona se elimina del arreglo y se actualiza la lista.

### Event Object

Una cosa más: los controladores de eventos en **Svelte** funcionan de la misma manera que en JavaScript estándar. Si necesitas trabajar con el objeto del evento (por ejemplo, para obtener información sobre el evento), puedes pasarlo a la función. Sin embargo, en este caso no necesitamos el objeto del evento, pero si lo quisiéramos, podríamos pasarle el `event` como argumento de esta manera:

```javascript
const handleClick = (event, id) => {
  console.log(event) // Aquí obtendríamos el objeto del evento
  people = people.filter((person) => person.id !== id)
}
```

En este caso, también podemos obtener el objeto del evento, pero no lo necesitamos para este ejemplo específico, así que lo eliminamos.

### Resumen

En resumen, hemos creado una función inline para manejar el clic en el botón sin invocar la función automáticamente. Luego, hemos utilizado el método `filter` de JavaScript para eliminar una persona del arreglo basándonos en su `id`. Finalmente, hemos reasignado el arreglo filtrado a `people` para que **Svelte** actualice la lista en el navegador.

En el próximo video, veremos cómo trabajar con condicionales en las plantillas de **Svelte**.

---

Esta es la traducción del texto original, explicando cómo manejar clics en un botón para eliminar elementos de un arreglo en **Svelte**. Espero que te sea útil.
