# Creating Tab Components

Prefiero hacerlo en grupo, así que lo siguiente que me gustaría hacer es crear un pequeño sistema de pestañas para dos enlaces en la parte superior de nuestra página. Uno de los enlaces va a mostrar las encuestas actuales y el otro enlace va a mostrar un formulario para agregar una nueva encuesta. 

Estamos creando este sistema de pestañas para que cuando hagamos clic en la pestaña de "Mostrar encuestas", se muestre el componente de lista de encuestas, y cuando hagamos clic en la pestaña de "Crear nueva encuesta", se muestre el componente del formulario para crear una nueva encuesta. 

Así que nos vamos a concentrar en crear este sistema de pestañas en este tutorial. Ahora, hay muchas formas diferentes de hacerlo. No hay una sola manera de crear algo, esta es solo una de ellas. La forma en que lo voy a hacer es, primero, declarando un par de variables. 

Voy a agregar un comentario para las pestañas, así sabemos qué es todo esto. Luego voy a crear una variable llamada `items` y esta variable será un arreglo donde vamos a guardar qué elementos o qué enlaces de texto vamos a tener en el sistema de pestañas. Vamos a tener una pestaña que diga "Encuestas actuales", que va a ser para ver la lista de encuestas, y la otra pestaña va a ser "Agregar nueva encuesta", que vamos a hacer clic para crear una nueva encuesta. 

Ahora también necesitamos decir cuál de estas pestañas va a estar activa por defecto, así que voy a crear una variable llamada `activeItem` y la voy a igualar a uno de estos elementos que tenemos aquí. Por defecto, quiero mostrar las "Encuestas actuales" en pantalla, así que copio esto y lo pego aquí. Estas dos deben ser exactamente iguales, no "encuestas actuales" con la "p" en minúscula. Deben ser exactas porque más tarde vamos a verificar la diferencia entre ellas cuando decidamos qué contenido mostrar, y lo veremos.

Entonces tenemos estas dos pestañas. Lo siguiente que quiero hacer es crear un componente de pestañas para que podamos pasar estas variables como propiedades. En la carpeta `src`, voy a crear una nueva carpeta y la voy a llamar `shared`. En esta carpeta vamos a colocar cualquier componente que podamos reutilizar en distintas partes de la aplicación. 

Ahora podemos usar este sistema de pestañas en cualquier otro lugar, porque no está codificado de manera fija dentro del componente de pestañas. Las pestañas pueden ser configuradas desde afuera, así que se vuelve reutilizable y solo pasamos las pestañas que queramos mostrar. Vamos a colocar este componente en la carpeta `shared`. Vamos a crear un nuevo archivo llamado `tabs.svelte`... ups, escribí mal el nombre, dejame corregirlo... `tabs.svelte`.

Entonces, dentro de este archivo, primero creamos una etiqueta `<script>`, y luego volvemos a eso en un momento. Necesitamos también una plantilla HTML, así que empezamos con un `<div>` con una clase `tabs`, y también lo vamos a estilizar más tarde. Finalmente, necesitamos una etiqueta `<style>` por si queremos agregar estilos. 

Nuestras pestañas van a ser esencialmente una lista de elementos. En este caso, solo dos elementos: "Encuestas actuales" y "Agregar nueva encuesta". Si estoy creando una lista, normalmente usaría una etiqueta `<ul>`, aunque no es necesario, pero la voy a usar para este caso. Ahora, lo que necesitamos hacer es recorrer las pestañas que vamos a tener y generar un HTML para cada una.

Para hacer eso, tenemos que pasar las pestañas como una propiedad, estas cosas de aquí, los `items`. Primero vamos a guardar este archivo por ahora, y vamos a ir al archivo `App.svelte` para importar el componente de pestañas. Voy a duplicar eso y cambiarlo a `tabs`, luego a la carpeta `shared`, y esto también debería ser `tabs`.

Ya importamos el componente y vamos a colocar las pestañas dentro del componente principal. Así que agregamos `<Tabs>` y pasamos estas cosas como propiedades. Puedo decir que `items` es igual a `items`, y como el nombre de la variable y el nombre de la propiedad es el mismo, podemos simplemente borrar el lado izquierdo y todavía pasamos los `items` como una propiedad. También voy a pasar el `activeItem` como propiedad, porque estoy seguro de que lo usaremos dentro del componente de pestañas en algún momento.

