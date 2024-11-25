# Svelte Basics

Bueno, gente, antes de empezar a escribir cualquier código, vamos a echar un vistazo a cómo funciona todo bajo el capó de Svelte. Como dije en el video anterior, creamos todo nuestro código fuente dentro de esta carpeta source. Este es el lugar donde vas a estar escribiendo el 99% de tu código, y donde vamos a crear todos nuestros diferentes componentes de Svelte. De hecho, ya tenemos uno creado para nosotros, el App.svelte.

Los componentes son como bloques de construcción de un sitio web, que se pueden juntar y luego inyectar al DOM o al navegador para crear todo el sitio web. Por ejemplo, podríamos tener un componente para un header, para un formulario de contacto, para un modal, para un footer, para un popup, etc. Y luego, al final, todos estos componentes pueden unirse y ser inyectados al DOM para formar todo el sitio web. Como dijimos, Svelte ya creó un componente de ruta para nosotros llamado App.svelte. Y por cierto, siempre que creamos un componente, debe tener esta extensión .svelte. Así Svelte sabe que esto es un componente y puede compilarlo como tal.

Dentro de cada componente, tenemos tres partes diferentes: primero, podemos tener un script arriba para toda la lógica del componente; segundo, tenemos una plantilla HTML, que es lo que finalmente se inyecta al DOM; y tercero, también tenemos una etiqueta style al final, que sirve para estilizar la plantilla de ese componente.

Ahora, pasando al archivo main.js, este es el archivo que arranca la aplicación. Contiene el código que se ejecuta primero y prepara todo para nosotros. Primero importa el componente App.svelte, que es el que creamos antes. Así que, cuando creamos un componente, se exporta automáticamente, y podemos importarlo en otro archivo.

Lo que hacemos luego es crear una nueva instancia de ese componente, y dentro de esa instancia, tenemos este objeto con una propiedad llamada target. Esto básicamente le dice a Svelte, "Ok, tenemos esta instancia del componente App, ¿dónde queremos inyectarlo en el DOM?" Y le estamos diciendo que lo inyecte en la etiqueta body. Este es el selector para esa etiqueta, pero podríamos usar un query selector si quisiéramos elegir otra etiqueta. Sin embargo, generalmente vamos a usar body porque es donde se guarda todo el contenido de un documento HTML.

Dentro de la carpeta public, tenemos el archivo index.html. Este es el archivo que se muestra en el navegador. Si inspeccionamos el elemento, podemos ver que tenemos toda esta estructura HTML. Lo que hace el archivo main.js es tomar esa etiqueta body del archivo index.html y, básicamente, inyectar todo el contenido de la plantilla del componente App dentro de esa etiqueta body.

También vemos esta propiedad props, que es una forma de pasarle datos a un componente. En este momento, estamos pasando una propiedad llamada name, con un valor de world. Luego, si vamos al archivo App.svelte, podemos ver que estamos agarrando ese name de ahí. Esta palabra clave export significa que este valor de name se está configurando desde fuera del componente. Ahora, no quiero hablar demasiado sobre props o cosas como esa por ahora, así que voy a borrar esta línea de exportación y hablaremos de ellas más adelante.

Así que, espero que ahora tengas una idea general de cómo funciona todo esto. Creamos componentes, y luego esos componentes se inyectan al DOM. En el futuro, cuando creemos más componentes, generalmente no los vamos a meter al DOM de esta manera, sino que los vamos a anidar dentro de este componente. Este componente es como el componente raíz, el componente de nivel superior, que se inyecta directamente al DOM de esta forma. Y después de eso, podemos ir anidando todos los demás componentes dentro del componente raíz. Hablaremos de esto más adelante.

Pero bueno, así es como funciona todo por debajo, y cuando construimos nuestro proyecto, Svelte toma todos nuestros componentes, los compila en un solo paquete de JavaScript, y lo saca aquí, en la carpeta build, que podemos ver por acá: bundle.js y bundle.css. Todos los scripts de nuestros diferentes componentes y todos los estilos de esos componentes se combinan en un solo archivo, y luego, desde el index.html, vinculamos estos archivos. Así es como funciona todo.

Ahora que sabemos cómo funciona un poco más sobre el capó, vamos a intentar escribir algo de código. Ya hemos visto esto antes, donde estamos mostrando un nombre y una variable que está definida arriba. Al principio estaba definida como una propiedad que pasamos, pero ahora ya no la estamos aceptando como propiedad porque borramos la línea de exportación al principio. Si intentamos guardar eso ahora, sería undefined, y no vamos a ver ningún nombre. Dice "hello undefined".

Entonces, en vez de eso, vamos a darle un valor. Voy a decir, `let name = "yoshi"`, por ejemplo. Y para mostrar una variable que definimos en el script, dentro de la plantilla, usamos llaves simples (es decir, curly braces). Entonces ponemos `{name}`. Súper fácil. Si guardamos eso ahora, vamos a ver "hello yoshi".

Ahora puedo crear otra variable. Por ejemplo, `let beltColor = "black"`, y para mostrarla, simplemente elimino el contenido que tenía dentro de la etiqueta <p> y, en vez de eso, pongo `{beltColor}`. Así que va a mostrar "black belt". Guardamos eso, y vemos que efectivamente muestra "black belt".

Bien, eso es cómo mostramos cualquier variable que definimos en nuestro script dentro de la plantilla. Es muy fácil. Ahora, ¿qué pasa si queremos cambiar esos datos en algún momento o reaccionar a un evento del usuario, como un clic en un botón para cambiar los datos? Bueno, podemos hacerlo. Vamos a crear un botón. En este caso, el botón va a decir "update belt color".

Si queremos reaccionar a un clic en este botón, simplemente decimos on:click={algo}. Lo que va adentro de las llaves es el nombre de la función que vamos a declarar arriba. Supongamos que llamamos a esta función handleClick. Entonces, tenemos que definirla arriba. Por ejemplo, `const handleClick = () => { beltColor = "orange" }`.

Entonces, cuando el usuario haga clic en este botón, la función handleClick se va a ejecutar y va a cambiar el valor de beltColor a "orange". Cuando eso ocurra, la interfaz va a reaccionar a ese cambio y va a actualizar la vista en el navegador.

Si lo guardamos y vamos a probarlo, vemos que ahora cuando clickeamos en "update belt color", el color de "beltColor" cambia a naranja. ¡Funciona!

Entonces, todo esto que hemos visto hasta ahora es sintaxis de Svelte, no es HTML ni JavaScript común. Pero, lo interesante es que cuando construimos nuestro proyecto, Svelte toma toda esta sintaxis y la convierte en JavaScript "puro", el cual es lo que finalmente se va a mostrar en el archivo bundle.js.

Lo que acabamos de hacer puede parecer sencillo, pero cuando creamos más componentes, estos paquetes van a ser más eficientes al generar los archivos finales.

Ahora que aprendimos lo básico de Svelte, sabemos cómo definir datos en un componente, cómo mostrarlos, cómo manejar eventos como los clics en botones, etc. Por cierto, no necesitas atar estos eventos solo a botones, podrías hacerlo también en un `<p>` o un `<h1>`, si quisieras. Pero bueno, ahora que dominamos lo básico, en el siguiente video vamos a ver cómo usar imports y data binding.