# Forms - parte 1

Bueno, entonces, en la última lección vimos cómo podíamos pasar todo este contenido aquí, transformarlo en un slot para el modal y luego renderizarlo dentro del componente usando las etiquetas de slot. Ahora sabemos cómo usar esos slots, y me gustaría hablar un poco más sobre los formularios. Pero antes de seguir, lo que quiero hacer es extraer todo el contenido del formulario a su propio componente y luego usar ese componente aquí, porque por ahora el código en este archivo **App.svelte** se está volviendo bastante largo y pronto va a quedar muy desordenado. Así que vamos a borrar todo esto de aquí. De hecho, vamos a eliminar el **h3** y cortar todo este contenido, porque lo vamos a pegar en otro archivo en un momento. Luego, dentro de la carpeta **src**, voy a crear un nuevo archivo y lo voy a llamar **addPersonForm.svelte**.

Primero necesitamos una etiqueta `<script>` en la parte superior y también necesitamos algo de HTML. Así que voy a agregar primero este formulario y luego volveremos a mejorarlo un poco más adelante. Al final, agregaré una etiqueta `<style>` por si necesitamos algún estilo en el futuro.

Así que tenemos este formulario aquí y los dos inputs, uno para el nombre y otro para el color del cinturón. También quiero enlazar estos dos inputs a las propiedades que tenemos arriba en el script. Entonces voy a decir `let name` (no necesitamos inicializarlo con un valor porque cuando el usuario escriba algo en el campo, se va a actualizar automáticamente), y luego también `let beltColor`.

Ahora tenemos estas dos propiedades, y queremos enlazar los valores de estos inputs a esas propiedades para que cuando escribamos en los inputs, también se actualicen estos valores. Ya hemos visto esto antes cuando hablamos de **data binding**. Así que ahora voy a enlazar el valor de este input al variable `name`, y lo mismo abajo, pero esta vez lo voy a enlazar a `beltColor`. Así que para el color del cinturón sería: `bind:value={beltColor}`.

Ahora tenemos estos dos inputs. Todo esto ya lo hemos visto antes, y están vinculados a esas dos propiedades. Ahora quiero agregar un tercer input para la edad. Así que voy a poner otro input, pero esta vez vamos a usar el tipo **number** en lugar de **text**, lo que nos da un campo numérico, que es un input estándar de HTML. Si abrimos el modal, todavía no lo vemos porque no hemos renderizado este componente todavía. Así que vamos a **app.svelte**, vamos al principio y vamos a importar este nuevo componente de formulario que creamos, así que escribimos:

```javascript
import AddPersonForm from './addPersonForm.svelte'
```

Y ahora podemos usar este componente dentro del contenido del modal. Así que lo colocamos ahí, dentro del modal.

Lo que estamos haciendo aquí es simplemente importar este nuevo componente y luego insertarlo en el modal. Así que todo ese contenido va a ir al modal y se va a renderizar allí, espero que tenga sentido.

Guardamos eso, refrescamos y lo probamos. Ahora, si abrimos el modal, veremos el input numérico y los otros dos inputs. Esos dos primeros campos tienen las flechitas para aumentar o disminuir el valor.

Ahora, el comportamiento por defecto de JavaScript cuando leemos valores de cualquier tipo de input, ya sea número o texto o cualquier otro, es que convierte ese valor en una cadena (string) en JavaScript. Pero en **Svelte**, cuando enlazamos un input de tipo número, lo convierte en el tipo correcto, como un número o un entero. Así que voy a decir `bind:value={age}`, y vamos a crear esa propiedad aquí arriba como `let age`. Si escribimos 5 en el campo, Svelte lo convertirá automáticamente en un entero.

Esto es útil porque cuando estamos guardando datos, es preferible tener los números como enteros en lugar de cadenas, pero si quisiéramos tratarlo como una cadena, podríamos convertirlo a string en cualquier momento.

También vamos a agregar un **placeholder** para el campo de la edad. Así que lo pondremos como `placeholder="Edad"`. Ahora tenemos los tres campos: nombre, color del cinturón y edad, y están vinculados a esas tres variables.

Ahora necesitamos reaccionar cuando el usuario envíe este formulario. Podemos hacerlo de dos maneras: podemos adjuntar un evento **click** al botón, o podemos adjuntar un evento **submit** al formulario. Yo voy a usar el método **submit** porque no lo hemos visto aún. Entonces, voy a decir `on:submit={handleSubmit}`. Así que, igual que tenemos un evento **click** en un botón, también podemos tener un evento **submit** en el formulario. Este evento se dispara cuando hacemos clic en el botón dentro del formulario, porque hacer clic en un botón dentro de un formulario **envía** el formulario.

Cuando esto sucede, queremos invocar alguna función. Así que voy a decir `handleSubmit` y voy a declarar esa función arriba, así que la definimos como:

```javascript
const handleSubmit = () => {
  console.log(name, beltColor, age)
}
```

Esto simplemente va a imprimir en la consola los valores actuales de **name**, **beltColor** y **age** cuando se envíe el formulario.

Vamos a probar esto. Notarás algo un poco extraño. Si abro el modal, escribo algunos datos, y luego hago clic en "Agregar persona", vamos a ver que en la consola se registran los valores, pero después de un par de segundos la página se recarga. Esto pasa porque el comportamiento por defecto de un formulario cuando se envía es que recarga la página.

Recuerden que habíamos hablado de un **event modifier** para prevenir eso, y ese modificador es **preventDefault**. Así que vamos a usarlo ahora. Vamos a escribir:

```html
on:submit|preventDefault={handleSubmit}
```

Esto previene el comportamiento por defecto de recargar la página al enviar el formulario.

Guardamos eso y probamos otra vez. Ahora, cuando escribimos los valores y hacemos clic en "Agregar persona", ya no se recarga la página y podemos ver los valores correctamente en la consola.

Eso cubre lo básico de los formularios. Ya hemos visto algunas cosas antes, como los inputs, el **data binding**, y cómo prevenir la acción por defecto del formulario, pero en el próximo video quiero hablar de otros tipos de inputs: como los **checkbox** y los **select boxes**. Así que veremos eso en el siguiente video.
