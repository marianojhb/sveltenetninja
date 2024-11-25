# Outputting the vote bars

Bueno, ahora tenemos nuestros "polls" mostrados en la pantalla y la verdad es que se ven bastante bien. Ahora me gustaría agregar algo de funcionalidad, para que si hacemos clic en una opción, por ejemplo en Python acá, el voto de Python suba uno, o si clickeamos en JavaScript, también suba uno. Entonces, necesitamos agregar eventos de clic a estas respuestas de acá, y esas respuestas están en el componente de PollDetails. Tenemos un div para cada respuesta, así que es ahí donde vamos a adjuntar los eventos de clic.

Entonces, si el usuario hace clic en esta opción, queremos que el voto de la respuesta A suba uno, y si hace clic en esta, que el voto de respuesta B suba uno. Los datos están dentro del componente App en este momento, ¿sí? Entonces, lo que necesitamos hacer es emitir un evento personalizado a este componente de acá, para que podamos editar los datos, porque si tenemos un "poll" guardado con cierta cantidad de votos, necesitamos primero saber cuál es el "poll", así que esos datos deben subirse con el ID del "poll" que queremos modificar, y también con el voto que queremos incrementar, ya sea A o B, dependiendo de lo que hagan clic.

Entonces, empecemos con el componente PollDetails y agreguemos un evento de clic a cada una de estas respuestas. Así que escribimos on:click, y lo dejamos igual por ahora. Vamos a volver a esto en un minuto. Lo mismo acá abajo, agregamos otro evento de clic.

Lo que voy a hacer es una función en línea, porque necesito pasarle datos a otra función, que voy a llamar handleVote, y esos datos van a ser la opción (A o B, según corresponda) y el ID del "poll" en el que hicieron clic. Ahora, vamos a invocar la función handleVote y le vamos a pasar esos dos datos: primero la opción (que va a ser "A" en este caso) y segundo el ID del "poll" (que es el que necesitamos cambiar). Hacemos lo mismo para la respuesta B, pasando "B" y el ID del "poll".

Ahora, vamos a crear esta función handleVote. Abajo, escribimos const handleVote = (option, id) => {}, y dentro de esta función, necesitamos recibir dos parámetros: la opción (A o B) y el ID del "poll" que queremos actualizar.

Lo siguiente es despachar un evento personalizado, porque estamos enviando información con ese evento hacia el componente App. Primero, necesitamos importar el createEventDispatcher desde svelte. Así que lo hacemos arriba: import { createEventDispatcher } from 'svelte'.

Después, creamos la función de despacho. Escribimos const dispatch = createEventDispatcher(). Ahora tenemos acceso a esta función de despacho, y abajo podemos despachar un evento. Usamos dispatch() y le damos un nombre al evento, que en este caso lo voy a llamar vote (porque eso es lo que estamos haciendo, votando). Luego, pasamos los datos como un objeto, donde vamos a incluir las propiedades option (la opción A o B) y id (el ID del "poll").

Con esto, estamos despachando el evento, pero hay un problema: no podemos acceder directamente a ese evento en el componente App porque PollDetails no está directamente anidado en App, está dentro de PollList. Así que tenemos que escuchar ese evento en PollList, que es el componente donde está el "poll".

Así que vamos a PollList.svelte y escuchamos el evento on:vote. Ahora le asignamos una función, que la vamos a llamar handleVote. Arriba, vamos a crear la función handleVote en PollList. La función va a recibir el objeto del evento, y como sabemos, los datos que enviamos con ese evento están en e.detail. Así que destructuramos el objeto, sacamos el id y la option.

Ahora, básicamente tenemos dos constantes: una llamada id y otra llamada option. Usamos esas para encontrar qué "poll" necesitamos actualizar en los datos. Lo que hacemos primero es crear una copia de los "polls", porque nunca debemos editar los datos directamente, siempre debemos crear una copia. Así que creamos una nueva copia de los "polls", actualizamos el "poll" que necesitamos cambiar, y luego reasignamos los "polls" a la nueva copia con los datos actualizados.

Lo siguiente es encontrar el "poll" que fue votado. Usamos el método .find() de JavaScript para encontrar el "poll" que coincide con el id que pasamos. Una vez encontrado, si la opción es A, sumamos uno a los votos de A; si es B, sumamos uno a los votos de B. Después, reasignamos los "polls" con los datos actualizados.

Así que ahora, después de realizar todas estas actualizaciones, simplemente reasignamos la variable polls con la copia de los "polls" que tiene los datos modificados. Cuando esto ocurre, Svelte vuelve a renderizar el DOM y actualiza los "polls" con los nuevos votos.

Probemos esto: hago clic en Python, ¡y el voto sube! Hago clic en JavaScript, y el voto también sube. Podemos ver que el total de votos también se actualiza correctamente. Perfecto, todo está funcionando.

Ahora, para asegurarnos de que todo funcione bien, vamos a agregar un nuevo "poll" y votamos en él. Todo funciona a la perfección. ¡Genial! Ahora que vimos cómo actualizar los votos en cada "poll", creo que lo siguiente que vamos a hacer es trabajar con las barras de votos para mostrar el porcentaje de votos que tiene cada opción.