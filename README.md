# Iron Log — sitio web

Sitio publicado: <https://ironlog-ultimamilla.netlify.app>

Cada push a `main` publica automáticamente. No hay proceso de compilación: son
archivos HTML, CSS e imágenes.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Home: servicios, proceso y tabla de precios |
| `ultima-milla.html` | Tarifario de última milla por zona |
| `tarifas.js` | **Los precios.** Se editan acá y en ningún otro lado |
| `img/` | Fotos y logo |

## Cómo se editan los precios

Todo el tarifario está en **`tarifas.js`**. Ese archivo alimenta dos cosas a la
vez: la tabla de precios de `index.html` y el desplegable del cotizador interno,
que vive en otro repositorio. Por eso se edita en un solo lugar.

Para agregar un concepto, se suma un bloque a la lista `TARIFAS`:

```javascript
{
  nombre: "Etiquetado x unidad",
  precio: 300,
  info: "Texto del globito de ayuda, o \"\" si no lleva.",
},
```

- El precio va **sin puntos ni signo `$`**: `510000`, no `$510.000`. El formato se
  aplica solo al mostrarlo.
- Si `info` tiene texto, el botón **i** con el globito aparece solo.
- Ojo con la coma al final de cada bloque.

> ⚠️ **No editar la tabla de precios de `index.html` a mano.** Su `<tbody>` se
> rellena desde `tarifas.js` al cargar la página, así que cualquier fila escrita
> ahí se borra sola.

## Ver el sitio en tu computadora

Las páginas cargan las imágenes desde `img/`, así que abrirlas con doble clic no
alcanza: hace falta un servidor local. Parado en esta carpeta:

```bash
python -m http.server 8934
```

Y entrar a <http://localhost:8934>.

## Qué NO va en este repositorio

Este repositorio es **público**. Todo lo que se agregue acá queda visible en
internet, esté enlazado o no desde alguna página.

El cotizador, el tarifario en Excel y las notas internas viven en un repositorio
privado aparte, en la carpeta `interno/`, que tiene que quedar al lado de esta.
