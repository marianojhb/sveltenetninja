# Form Custom Validation

Bueno, entonces, lo que quiero hacer ahora es implementar un poco de validación en este formulario para que, por ejemplo, podamos agregar campos vacíos y que los acepte.

Swell no viene con validación para formularios lista para usar, así que tenemos que usar nuestra propia lógica, pero no importa porque es bastante simple de hacer, y eso es lo que vamos a hacer en este video. Así que, justo acá, donde disparamos el manejador de "submit" cuando el formulario se envía, vamos a validar la pregunta primero, luego la respuesta A y la respuesta B.

Lo que también voy a hacer es crear una nueva variable llamada errors, que va a ser un objeto que al principio se va a ver muy parecido al objeto de fields. Y lo que vamos a hacer es almacenar un error para la pregunta en esta propiedad, un error para la respuesta A en esta propiedad, y un error para la respuesta B en esta otra propiedad.

Entonces, estamos haciendo un seguimiento de los errores a medida que validamos cada campo. Si al final tenemos un error en uno de estos campos, declaramos que el formulario no es válido y luego mostramos ese error en el área correspondiente del formulario. Espero que se entienda.

También voy a crear otra variable llamada valid, que voy a poner como false al principio. Ahora, este valor de valid va a ser un booleano, y cuando el formulario no es válido, va a ser false; cuando el formulario sea válido, va a ser true. Al principio, cuando cargamos el formulario, vamos a suponer que no es válido, y luego, si todo está bien, lo vamos a poner como true, pero solo se pondrá como false otra vez si hay un error.

Y entonces, ¿cómo validamos todo esto? Bueno, lo primero que vamos a hacer, en realidad, es poner valid igual a true. Así que, cuando enviemos el formulario, antes de hacer cualquier tipo de validación en los campos, va a decir: "Bueno, está bien, el formulario empieza siendo válido".

Si alguno de estos campos falla, si alguna de las validaciones falla, en ese momento vamos a poner valid en false.

Entonces, ¿cómo validamos la pregunta? Lo que vamos a hacer es una comprobación con if. Voy a decir: "Si fields.question.trim().length es menor que 5", entonces no va a ser válido. Quiero que la pregunta tenga al menos 5 caracteres, así que si esto es true (es decir, si es menor de 5), significa que no es válido. En ese caso, vamos a poner valid en false. También vamos a agregar un error en este campo de la pregunta en el objeto de errors. Lo vamos a hacer con algo como errors.question = 'La pregunta debe tener al menos 5 caracteres'.

Así que esa es la primera validación. Ahora, en el caso del else, si la validación pasa, lo que quiero hacer es resetear este error, es decir, poner el valor de errors.question como un string vacío, porque, por ejemplo, si al principio el formulario no es válido, y luego corregimos la pregunta, quiero que el error de la pregunta se borre. Así, si otro campo tiene un error, no le mostramos a la persona que la pregunta sigue fallando.

Voy a copiar todo esto y pegarlo abajo para la validación de la respuesta A. La validación de la respuesta A va a ser que la longitud tiene que ser de al menos un carácter. Puede ser un carácter, porque la pregunta podría ser algo como "¿Cuál es tu letra favorita? A o B?" (sé que suena estúpido, pero podrían ser respuestas de un solo carácter). Entonces, si la respuesta A está vacía, vamos a hacer que el formulario no sea válido, poniendo valid = false, y agregamos el error correspondiente: "La respuesta A no puede estar vacía".

Lo mismo para la respuesta B. Es muy similar a la validación de la respuesta A, solo que cambiamos todas las menciones de "answer A" por "answer B".

Así que ahora, cuando enviamos el formulario, empezamos con valid como true. Si alguna de estas validaciones falla, ponemos valid = false y agregamos el error correspondiente a este objeto. Al final de todo, vamos a tener un objeto con todos los errores.

Lo que voy a hacer abajo es un comentario que diga: "En este punto, queremos agregar una nueva encuesta", pero solo la vamos a agregar si valid es true. Entonces, si es válido, vamos a mostrar en la consola el objeto fields con los datos que el usuario ingresó. A futuro, vamos a agregar esta nueva encuesta a un array de datos, pero por ahora solo la mostramos en la consola.

Si el formulario no es válido, no se va a hacer esto, y en su lugar, mostramos los errores en el formulario. Para eso, debajo de cada campo de entrada, voy a agregar un div con la clase error, que va a mostrar los errores correspondientes. Si el campo es válido, no se va a mostrar nada, pero si hay un error, vamos a ver el mensaje de error.

Entonces, si pruebo agregar una nueva encuesta y todos los campos son inválidos, voy a ver los errores correspondientes. Pero si rectifico, agrego una pregunta válida y las respuestas también son válidas, el formulario se valida correctamente, y vemos en la consola los datos de la encuesta ingresada.

Por último, voy a estilizar un poco esta clase de error para que se vea mejor, como ponerle color rojo y cambiar el tamaño de la fuente a algo más pequeño, como 12px. Ahora, si volvemos a probar, vemos los errores con el estilo adecuado.

Y eso es todo. Ahora tenemos validación personalizada para el formulario. En el próximo video, vamos a ver cómo podemos tomar esta validación y realmente agregar la nueva encuesta a un array de datos.