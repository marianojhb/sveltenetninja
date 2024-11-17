# User input and data binding

En el último video, vimos cómo reaccionar a un clic de usuario utilizando el evento `onclick`. Establecimos este evento igual a una referencia a una función, `handleClick`, que se ejecuta cuando ocurre el clic, cambiando el valor de `beltColor` a **naranja**. Esto funciona correctamente cuando hago clic en el botón y el color cambia de negro a naranja. Esto está genial, pero ¿qué pasa si quiero permitir que el usuario escriba en un campo de entrada y elija su propio color? A medida que escribe, el color cambia dinámicamente.

### Crear un campo de entrada y manejar el evento `input`

Para hacer esto, primero creamos un campo de entrada de tipo texto (`<input type="text">`). Luego, necesitamos reaccionar al evento `input`, similar a como reaccionamos al evento `click`. Un evento `input` ocurre cada vez que el usuario escribe algo en el campo de entrada. Así que podemos añadir un **escuchador de eventos** a este campo, usando el evento `oninput`, y asignarlo a una función llamada `handleInput`.

**Nota importante:** No invocamos estas funciones inmediatamente, sino que pasamos **referencias a las funciones** para que solo se ejecuten cuando el evento ocurra.

### Crear la función `handleInput`

Ahora vamos a definir la función `handleInput`. La crearé como una **función de flecha** (`arrow function`). Dentro de la función, necesitamos tomar el valor que tiene el campo de entrada y asignarlo a `beltColor`. Para obtener el valor del campo, usamos el parámetro `e`, que se pasa automáticamente cuando ocurre un evento. Accedemos al **elemento `target`** del evento (en este caso, el campo de entrada) y a su propiedad `value`, que contiene el texto escrito por el usuario.

El código se vería de la siguiente manera:

```javascript
const handleInput = (e) => {
  beltColor = e.target.value
}
```

Cada vez que el usuario escriba algo, esto actualizará el valor de `beltColor` con el nuevo texto, y debería reflejarse en la pantalla en tiempo real.

### Verificar el comportamiento

Si guardamos y probamos esto, veremos que el texto cambia dinámicamente a medida que escribo en el campo de entrada. Si escribo "yellow", el color del cinturón (`beltColor`) se actualiza a amarillo. ¡Esto está genial!

### ¿Qué pasa con la vinculación de datos bidireccional?

Sin embargo, en este momento solo tenemos **vinculación unidireccional de datos**. Si el valor de `beltColor` cambia en otro lugar, el campo de entrada no se actualiza. Por ejemplo, si hago clic en el botón y cambio el color a naranja, el campo de entrada no refleja ese cambio.

Para lograr una **vinculación bidireccional de datos**, necesitamos actualizar el valor del campo de entrada cada vez que `beltColor` cambie. Podemos hacer esto estableciendo la propiedad `value` del campo de entrada igual a `beltColor`. De esta manera, siempre que `beltColor` cambie, el campo de entrada se actualizará automáticamente.

El código podría verse así:

```html
<input type="text" value="{beltColor}" oninput="{handleInput}" />
```

### Ahora sí: Vinculación bidireccional

Después de hacer esto, veremos que el valor del campo de entrada coincide con `beltColor`. Ahora, si escribo "yellow", el color del cinturón se actualiza a amarillo y, a su vez, si cambio el color del cinturón a **naranja**, el campo de entrada también refleja este cambio. ¡Esto es vinculación bidireccional en acción!

### Usando `bind` para simplificar la vinculación

Si quieres una forma más sencilla de lograr la vinculación bidireccional de datos, puedes usar la palabra clave `bind` en el campo de entrada. En lugar de establecer manualmente el valor, solo usamos `bind="beltColor"`. Esto hace todo el trabajo por ti: cada vez que el usuario escribe en el campo, se actualiza `beltColor`, y si `beltColor` cambia en otro lugar, el campo de entrada también se actualiza.

El código se vería así:

```html
<input type="text" bind="beltColor" />
```

### Vinculación con otros atributos o elementos

Finalmente, también podemos vincular datos a otros atributos o elementos. Por ejemplo, podría establecer el atributo `style` de una etiqueta `<p>` que muestra el valor de `beltColor`. Así, cuando `beltColor` cambie, también actualizará dinámicamente el color del texto. Si el color del cinturón es **negro**, el texto será negro. Si cambia a **rojo**, el texto se pondrá rojo, y así sucesivamente.

```html
<p style="color: {beltColor}">El color del cinturón es {beltColor}</p>
```

### Conclusión

En resumen, puedes vincular datos de manera **unidireccional** o **bidireccional** de una manera muy flexible en JavaScript. Si necesitas vinculación bidireccional, usar `bind` es un atajo conveniente. Además, puedes vincular datos a otros atributos, como `style`, para actualizar dinámicamente la interfaz de usuario.

¡Con esto, tienes una comprensión completa de cómo manejar eventos, actualizaciones dinámicas y vinculación de datos en JavaScript!
