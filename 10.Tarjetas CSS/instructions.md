### Learner Instructions


**Paso 1:** Agregue un padding de 10 px a la clase de sección

```
.section {
	padding: 10px;
}
```

**Paso 2:** Cambie el peso de la fuente a negrita para la clase de etiqueta

```
.label {  
	font-weight: bold;
}
```

**Paso 3:** Para la clase de descripción, cambie el estilo de la fuente a cursiva.

```
.description {
    font-style: italic;
}
```

**Paso 4:** Además, agregue un borde en la parte superior de 2px que sea sólido y tenga un código de color de '#495E57'

```
border-top: 2px solid #495E57;
```

**Paso 5:** En el nombre del elemento de la clase, cambie el margen a 25 píxeles y el tamaño de fuente a 12 píxeles.

```
.item-name {
	margin: 25px;
	font-size: 12px;
}
```

**Paso 6:** Haga flotar el contenido del elemento b a la derecha.

```
b {
    float: right;
}
```

**Paso 7:** Agregue un margen en la parte superior de -15px.

```
margin-top: -15px; /* Inside b */
```

**Paso 8:** Cambia el color del elemento a cian oscuro
```
color: darkcyan; /* Inside b */
```

**Paso 9:** Agregue un combinador secundario para las etiquetas h3 que siguen a la etiqueta div y asígneles las reglas de la siguiente manera:

**Step 9.a** change the font size as well as margin to 20px
```
div > h3 {
    font-size: 20px;
    margin: 20px;
}
```

**Paso 9.b:** Cambiar la alineación del texto al centro
```
    text-align: center;
```

**Paso 9.c:** Asígnale un código de color de '#495E57'

```
    color: #495E57;
```

**Paso 10:** Agregue un combinador de hermanos adyacente para artículos de clase baja que siguen la etiqueta de clase y cambie su color a marrón

```
.label + .low {
  color: brown; 
}
```

**Paso 11:** Agregue un combinador de hermanos general para las etiquetas div que siguen a otras etiquetas div y cambie su color a valores RGB de 90,90,90.

```
div ~ div {
  color: rgb(90, 90, 90);
}
```