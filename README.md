# CSS & Conditional Styles

Bien, entonces, cuando se trata de estilizar nuestro proyecto, hay un par de formas diferentes en las que podemos agregar CSS. La primera forma es agregar el CSS a una **hoja de estilos global**. Esta hoja de estilos se aplicará a todos los componentes diferentes, sin importar cuántos usemos. Esta hoja de estilos global se crea automáticamente cuando creamos un nuevo proyecto en Svelte, como hicimos, y se encuentra en la carpeta **public**. Ahí veremos un archivo llamado `global.css`. Cuando creamos un nuevo proyecto, este archivo se rellena automáticamente con algunos estilos básicos.

Puedes mantener estos estilos o eliminarlos. Yo los voy a dejar, pero lo importante aquí es que estos estilos son **globales** y se aplican a todos los componentes. Por ejemplo, si agregamos un estilo para los párrafos y les cambiamos el color de texto a rojo, este estilo se aplicará a todos los párrafos, sin importar en qué componente estén.

### Estilos globales:

Primero, vamos a crear algunos estilos globales, y luego veremos cómo añadir **estilos locales**. Para ello, voy a agregar algunos estilos adicionales aquí. Y por cierto, este archivo `global.css` se carga desde el archivo `index.html` en el proyecto. Este archivo es el que servimos al navegador y es el que vincula a la hoja de estilos global.

Podrías crear más hojas de estilos dentro de la carpeta **public**, si lo deseas, pero por ahora no es necesario, así que lo dejaremos como está.

Voy a empezar a estilizar el `body`. Podría agregar estos estilos en el selector `body` directamente, pero prefiero mantenerlos todos juntos en un solo lugar para poder hacer un mejor seguimiento. Así que voy a decir que el color va a ser **#777**, un gris medio, y el fondo del `body` será **#eee**. También voy a eliminar el padding y el margen, por si acaso hay algún valor predeterminado, para empezar desde cero.

A continuación, voy a estilizar los `h4`. Recuerda que los `h4` en este momento son los nombres de los componentes que hemos creado, así que voy a ponerles el color **orange-red**. Y por último, vamos a estilizar los **botones**. Los botones tendrán un fondo blanco.

### Estilos locales:

Ahora, pasemos a la segunda forma de agregar estilos, que es la de **estilos específicos de componente**. Recuerda que cada componente en Svelte puede tener su propia etiqueta `<style>` para estilos locales. Automáticamente, cuando creamos un componente en Svelte, este tendrá su propio conjunto de estilos, como los que vimos en el componente `App.svelte`.

Estos estilos se aplicarán solo a los elementos dentro de este componente. Por ejemplo, si agregamos un `main` en el componente `App.svelte`, los estilos de `App.svelte` solo se aplicarán a ese `main`. Si luego vamos al componente `Modal.svelte` y añades un `main` ahí, los estilos de `App.svelte` no afectarán a este nuevo `main` porque los estilos son específicos para cada componente.

Svelte hace esto creando **clases únicas** para los elementos dentro de cada componente, y cuando compila todo el código, genera un archivo único de CSS donde las clases de cada componente se identifican de manera única. Esto se puede ver en la carpeta **public/build**, en el archivo `bundle.css`, donde notarás que las clases tienen caracteres aleatorios añadidos a su nombre, lo que asegura que no haya conflictos entre los estilos de diferentes componentes.

### Estilos del modal:

Ahora que sabemos cómo funcionan los estilos globales y locales, vamos a estilizar nuestro **componente modal**. Primero, vamos a estilizar el **backdrop**. Seleccionamos el fondo del modal y le damos las siguientes propiedades:

- **width: 100%** y **height: 100%** para cubrir toda la pantalla.
- **position: fixed** para que se quede en la pantalla aunque se haga scroll.
- Usamos un fondo **rgba(0, 0, 0, 0.8)**, donde el `0.8` es la opacidad para darle un fondo semi-transparente negro.

Cuando guardamos y revisamos en el navegador, veremos que el fondo ahora tiene un tono oscuro y semi-transparente, lo que ayuda a que el modal se distinga del resto de la página.

A continuación, estilizamos el **modal** en sí. Le damos un **padding** de 10px, un **border-radius** de 10px para hacer las esquinas más suaves, y una **anchura máxima de 400px** para que no se haga demasiado grande. Además, le agregamos un margen superior e inferior del **10%** y automático en los márgenes izquierdo y derecho para centrarlo en la pantalla. También alineamos el texto en el centro, y le damos un fondo blanco al modal.

### Clases condicionales:

Ahora, quiero mostrarte cómo aplicar clases condicionalmente. Supongamos que tenemos un modal especial de tipo **promocional** que queremos estilizar de manera diferente. Podríamos agregar una clase condicionalmente al **backdrop** basándonos en una condición.

Para hacer esto, podemos crear una variable `isPromo` que determine si el modal es promocional. Si es **true**, aplicamos una clase llamada `promo`. Esta clase se agregará al `backdrop` solo si la condición `isPromo` es **true**. Si cambiamos el valor de `isPromo` a **false**, la clase `promo` desaparecerá.

Por ejemplo, si `isPromo` es **true**, podemos agregar la clase `promo` al backdrop, y luego estilizar ese fondo para que tenga un color **crimson** y el texto sea **blanco**. Si `isPromo` es **false**, el modal tendrá el estilo normal.

Esto nos permite aplicar estilos específicos a diferentes tipos de modales de forma dinámica.
