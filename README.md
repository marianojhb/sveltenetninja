# Poll Details component

Bueno, gente, tenemos este componente pulido acá que está pasando por los "poles" y está mostrando la propiedad de la pregunta en cada uno de los "poles" por el momento, así que se ve algo así. Si tenemos dos "poles", ahora obviamente queremos mostrar un mejor template para cada uno de ellos donde mostramos la pregunta, las respuestas posibles y la cantidad de votos, etc.

Entonces lo que voy a hacer es crear un nuevo componente para los detalles de cada "poll" y lo que vamos a hacer es pasar ese "poll" en particular a ese componente. La razón por la que hago esto es para hacerlo más modular y también para que el archivo no se haga tan desordenado, porque si juntamos todo en un solo archivo va a ser un montón de código.

Voy a ir a la carpeta de componentes y voy a crear un nuevo archivo llamado poll-details.vue, y dentro de este archivo vamos a tener un script y también un template. Lo voy a arrancar con un div con una clase de poll y después vuelvo a eso. Y finalmente, necesitamos una etiqueta de estilo también, como corresponde.

Ahora pasemos el "poll" a este componente. Primero, digamos exports porque vamos a pasarlo como "prop". Vamos a poner let poll y al principio no necesitamos darle un valor. Luego, dentro del archivo de la lista de "polls" tenemos que importar ese componente en la parte superior. Voy a poner import PollDetails from './PollDetails.vue'.

Ahora, podemos renderizar este componente acá abajo en lugar de solo mostrar la pregunta del "poll". Dentro de ese div, vamos a sacar esto y en su lugar vamos a mostrar el componente PollDetails, y le pasamos el "poll" como prop, para que cada vez que pase un "poll" en el ciclo de este v-for, le pasemos el "poll" a este componente. Así que en el PollDetails, podemos acceder a esa prop y mostrarla en el template.

Entonces, lo primero que queremos mostrar en esos detalles del "poll" es probablemente la pregunta. Así que hacemos un h3 y mostramos poll.question. Luego debajo del h3, vamos a hacer un div con una clase answer que va a ser una de las respuestas. Cada respuesta va a vivir dentro de un div con la clase answer para poder darle un estilo más adelante.

En la parte superior de cada respuesta, vamos a poner una barra de porcentaje. Así que hacemos un div con la clase percent y percent-a, porque esa barra de porcentaje va a servir para mostrar el porcentaje de votos que tiene esa respuesta en este momento. Ahora, por ahora la dejamos ahí tal cual está, y más adelante la vamos a completar.

Abajo de la barra de porcentaje, quiero poner otro span donde vamos a mostrar la respuesta del "poll" y cuántos votos tiene. Por ejemplo, poll.votes.a para mostrar los votos de la opción A. Al principio probablemente va a ser cero, pero en nuestro "poll" de prueba, los votos para la opción A son 9, y para la opción B son 15.

Entonces ahora tenemos toda la información para una de las respuestas. Vamos a copiar todo esto y pegarlo para la segunda respuesta, cambiando las referencias a percent-b, votes-b y answer-b.

Con esto tenemos la pregunta, las dos respuestas, y la cantidad de votos para cada una. Si guardamos, en este momento solo veremos el "poll" que refrescamos, pero ahora ya tiene la pregunta, las dos respuestas y cuántos votos tiene cada una.

Si creo uno nuevo, por ahora solo con datos de prueba, vamos a ver ese "poll" también. Y ahora tenemos que mostrar el total de votos, que sería 9 + 15 = 24, por ejemplo. Para hacer esto, voy a crear un valor reactivo llamado totalVotes, que va a ser igual a poll.votes.a + poll.votes.b. Y luego, podemos mostrarlo debajo de la pregunta, en un párrafo que diga "Total de votos: 24" o el número actual.

Ahora, vamos a estilizar un poco esto porque todavía no se ve muy bien. Lo que voy a hacer es copiar algunos estilos de mi repositorio de GitHub, porque este no es un curso de CSS, y los voy a pegar acá. Pero les voy a explicar los estilos.

El h3, que es la pregunta del "poll", tiene un margen de 0 arriba y abajo, para quitarle el margen por defecto. El color es gris, y el p para mostrar el total de votos tiene un margen arriba de 6px y un tamaño de fuente de 14px para que sea un poco más chico, con un color gris claro y un margen abajo de 30px para separarlo de las respuestas.

Ahora, hablando de las respuestas, tenemos un selector para cada uno de los div con clase answer. Este tiene un fondo gris claro, y el cursor es un puntero, porque más adelante un usuario va a hacer clic en una de las respuestas para votar. También tiene un margen de 10px arriba y abajo para separar las respuestas, y su posición es relativa para que podamos colocar la barra de porcentaje de manera absoluta dentro de cada respuesta.

Cuando pasamos el cursor por encima de una respuesta, la opacidad baja a 0.6, lo que crea un efecto de hover. Además, el span donde mostramos la respuesta y el número de votos tiene un inline-block para darle algo de espacio, con un padding de 10px arriba y abajo y 20px a los costados.

Y ahora, si guardamos los cambios, vemos que el diseño se ve mucho mejor. Podemos agregar un nuevo "poll" y ver cómo se muestran los dos juntos. En el futuro, cuando hagamos clic en una de estas respuestas, debería votar por esa opción y actualizar tanto el número de votos como la barra de porcentaje.

Eso es todo por ahora. Lo que me gustaría hacer después es tal vez crear un componente de tarjeta personalizada, para que cada uno de estos "polls" esté dentro de una tarjeta, que es como un contenedor que le da un poco de profundidad y lo hace ver más ordenado.