# Custom Button Component

Bueno, mis amigos, ahora me gustaría crear un componente de botón personalizado para que este botón se vea un poco mejor que el botón predeterminado que tenemos acá. Así podremos reutilizar este componente de botón donde lo necesitemos en el futuro. Podemos hacerlo personalizable y tal vez pasarle algunas opciones como propiedades (props).

Primero, vamos a crear este nuevo componente dentro de la carpeta *shared* y lo llamaremos `button.svelte`. 

Dentro de este archivo necesitamos un `<script>` porque vamos a aceptar algunas propiedades (props) más adelante. También necesitamos una etiqueta `<style>` al final porque vamos a agregar estilos más adelante. Y también necesitamos algún tipo de plantilla.

La plantilla en sí será simple, solo va a ser un `<button>` y dentro de él vamos a renderizar un "slot". Recuerda que un *slot* es una manera de pasar datos a un componente. Entonces, cuando usemos el componente en el futuro, podemos pasar lo que queramos como contenido dentro de ese botón. Podría ser un ícono, texto o incluso HTML.

Ya tenemos el *slot* configurado, y también quiero aceptar algunas propiedades. Ahora voy a explicar qué son, pero primero, digamos `export let type` y le asignamos un valor predeterminado de `primary`. Esto va a ser el tipo de botón, por lo que podría ser `primary` o `secondary`, tal vez. Y con eso podremos aplicar una clase al propio botón y hacer una selección para los estilos de *primary* y *secondary*, para que se vean de manera diferente.

La primera propiedad que vamos a aceptar es esta. También vamos a aceptar una propiedad llamada `flat`, que va a ser un valor booleano, es decir, *true* o *false*. Si es *true*, significará que el botón será plano, y si es *false*, el botón debería estar un poquito más elevado, tal vez con una sombra. Entonces podemos aplicar una clase condicional llamada `flat` al botón y darle un estilo diferente dependiendo de esto.

Finalmente, voy a decir `export let inverse` y le asignamos un valor predeterminado de *false*, también un valor booleano *true* o *false*. Si es *true*, lo que haremos es darle al botón un fondo blanco o transparente, y un borde, en vez de un fondo de color. Lo vamos a ver más adelante, pero por ahora, hagamos esto primero.

Entonces, el `class` de este botón va a ser igual al tipo. No es una clase condicional, no estamos diciendo `class type == algo`, estamos diciendo que la clase va a ser el tipo que definimos arriba. Así que si pasamos `primary`, la clase será `primary` (y es el valor por defecto). Si pasamos `secondary`, la clase será `secondary`. Después podremos estilarlas de manera diferente.

Vamos a agregar algunos estilos por ahora. Lo primero que vamos a hacer es decir que el botón tendrá un borde de `0`, un cursor de `pointer` (para que el usuario sepa que puede hacer clic), un radio de borde de `6px` para suavizar las esquinas, y un `padding` de `8px` arriba y abajo y `12px` a los lados. Además, vamos a poner un `font-weight` de *bold* y una sombra de caja (`box-shadow`), para darle un efecto 3D. Usaremos un color negro con un nivel de opacidad del 9.2% (`rgba(0, 0, 0, 0.092)`), algo sutil.

Ahora voy a importar este botón al formulario para ver cómo se ve hasta ahora. Voy a ir al formulario e importarlo al principio con `import Button from '../shared/button.svelte'`. Después, lo vamos a colocar en el lugar del botón actual, así:

```svelte
<Button>Add Poll</Button>
```

Recuerda que estamos pasando contenido, que será lo que pongamos dentro de la etiqueta de apertura y cierre de `<Button>`, y eso aparecerá donde está el *slot* en el componente.

Si guardamos eso y previsualizamos, deberíamos ver este nuevo botón. Aún no se ve increíble, y también tenemos un símbolo de cierre extra de `>` que vamos a corregir, pero ya estamos agregando los estilos a medida que avanzamos.

Ahora vamos a estilizar las clases *primary* y *secondary*. Vamos a decir que el fondo del botón `primary` sea el rojo que usamos antes (`#d91b42`), con el texto blanco. La clase `secondary` va a tener un fondo verde (`#45C496`) y también texto blanco.

Si el tipo es `primary`, la clase será `primary` y se estilizará como este botón rojo con texto blanco. Si le pasamos `secondary`, la clase será `secondary` y se verá verde.

Ahora, también vamos a agregar la funcionalidad de la propiedad `flat`. Si el valor de `flat` es *true*, agregamos una clase `flat` y eliminamos la sombra del botón (`box-shadow: none`). Si `flat` es *false*, no se aplica esa clase y el botón tendrá la sombra por defecto. 

Finalmente, en la propiedad `inverse`, vamos a aplicar una clase condicional. Si `inverse` es *true*, el fondo del botón será blanco y el color del texto será el color del fondo original (rojo o verde, dependiendo del tipo). También vamos a agregar un borde de 2px con el color correspondiente.

Si no hemos activado `inverse`, el botón se verá como antes. Pero si cambiamos el valor de `inverse` a *true*, veremos los colores invertidos.

Con todo esto, ahora tenemos un botón reutilizable y personalizable. Podemos usarlo para distintos tipos de botones, como botones rojos o verdes, planos o invertidos.

Ahora que tenemos nuestro componente de botón personalizado, vamos a usarlo más adelante en otros componentes y también vamos a agregar validaciones personalizadas al formulario en el siguiente paso.
