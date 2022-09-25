Ya se proporciona el código inicial para el HTML.

Las reglas para las diferentes áreas dentro del área de la plantilla de cuadrícula ya se proporcionan en el código CSS.

Debe agregar las reglas para la clase de contenedor según las instrucciones proporcionadas.

Los dos conjuntos de reglas que se agregarán para la clase de contenedor tendrán un conjunto para la clase de "contenedor" normal y otro que usará la consulta de medios para un tamaño diferente.

Sigue las instrucciones de abajo:

Asegúrese de verificar la salida en cada paso.

Primero, escriba reglas agregando propiedades para la clase 'contenedor' como se muestra a continuación:

**Paso 1:** Agregue una propiedad de visualización que creará una cuadrícula.

```
pantalla: rejilla;
```

**Paso 2:** Tendrá un ancho máximo de 900 píxeles.

```
ancho máximo: 900px;
```

**Paso 3:** La altura mínima será la longitud de 50 altura de la ventana gráfica

```
min-altura: 50vh;
```

**Paso 4:** Ahora primero agregará una regla para las columnas de la plantilla de cuadrícula que abarcará el 100 % del ancho.

```
cuadrícula-plantilla-columnas: 100%;
```

**Paso 5:** Luego agregará una regla para los valores de la plantilla de cuadrícula para cinco filas, de las cuales la del medio tendrá un valor de 1 área fraccionaria y el resto se establecerá en automático.

```
grid-template-rows: auto auto 1fr auto auto;
```

**Paso 6:** Finalmente, creará un área de plantilla de cuadrícula que contendrá cinco valores, a saber. 'encabezado', 'izquierda', 'principal', 'derecha' y 'pie de página'

```
grid-template-areas: "encabezado" "izquierda" "principal" "derecha" "pie de página";
```

De manera similar a las reglas que definió anteriormente, agregará nuevamente un conjunto diferente de reglas dentro de la consulta de medios cuando el ancho mínimo de la ventana gráfica sea de 440 píxeles.

Las reglas que se agregarán para la 'clase' del contenedor serán las siguientes:

**Paso 7:** Las tres columnas de la plantilla de cuadrícula tendrán valores respectivos de 150 píxeles, 1 área fraccionaria y nuevamente 150 píxeles.

```
cuadrícula-plantilla-columnas: 150px 1fr 150px;
```

**Paso 8:** Las tres filas de la plantilla de cuadrícula tendrán el valor medio de 1 área fraccionaria, mientras que las otras dos se establecerán en automático

```
grid-template-rows: auto 1fr auto;
```

**Paso 9:** Finalmente, esta vez, creará un área de plantilla de cuadrícula de 3 x 3 que solo tendrá un encabezado en la primera fila. Tendrá "izquierda", "principal" y "derecha" en la segunda fila y finalmente tendrá solo "pie de página" en la última fila.

```
grid-template-areas: "encabezado encabezado encabezado"
"izquierda principal derecha"
"pie de página pie de página pie de página";
```


Abra index.html en Vista previa en vivo.