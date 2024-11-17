**Condicionales en Svelte**

A veces, en nuestro código necesitamos mostrar condicionalmente diferentes HTML dependiendo de una cierta condición. Por ejemplo, si un usuario está logueado en tu sitio web, podrías mostrar una cosa, y una diferente si está desconectado. Entonces, necesitas verificar esa condición, si está logueado o no, y luego mostrar dos cosas diferentes en tu plantilla, dependiendo de eso.

Para hacer este tipo de verificación en Svelte, podemos usar **sentencias condicionales**, también conocidas como **comprobaciones if**. Vamos a hacer un ejemplo sencillo. Primero, en el script de arriba, voy a crear una pequeña variable llamada `num`, que representa un número, y le voy a asignar el valor de 5. Luego, en la plantilla, podemos hacer una verificación `if` justo encima de `main`, por ejemplo, de la siguiente manera:

```html
{#if num > 20}
<p>Mayor que 20</p>
{/if}
```

Aquí, estamos usando el bloque `#if`, que es similar a `#each` que vimos antes, pero esta vez con la condición que queremos evaluar. Si `num` es mayor que 20, el HTML dentro de este bloque se mostrará. Si la condición no es verdadera, no se mostrará nada.

En este caso, no veremos nada, porque el valor de `num` es 5, lo cual no es mayor que 20. Si cambio el valor de `num` a 25 y guardo el archivo, veremos el mensaje "Mayor que 20", porque esta evaluación fue verdadera y el HTML dentro del bloque se muestra.

Ahora, cambiamos `num` de nuevo a 5, y podemos también agregar una sentencia `else if` para evaluar otra condición. Lo hacemos de la siguiente manera:

```html
{#if num > 20}
<p>Mayor que 20</p>
{:else if num > 5}
<p>Mayor que 5</p>
{/if}
```

En este caso, si `num` es mayor que 20, se mostrará "Mayor que 20". Si no lo es, pero es mayor que 5, entonces se mostrará "Mayor que 5". Si ninguna de estas condiciones se cumple, no se mostrará nada.

Puedo probar esto guardando el archivo y observando que no aparece nada. Pero si cambio `num` a 15, veremos el mensaje "Mayor que 5", porque `num` ahora es mayor que 5, pero no es mayor que 20.

Si quiero hacer una verificación "catch-all" (que cubra todos los demás casos), podemos usar `else` al final:

```html
{#if num > 20}
<p>Mayor que 20</p>
{:else if num > 5}
<p>Mayor que 5</p>
{:else}
<p>No es mayor que 5</p>
{/if}
```

Aquí, si `num` no es mayor que 20 ni mayor que 5, se ejecutará el bloque `else` y mostrará "No es mayor que 5". Si pongo `num = 3` y guardo, veremos el mensaje "No es mayor que 5".

---

**Aplicando Condicionales en un Loop**

Ahora, voy a aplicar este tipo de lógica condicional a nuestra pequeña plantilla para cada persona, que tenemos más abajo. Lo que quiero hacer es verificar si el color del cinturón de la persona es **negro**. Si lo es, voy a mostrar una línea extra en el HTML.

Voy a hacerlo dentro del loop `each`, donde estamos recorriendo las personas. Si el color del cinturón de una persona es negro, voy a mostrar un mensaje que diga **"Master Ninja"**.

Así que lo que hago es lo siguiente:

```html
{#each people as person} {#if person.beltColor === 'black'}
<p><strong>Master Ninja</strong></p>
{/if} {/each}
```

En este código, estamos utilizando el bloque `#if` dentro de un loop `each`. Si el `beltColor` de la persona es igual a "black", se mostrará un mensaje con el texto **"Master Ninja"**. Si no, no se mostrará nada.

Así que si vemos la lista de personas, podemos observar que solo se mostrará el mensaje **"Master Ninja"** para aquellos que tengan el cinturón negro. Por ejemplo, si **Yoshi** tiene un cinturón negro, veremos el mensaje, pero si otra persona tiene un cinturón de un color diferente, no se mostrará nada.

---

**Resumen:**

Así es como funcionan las sentencias condicionales en Svelte. Podemos usar estas verificaciones `if`, `else if` y `else` para mostrar diferentes partes del HTML dependiendo de ciertas condiciones. Esto es útil para mostrar contenido dinámico según el estado de la aplicación, como si un usuario está logueado o si una persona tiene un cinturón de un color específico. ¡Es una forma poderosa de controlar el flujo de nuestra aplicación!
