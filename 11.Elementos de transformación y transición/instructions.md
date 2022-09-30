Ya se proporciona el código inicial para el HTML, la solución debe implementarse en el archivo CSS.

Además, ya se han agregado reglas para la clase 'contenedor' y la clase 'letras' junto con algunas propiedades más definidas mediante el selector Universal. Debe agregar las reglas para otros selectores según las instrucciones a continuación:

Agregue las siguientes reglas para el elemento 'p' presente dentro de la clase 'letras' usando el selector de descendientes:

**Paso 1:** Alinear el texto al centro

```
text-align: center;
```

**Paso 2:** Cambia el color de fondo a un valor RGB de 250, 150, 100 respectivamente.
```
background-color: rgb(250, 150, 100);
```

**Paso 3:** Asigne el ancho a 70 píxeles

```
width: 70px;
```

**Paso 4:** Al lado derecho del margen se le debe asignar un valor de 1,5 píxeles

```
margin-right: 1.5px;
```

**Paso 5:** Cambia el radio del borde al 15 por ciento.

```
border-radius: 15%;
```

**Paso 6:** Ahora asigna al color del borde un valor RGB de 250, 125 y 75 respectivamente.

```
border-color: rgb(250, 125, 75);
```

**Paso 7:** Finalmente cambie el estilo del borde para que sea sólido.

```
border-style: solid;
```

Cree nuevas reglas para el enésimo hijo 'par' del elemento 'p' que sigue a la clase 'letras'

Utilice el selector de descendientes de tal manera que, una vez que 'pasa el cursor' sobre la clase 'letras', para el 'enésimo hijo' del elemento 'p' dentro de él, se deben asignar las siguientes reglas:

**Paso 8:** Agregue una transformación en la que rotará las etiquetas del elemento 'p' en el eje Y en 360 grados.
```
transform: rotateY(360deg);
```

**Paso 9:** También debe mostrar la transición para esto durante un período de tiempo de 0,5 segundos.

```
transition: 0.5s;
```

Sugerencia: las reglas para los hijos con valores 'pares' de un selector dado se pueden especificar mediante una sintaxis como:
selector:n-ésimo-hijo(par)

Similar a las reglas anteriores, ahora debe crear reglas para el enésimo hijo 'impar' del elemento 'p' que sigue a la clase 'letras'.

Utilice el selector de descendientes de tal manera que, una vez que 'pasa el cursor' sobre la clase 'letras', para el 'enésimo hijo' impar del elemento 'p' dentro de él, se deben asignar las siguientes reglas:

**Paso 10:** Agregue una transformación en la que rotará las etiquetas del elemento 'p' en el eje X en 360 grados.

```
transform: rotateX(360deg);
```

**Paso 11:** También debe mostrar la transición para esto durante un período de tiempo de 1,5 segundos.

```
transition: 1.5s;
```

Sugerencia: las reglas para los hijos con valores 'impares' de un selector dado se pueden especificar mediante una sintaxis como:
selector:n-ésimo-hijo(impar)