Ahora dentro del componente de pestañas, podemos aceptar estas propiedades. Lo vamos a hacer en el `<script>`, así que voy a decir `export let items` para aceptar la propiedad `items`, y debajo de eso voy a aceptar la propiedad `activeItem`.

Ahora que tenemos esas dos variables, las podemos usar. Dentro de la etiqueta `<ul>`, quiero generar una etiqueta `<li>` para cada elemento. Recordemos que `items` es un arreglo, por lo que podemos recorrerlo y generar una plantilla para cada uno. 

Para hacer eso, usamos un bucle `each`. Usamos llaves `{#each}` para recorrer los `items` y cada uno lo vamos a llamar `item`. Al final cerramos el bucle con `{/each}`, y dentro de cada ciclo, quiero generar una etiqueta `<li>` para cada elemento. Dentro del `<li>`, voy a poner el texto del elemento. 

Voy a usar una etiqueta `<div>` para aplicar una clase más tarde, y dentro de esa etiqueta, mostramos el `item`.

Ahora estamos recorriendo los elementos y generando una etiqueta `<li>` para cada uno. Si guardo esto, deberíamos ver ambos elementos en pantalla.

Lo siguiente es determinar si el elemento actual está activo. Podemos usar `activeItem` para eso y aplicar una clase condicional. Para aplicar una clase condicional, podemos decir `class="active"` y aplicar esta clase al `<div>` si una cierta condición es verdadera. La condición va a ser si el `item` es igual a `activeItem`. Si estamos recorriendo el primer elemento y ese es el que está activo, aplicamos la clase "active". Esto es solo para estilizarlo de manera diferente y mostrar al usuario qué elemento está activo y qué contenido está viendo.

Ahora, vamos a agregar algunos estilos. Primero, voy a darle un color diferente a la clase activa. Vamos a usar un color rojo y también agregar un borde inferior de 2 píxeles. Luego, el padding inferior lo vamos a ajustar a 8 píxeles. Si guardo esto, deberíamos ver este estilo aplicado al primer elemento, que es "Encuestas actuales".

A continuación, vamos a darle más estilo al contenedor de las pestañas. Vamos a poner un margen inferior de 40 píxeles para que el contenido debajo tenga algo de espacio. También vamos a usar `display: flex` para que los elementos `<li>` se alineen de izquierda a derecha. Agregamos `justify-content: center` para centrar los elementos y quitamos el estilo de lista que aparece por defecto en los `<li>`.

Luego, vamos a darle estilos a los elementos `<li>`: un margen de 16 píxeles arriba y abajo, un tamaño de fuente de 18 píxeles, un color gris y un cursor de tipo `pointer` para indicar que se puede hacer clic. Al guardar esto, la apariencia debería mejorar.

Hasta ahora, tenemos las pestañas visualmente funcionando. Sin embargo, cuando hacemos clic en ellas, no pasa nada. Lo que queremos hacer es emitir un evento personalizado desde este componente y enviar el `item` seleccionado hacia el componente `App.svelte`, donde actualizaremos el `activeItem` para reflejar el elemento seleccionado.

Vamos a usar el `createEventDispatcher` para emitir el evento. Lo importamos desde Svelte y luego creamos un dispatcher. Este dispatcher se usará para emitir el evento cada vez que el usuario haga clic en una de las pestañas. 

Cuando hacemos clic, emitimos el evento `tabChange` y pasamos el `item` como dato. En el componente principal, escuchamos este evento con `on:tabChange` y ejecutamos una función para actualizar el `activeItem`.

Finalmente, cuando cambiamos el `activeItem`, el contenido también cambia dependiendo de cuál esté activo. Vamos a usar una declaración `if` para mostrar el contenido correspondiente. Si el `activeItem` es "Encuestas actuales", mostramos el componente de lista de encuestas; si es "Agregar nueva encuesta", mostramos el formulario correspondiente.
