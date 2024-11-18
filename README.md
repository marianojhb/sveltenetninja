# Event modifiers

Bueno, entonces, chicos, ya tenemos nuestro modal que ahora abre y cierra, pero hay un problema: si hacemos clic en el modal, en la sección blanca, aún se cierra. Y no quiero que eso pase. Solo quiero que el modal se cierre si el usuario hace clic en el fondo desvanecido, el _backdrop_, no en el contenido del modal.

Entonces, si hacen clic en el fondo, se cierra, pero si hacen clic en la parte blanca, no. Vamos a solucionar este problema usando lo que se conoce como **modificadores de eventos**.

Los **modificadores de eventos** son básicamente modificadores que podemos añadir al final de los eventos en ciertos elementos. Hay varios tipos de modificadores de eventos. Algunos de los más comunes son:

- **once**: significa que el evento solo se ejecutará una vez. Después de que se haya ejecutado, elimina el manejador del evento.
- **preventDefault**: previene la acción predeterminada. Por ejemplo, si fuera un formulario y haces clic en "enviar", la acción predeterminada sería refrescar la página, pero con este modificador se previene esa acción predeterminada.
- **self**: este es el que vamos a usar. Solo ejecuta el evento si el elemento clickeado es el objetivo del evento, es decir, solo se ejecuta si el clic ocurre sobre el mismo elemento. Este es el que queremos para nuestro _backdrop_.

Por cierto, hay más modificadores, pero estos son algunos de los más comunes. Si revisas la documentación, verás una lista completa de todos ellos. Creo que hay unos seis en total.

Lo que voy a hacer es usar el modificador **self** en este elemento aquí. Para hacer esto, solo tenemos que poner un **pipe (|)** y luego escribir el modificador **self**. Esto significa que el evento solo se ejecutará si haces clic en este _div_, que es el objetivo del evento. Así que, si haces clic en el _div_ blanco, el evento no se ejecutará porque el objetivo del clic no es ese. Pero, si haces clic en el _div_ del fondo, sí lo hará porque este _div_ es el objetivo del evento.

Entonces, si guardo esto ahora y voy al navegador, abro el modal y hago clic en la sección blanca, ya no se cierra. ¡Aleluya! Pero si hago clic en el fondo, el modal sí se cierra, porque esa es la parte que estamos targeteando con el evento.

Ese es un ejemplo de un **modificador de evento**. Ahora, veamos otro.

En **App.svelte**, voy a usar el modificador **once** y lo voy a aplicar en el botón que usamos para abrir el modal. Así que en el evento `on:click`, antes de asignar cualquier manejador, ponemos el símbolo de pipe **|** y luego escribimos **once**. Esto significa que el evento solo se disparará una vez.

Entonces, lo que sucede es que, al hacer clic en el botón, invocamos la función, pero si intentamos hacer clic nuevamente en el futuro, no va a funcionar porque, después de que se dispare la primera vez, se elimina la referencia al manejador del evento y no hará nada en los siguientes clics.

Si guardo esto y voy al navegador, abro el modal, funciona. Puedo cerrarlo también. Pero, si intento abrirlo de nuevo, ya no va a funcionar, porque hemos dicho que este evento solo se ejecutará una vez.

Como mencioné antes, hay otros modificadores de eventos que podemos usar, y probablemente los usaremos en el futuro. Solo quería introducirlos en este video, y si quieres aprender más sobre ellos, definitivamente revisa la documentación, que tiene una lista extensa de los diferentes modificadores y lo que hacen.
