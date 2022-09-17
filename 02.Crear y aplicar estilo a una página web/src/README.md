# Instrucciones de laboratorio: crear y diseñar una página web

En este ejercicio, practicará la creación de su página web utilizando HTML y CSS.<br><br>

> ### **Consejos: Antes de comenzar**
> #### **Para ver su código e instrucciones en paralelo**, seleccione lo siguiente en la barra de herramientas de VSCode:
> - Ver -> Diseño del editor -> Dos columnas
> - Para ver este archivo en el modo de vista previa, haga clic derecho en este archivo README.md y`Open Preview`
> - Seleccione su archivo de código en el árbol de código, que lo abrirá en una nueva pestaña de VSCode.
> - Arrastre sus archivos de código de evaluación a la segunda columna.
> - Gran trabajo! Ahora puede ver las instrucciones y el código al mismo tiempo.
  <br><br>
 
<br>

## Tarea 1: Crear el archivo HTML.

Objetivos
- Añadir photo.jpg a la página web.
- Añade tu nombre como encabezado de la página web.
- Agrega una lista desordenada de tus cinco artistas musicales favoritos.
- Agrega una lista ordenada de tus cinco películas favoritas.
- Agregue un hipervínculo a su perfil de Facebook o meta.com.

Siga las instrucciones paso a paso a continuación:

1. Abra el archivo `index.html` y configure la siguiente estructura básica de documento HTML:
    ```HTML
    <!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
    </body>
    </html>
    ```

2. Establezca el título del documento HTML a su nombre:
    ```HTML
    <!DOCTYPE html>
    <html>
    <head>
        <title>your name</title>
    </head>
    <body>
    </body>
    </html>
    ```

3. Enlace a `styles.css` en el elemento `head`.

4. Agregue cinco elementos divisorios al elemento `cuerpo`.

5. Agregue un encabezado 1 al primer elemento divisor que muestra su nombre.

6. Agregue `photo.jpg` usando un elemento de imagen en el segundo elemento divisor.

7. Agregue un atributo de ID con el valor `foto` en el elemento de imagen.

8. Agregue un encabezado 2 para `Artistas musicales favoritos` en el tercer elemento divisor. En el mismo divisor agrega una lista desordenada con tus 5 artistas favoritos.

9. Agregue un encabezado 2 para `Películas favoritas` en el cuarto elemento divisor. En el mismo divisor agrega una lista ordenada con tus 5 películas favoritas.

10. Agregue un hipervínculo a su página de perfil de Facebook en el último elemento divisor. Alternativamente, agregue un hipervínculo a `https://www.meta.com/`. Como último paso, agregue `Mi perfil` al texto descriptivo de la etiqueta `<a>`.


<br>

## Tarea 2: Dale estilo a la página web usando CSS.

Objetivos
- Estilo de la página web usando CSS.

Siga las instrucciones paso a paso a continuación:

1. Abra el archivo `styles.css`.

2. Agregue una regla CSS para su imagen que establezca la propiedad `borde` en `2` píxeles de ancho con un color `azul sólido`.

3. Agregue una regla CSS para el encabezado 1 que contenga su nombre y establezca su color en "azul".

4. Agregue una regla CSS para todos los encabezados `<h2>` y establezca su color en `gris`.

5. Agregue una regla CSS que aplique un "margen" de "4" píxeles a los elementos divisores.


<br>



## Paso final: ¡Enviemos su código!
¡Buen trabajo! Para completar esta evaluación:
- Guarde su archivo a través de Archivo -> Guardar
- Seleccione "Enviar tarea" en la barra de herramientas de su laboratorio.

Su código se calificará automáticamente y devolverá comentarios en breve en la pestaña "Calificaciones".
También puede ver su puntaje en la pestaña "Mi envío" de su tarea de programación.
<br> <br>

### Puntas

* Asegúrese de que las etiquetas HTML estén bien cerradas.
* Use un tipo de encabezado diferente para su nombre.
* Recuerda el modelo de caja.
* Repase las lecciones *Creación de un documento HTML*, *Adición de imágenes*, *Selección y estilo* y *Diferentes tipos de selectores*.