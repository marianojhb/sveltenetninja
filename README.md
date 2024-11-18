# Dispatching custom events

Bueno, entonces, ahora tenemos nuestro formulario acá y cuando enviamos este formulario estamos simplemente imprimiendo estos distintos valores en la consola, pero al final lo que queremos hacer es tomar esos datos y agregar una nueva persona a este array con esos datos, un nuevo objeto basado en esos datos. Ahora, para hacer eso, tenemos que tomar los datos de este formulario, todo lo que tenemos acá, y pasarlos al componente padre, para que puedan ser agregados a este array, porque podemos editar directamente esos datos (este array) solo desde este componente, no dentro del componente del formulario en sí.

Entonces, creo que necesitamos manejar el evento de envío de este formulario dentro del componente padre, no necesariamente en el componente del formulario. Ahora, podrías pensar que podríamos usar el **event forwarding** en este evento de envío, como vimos antes dentro del **Modal**, donde usamos el **event forwarding** en los eventos de click y los manejamos en el componente padre, así.

El problema con eso es que no nos permitiría enviar los datos que tenemos desde el formulario hacia el árbol de componentes, porque cuando usamos el **event forwarding** no pasamos ningún dato, simplemente reenviamos el evento tal cual. Entonces no podríamos agregar personas al array de esta manera.

Por eso, no usamos **event forwarding**. En su lugar, vamos a **despachar** (dispatch) lo que se conoce como un **evento personalizado** desde nuestro formulario y luego enviar esos datos al componente padre. Así que empecemos con esto y vamos a modificar el **Add Person Form**.

Lo primero que tenemos que hacer es importar `createEventDispatcher` de la librería de Svelte. Entonces, escribimos:

```js
import { createEventDispatcher } from 'svelte'
```

Ahora necesitamos crear una función `dispatch`, que es lo que vamos a usar para despachar el evento personalizado. Esto va a quedar más claro enseguida, así que escribimos:

```js
let dispatch = createEventDispatcher()
```

Este `dispatch` es ahora una función que usamos para despachar eventos personalizados desde este componente, pasando con él datos personalizados.

Ahora queremos usar esta función `dispatch` dentro del `handleSubmit` o cuando enviamos el formulario. Queremos despachar un evento personalizado desde este componente. Pero antes de hacer eso, vamos a juntar todos los datos en un solo objeto `person` que usaremos para agregar a la persona al array.

Entonces, creamos el objeto `person` de la siguiente forma:

```js
const person = {
  name,
  beltColour,
  age,
  skills: [fighting, sneaking, running],
  id: Math.random(), // Genera un ID aleatorio
}
```

Ahora tenemos todos los datos que necesitamos. Para hacer el código un poco más limpio, podemos abreviar esto de la siguiente forma (esto implica el valor de la variable con el nombre de la propiedad):

```js
const person = {
  name,
  beltColour,
  age,
  skills: [fighting, sneaking, running],
  id: Math.random(),
}
```

Ahora, necesitamos despachar un evento personalizado llamado `addPerson` y pasar este objeto `person` como datos. Entonces, dentro del `handleSubmit`, hacemos lo siguiente:

```js
dispatch('addPerson', person)
```

Esto va a enviar el objeto `person` como parte del evento personalizado.

Ahora podemos manejar este evento personalizado en el componente padre, porque el formulario es el que está despachando el evento. Para escuchar este evento en el componente padre, usamos la misma sintaxis que para cualquier otro evento, decimos `on` seguido del nombre del evento y, en nuestro caso, es `addPerson` porque es como lo llamamos antes. Así que, en el componente padre, lo escuchamos de esta forma:

```js
on: addPerson = { handleAddPerson }
```

Donde `handleAddPerson` es una función que vamos a crear en el componente padre para manejar este evento.

Ahora creamos esa función, así que escribimos:

```js
const handleAddPerson = (e) => {
  const person = e.detail // Los datos que enviamos están en 'detail'
  console.log(person) // Mostramos el objeto de la persona en la consola
}
```

Lo que sucede aquí es que los datos que enviamos en el evento personalizado están automáticamente adjuntos al objeto `event` dentro de la propiedad `detail`. Así que podemos acceder a esos datos y hacer lo que queramos con ellos.

Ahora, si abrimos el modal y completamos el formulario con algunos datos, como nombre "Sean", edad "30", habilidades, y un color de cinturón, y luego hacemos click en "Agregar Persona", deberíamos ver ese objeto `person` registrado en la consola, todo funcionando correctamente.

Finalmente, lo que quiero hacer es tomar esos datos y agregarlos a este array de personas en el componente padre. No puedo simplemente hacer `people.push(person)` porque esto no va a disparar una actualización en Svelte. Recuerda que Svelte solo reconoce que estamos actualizando los datos cuando reasignamos el valor a la variable, no cuando modificamos los datos directamente.

Entonces, lo que voy a hacer es lo siguiente:

```js
people = [...people, person]
```

Usamos el operador de propagación (`...`) para copiar el contenido actual de `people` y luego agregar el nuevo `person` al principio del array. Esto va a disparar la actualización en Svelte, y el nuevo array con la persona añadida se va a reflejar en la vista.

Entonces, cuando agregamos una nueva persona, el array `people` se actualiza y, gracias al ciclo de reactividad de Svelte, los cambios se reflejan automáticamente en la interfaz de usuario.

---

Así que, ahora tenemos una forma funcional de agregar nuevas personas al array, manejar eventos personalizados y actualizar la vista correctamente. Además, si quieres, puedes agregar otra `each` para mostrar las habilidades de cada persona, o lo que necesites.
