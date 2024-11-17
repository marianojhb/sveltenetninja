# Componentes

Hemos estado trabajando hasta ahora en un solo componente, que es el archivo `App.svelte` que vino al crear un nuevo proyecto en Svelte. Sin embargo, en una aplicación típica de Svelte, la página web se compone de muchos componentes diferentes, como por ejemplo: un **header**, un **footer**, un **modal**, **contenido**, **sidebar**, etc. Y esos componentes se combinan en una estructura jerárquica, similar a un árbol, para formar el contenido completo de la página.

En la parte superior, habría un **componente raíz**, que es el que se inyecta directamente en el DOM desde el archivo principal `main.js`, como vimos antes en el curso. Y debajo de este componente raíz, habría otros componentes como un **header**, un componente **Content**, un componente **footer**, y dentro del contenido podríamos agregar más componentes, como un **modal**, una **sidebar**, entre otros.

### ¿Por qué usar componentes?
La principal razón para dividir el código en componentes es:
1. **Modularidad y organización**: Mantener el código limpio y legible. Si todo estuviera en un solo componente, el código se volvería desordenado rápidamente.
2. **Reusabilidad**: Al dividir el código en componentes, podemos reutilizar los componentes en diferentes partes de la aplicación. Por ejemplo, podríamos crear un **botón** personalizado que se puede usar en varias partes de la página sin duplicar el código.

### Crear un componente Modal
El tutorial explica cómo crear un **componente Modal** dentro de la aplicación:
1. Crea un archivo llamado `Modal.svelte` dentro del directorio `src`.
2. Dentro de este componente, se incluye un `div` con dos clases: una para el **fondo semitransparente** (backdrop) y otra para el **contenido del modal** (modal).
3. En el archivo `App.svelte`, se importa el componente `Modal.svelte` y se inserta en el template usando la etiqueta `<Modal />`.

### Condicional para mostrar el modal
Inicialmente, el modal siempre se muestra. Para controlar cuándo se muestra, se agrega una **variable booleana** llamada `showModal` en el componente `Modal.svelte`. Luego, se utiliza un bloque `if` para evaluar si esta variable es `true` o `false`. Si es `true`, se muestra el modal; si es `false`, se oculta. Esto permite controlar dinámicamente la visibilidad del modal.

**Pasos clave**:
1. Crear el componente `Modal.svelte`.
2. Importar y usar este componente dentro de `App.svelte`.
3. Agregar la lógica condicional para mostrar o ocultar el modal, dependiendo del valor de la variable booleana.

Este es solo un ejemplo básico. En el futuro, se podrían agregar características adicionales, como animaciones o interacción con botones para alternar entre mostrar y ocultar el modal.