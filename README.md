# Props

Sirven para pasar data entre componentes.

Bien, ahora tenemos nuestro componente **modal**. Déjame borrar esos `main` tags y ahora se ve algo así en el navegador. Se ve bastante bien. Sin embargo, este mensaje aquí, "sign up for offers", está **codificado de forma estática** dentro del propio componente modal. Esto no hace que el componente modal sea muy reutilizable, porque si quisiéramos usar el modal en otro lugar, por ejemplo, en otro componente más abajo o incluso en un componente diferente a medida que ampliamos nuestro sitio web en el futuro, siempre tendría el mismo mensaje codificado dentro de cada modal.

Sería mucho mejor si este mensaje pudiera ser **dinámico**, y que para cada modal que usemos, podamos pasar un mensaje diferente. Es decir, queremos poder **pasar datos a los componentes** y podemos hacerlo usando lo que se conoce como **props** en Svelte. ¿Cómo hacemos esto? ¿Cómo pasamos datos o props a un componente?

Bueno, simplemente declaramos qué props queremos pasar en el componente donde lo usamos. Por ejemplo, podría usar una prop llamada `message`, pero puedes llamarlo como quieras, no tienes que llamarlo `message`. Luego, le asignamos algún valor. Ese valor puede ser cualquier cosa: un número, una cadena de texto, o un objeto. Yo voy a usar una cadena de texto, así que pongo comillas dobles y digo "hey, soy un valor de prop". Ahora estamos diciendo, "ok, cuando crees este componente modal, quiero que pases una prop llamada `message`, y este será el valor de ese mensaje".

Ahora quiero acceder a esa prop dentro del modal. ¿Cómo lo hacemos? Primero, necesitamos declarar que vamos a usar esa variable, que en este caso se llama `message`. Así que voy a decir `let message;`. Ahora necesitamos decir que esto puede ser configurado desde fuera del componente, lo cual está pasando porque lo estamos configurando en `App.svelte` aquí. Lo estamos estableciendo fuera del componente y pasándolo.

Para hacer esto, necesitamos poner la palabra clave `export` antes de declarar la variable, y ahora estamos diciendo "ok, esta variable `message` va a venir de fuera, o puede ser configurada desde fuera de este componente". Ahora, lo que puedo hacer es decir simplemente `message` aquí, y va a mostrar el valor que se haya asignado a esa prop desde fuera del componente.

Recuerda que el nombre de la variable y el de la prop **tienen que coincidir**. Deben ser exactamente iguales. Y de nuevo, esta palabra clave `export` simplemente significa que estamos pasando esta prop desde fuera del componente.

Esto debería funcionar, así que si lo guardamos, veremos que el mensaje aquí será **"hey, soy un valor de prop"**. ¡Genial! Ahora podemos pasarle un valor por defecto a la prop. Por ejemplo, podría decir `default value`, pero podrías ser más original. Si no pasamos el `message` como prop, por ejemplo, si corto esta línea y guardo, va a usar este valor por defecto, que veremos en la interfaz. Sin embargo, en el momento en que pasamos una prop con el mismo nombre `message`, esta sobrescribe el valor por defecto y usa el valor de la prop.

### Pasar más props:

Ahora vamos a pasar también la prop `isPromo`. De nuevo, necesitamos poner `export` porque estamos configurando esta prop desde fuera del componente. Le asignamos un valor por defecto de **false**, pero si luego vamos aquí y decimos, "ok, `isPromo = true`", dentro de las llaves, porque es un valor dinámico (es un booleano, por eso no está entre comillas como las cadenas de texto), entonces `isPromo` va a sobrescribir este valor por defecto y será **true**.

Si guardamos, veremos que el modal se vuelve de color rojo, porque ahora `isPromo` es verdadero. Si no pasamos esa prop y corto esta línea, el valor por defecto de **false** se usará, y no veremos el fondo rojo, lo cual es correcto.

### Recapitulando:

Así que ahora tenemos la prop `isPromo` que controla si el modal tiene un fondo rojo. Si no pasamos esa prop, usamos el valor por defecto, **false**, y el modal tiene su estilo normal.

Recuerda que para pasar datos a un componente en Svelte hay dos pasos:

1. Primero, declaramos las props aceptadas dentro del componente, usando la palabra clave `export`, como lo hicimos con `message` y `isPromo`.
2. Luego, pasamos esas props al componente donde lo usamos, asegurándonos de que el nombre de la prop coincida con el de la variable en el componente.

Este método de no codificar el mensaje hace que el modal sea mucho más reutilizable, porque más adelante podemos usar el modal en otro lugar de la aplicación, no necesariamente en el mismo sitio, y el valor de la prop `message` podría ser diferente.

Ahora, el modal es muy reutilizable. Lo único que realmente falta ahora es poder alternar el valor de `showModal` entre **true** y **false** para poder mostrar y ocultar el modal, y veremos cómo hacer esto usando **event forwarding** en el siguiente video.
