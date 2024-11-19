# The 'New Poll' Component

Bueno, ahora que tenemos las pestañas ordenadas y podemos cambiar entre los contenidos, lo que me gustaría hacer primero es un formulario para agregar nuevas encuestas, que va a ir justo acá. Para hacerlo, vamos a crear un nuevo componente para ese formulario y lo colocaré dentro de la carpeta de componentes. Así que vamos a crear un archivo nuevo y lo llamamos `createPollForm.svelte`.

Lo primero que voy a hacer es importarlo ahora en `App.svelte` y colocarlo acá, donde tenemos el contenido para agregar una nueva encuesta. Así que voy a duplicar uno de estos y cambiarlo, tanto acá como acá, por `createPollForm`, así. Ahora, abajo, vamos a mostrar este componente en lugar de la etiqueta de párrafo y vamos a escribir simplemente `createPollForm`, así. Lo guardamos. Ahora no vamos a ver nada por el momento, porque este componente aún no tiene contenido.

Así que vamos a crear primero la etiqueta `<script>`, luego abajo haremos la etiqueta `<style>` para más tarde, y lo primero que quiero hacer es estructurar el HTML de este formulario. Vamos a crear la etiqueta `<form>`, no necesita un `action`, y dentro de la forma vamos a agregar, en primer lugar, varios campos. Vamos a tener un campo para la pregunta de la encuesta, luego un campo para la respuesta A (o la respuesta 1), luego un campo para la respuesta B (o la respuesta 2) y finalmente un botón al final.

Cada campo lo voy a colocar dentro de su propio `<div>`, para poder estilizarlo mejor después. Así que voy a escribir `<div class="form-field">` y dentro de este primer campo, voy a poner una etiqueta `<label>` que será para la "pregunta", y la etiqueta va a decir "Pregunta de la encuesta". Ahora necesitamos un campo de entrada debajo de eso. Vamos a escribir `<input type="text" id="question">`.

Luego vamos a copiar este campo de formulario y hacer dos más, pero esta vez el primero va a ser para la respuesta A, así que le cambiamos el nombre a `answer-a` y cambiamos el texto de la etiqueta a "Respuesta A". Luego, abajo, vamos a hacer lo mismo para la respuesta B, cambiamos el nombre a `answer-b` y también cambiamos el ID a `answer-b`.

El motivo por el que estamos agregando los IDs es para vincular la etiqueta con el campo de entrada, porque el atributo `for` de la etiqueta debe coincidir con el ID del campo de entrada.

Ahora tenemos este formulario y deberíamos poder ver que si vamos a "Agregar nueva encuesta", podemos ver este formulario. Lo estilizamos más tarde para que se vea mejor, pero primero quiero hacer un poco de enlace de datos para poder rastrear lo que un usuario escribe en cada uno de estos campos de entrada. 

Anteriormente, cuando hemos rastreado estos datos, hemos creado una variable separada para cada campo, pero ahora voy a mostrarte una forma diferente. Vamos a crear una sola variable llamada `fields`, que va a ser un objeto, y este objeto va a tener tres propiedades: una para la pregunta, otra para la respuesta A y otra para la respuesta B. Así que ahora estamos almacenando todos los campos dentro de un solo objeto, porque todos esos valores están relacionados entre sí.

Entonces, este objeto `fields` va a tener una propiedad `question` que inicialmente va a estar vacía, luego va a tener `answerA`, también vacío al principio, y por último `answerB`, vacío también al principio. Ahora tenemos el objeto `fields` y solo necesitamos vincular estos tres campos a las entradas del formulario.

Primero, vamos a enlazar el valor de este campo a algo. De hecho, voy a copiar y pegar eso en cada campo de entrada, para no tener que escribirlo todo de nuevo, porque soy un poco perezoso (o al menos yo lo soy). Este campo va a estar vinculado a `fields.question`, porque la propiedad `question` está dentro del objeto `fields`. Este de acá va a estar vinculado a `fields.answerA` y el último a `fields.answerB`.

Ahora estamos vinculando los valores que el usuario escribe en los campos de entrada a las propiedades del objeto `fields`, así que ahora estamos almacenando esos valores dentro de este objeto. Ahora también necesitamos un botón al final, así que vamos a agregarlo: `<button>Agregar encuesta</button>`. Cuando el usuario haga clic en este botón, va a disparar un evento `submit` en el formulario. Para escuchar este evento, voy a poner `on:submit`, y también voy a agregar un modificador de evento, que es `preventDefault`, lo que vimos antes, y evita la acción predeterminada de refrescar la página cuando se dispara el evento `submit`.

Entonces, lo que vamos a hacer ahora es crear un manejador de evento para el submit. Voy a decir `const submitHandler = () => {}` y dentro de este manejador lo que vamos a hacer es un `console.log` del objeto `fields`. Así que cuando hagamos clic en el botón, va a mostrar el objeto `fields` en la consola con los valores actuales de estas tres propiedades.

Probemos esto ahora en la práctica. Vamos a "Agregar nueva encuesta", escribimos una pregunta, por ejemplo "¿Te gusta Marmite?" y dos respuestas. Al hacer clic en "Agregar encuesta", vemos que el objeto `fields` se muestra en la consola con la pregunta y las respuestas.

Ahora estamos rastreando esos valores y almacenándolos dentro de este objeto. Más adelante, podremos agregar este objeto a un array de datos, que podemos recorrer y mostrar un template para cada encuesta. Pero por ahora, vamos a centrarnos solo en este formulario, y creo que me gustaría estilizarlo un poco mejor.

Primero, voy a darle estilo a la etiqueta `<form>`. Esta va a tener un ancho de 400 píxeles, un margen de 0 arriba y abajo, y auto a los lados, para centrarla en la pantalla. También quiero que el texto esté alineado al centro.

Luego, voy a darle estilo a cada campo de formulario (`form-field`), para que tenga un margen de 18 píxeles arriba y abajo, y se centre en los lados. Después, voy a aplicar el 100% de ancho a los campos de entrada (que es el 100% de 400 píxeles, no de toda la pantalla). También quiero que tenga un borde redondeado de 6 píxeles, para suavizar las esquinas.

Por último, voy a darle estilo a las etiquetas (`label`), para que tengan un margen de 10 píxeles arriba y abajo y estén alineadas a la izquierda, para que no se superpongan con el texto centrado.

Al guardar todo esto, si vamos a "Agregar nueva encuesta", ahora debería verse mucho mejor. Probemos nuevamente, agregamos una encuesta, y todo sigue funcionando perfectamente.

Ahora hemos creado el formulario de la encuesta. Más adelante, vamos a tomar esta información y agregarla a un array de datos en el componente de la aplicación, para poder recorrer ese array y mostrar una plantilla para cada encuesta. Pero por ahora, lo que quiero hacer es crear un botón personalizado que sea reutilizable, para que se vean un poco mejor. Haremos eso en el siguiente video.
