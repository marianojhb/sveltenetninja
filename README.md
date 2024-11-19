# Comenzando el proyecto Votación (Poll Project)

Ahora vamos a juntar todo en un mini proyecto. Vamos a construir ese proyecto de "poles" que vimos al principio de esta serie. Para hacer esto, vamos a crear un proyecto de Svelte desde cero. Estoy en este directorio llamado "Tut", que es donde quiero crear el proyecto. 

Así que, recordá que para crear un nuevo proyecto de Svelte, tenés que decir `npx degit`, y primero tenés que tener instalado el paquete `degit`. Después escribís `sveltejs/template` y yo le voy a poner de nombre a este proyecto "ninja-poles". 

Le das a Enter y eso va a crear el proyecto por nosotros. Cuando termine, entramos a ese directorio con `cd` y después le digo `code .` para que abra VS Code en este directorio.

Ahora, en VS Code, podemos ver el boilerplate (esqueleto) del proyecto. Lo primero que voy a hacer es abrir la terminal y asegurarme de que puedo correrlo con `npm install`, para instalar todas las dependencias que el proyecto necesita según el archivo `package.json`.

Una vez que termine de instalar, voy a correr `npm run dev`, que va a levantar un servidor local de desarrollo para que podamos ver el proyecto en el navegador. Lo vemos acá, y lo voy a agrandar un poco para que se vea mejor.

Este es el proyecto básico que viene por defecto cuando creamos un nuevo proyecto de Svelte. Voy a asegurarme de que todo esté funcionando bien: voy al componente raíz de la app, borro este párrafo, elimino todos los estilos de abajo, porque más adelante vamos a crear nuestros propios estilos. También vamos a borrar este nombre de acá, y lo vamos a reemplazar por "Ninjas". Lo guardamos y verificamos que todo esté andando en el servidor en vivo. Vamos al navegador y debería actualizarse, ¡y funciona perfectamente!

Así que ya tenemos el proyecto armado y listo para empezar a programar en el próximo video. Pero antes de empezar, siempre me parece buena idea planificar la estructura de los componentes y decidir cómo va a fluir la data en la web antes de empezar a escribir código. Esto te va a ahorrar un montón de problemas después.

Entonces, primero, tenemos el componente raíz, y lo primero que vamos a hacer es crear dos componentes: uno para el encabezado (header) y otro para el pie de página (footer), para ponerlos arriba y abajo del sitio web. Vamos a poner esos dos componentes directamente dentro de `App.svelte`.

Luego, vamos a crear otros dos componentes: uno para el formulario de creación de encuesta (create poll form), que va a permitir que el usuario ingrese información para crear una nueva encuesta, y otro para la lista de encuestas (poll list), que va a mostrar todas las encuestas que tengamos.

Ambos componentes se van a poner también dentro de `App.svelte`. Finalmente, vamos a tener un componente llamado `PollDetails`, que va a estar dentro de `PollList`, y va a ser la plantilla de una sola encuesta. El trabajo de este componente va a ser recorrer todas las encuestas y mostrar una plantilla para cada una cuando pasemos los datos de la encuesta.

También vamos a tener algunos componentes de interfaz de usuario (UI) que podremos inyectar en otros componentes cuando los necesitemos, como un botón, una tarjeta y un sistema de pestañas para la navegación en la parte superior.

Al principio, vamos a almacenar toda la data en el componente `App.svelte`, y esa data va a ser la lista de encuestas. Luego, vamos a poder usar esos datos o agregar nuevos datos desde los otros componentes, pasándolos hacia abajo en el árbol de componentes, o en el caso del formulario, emitiendo un evento y pasando los nuevos datos hacia el componente raíz.

Pero más adelante, cuando aprendamos sobre "data stores" (almacenamiento de datos), vamos a guardar toda la data en un store central, y podremos acceder o actualizar esa data desde cualquier componente que necesitemos.

Esa es la estructura del proyecto a grandes rasgos, y eso es lo que vamos a ir construyendo en el resto de esta serie.
