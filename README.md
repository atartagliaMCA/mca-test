## Scripts disponibles

En el directorio del proyecto, podemos correr:

### `npm start`

Para correr en modo desarrollo:
Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### `npm test`

Este comando corre los test en modo interactivo pero no han sido implementados por falta de tiempo.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\

## Comentarios

Intenté utilizar un diseño minimalista para emplear el tiempo en resolver el challenge.
Con mayor tiempo añadiría un filtro que ordene los productos por precio o alfabeticamente.
También podría añadirse un paginado.
Otra opción sería sumar un dark theme.

con respecto al addToCart, pude hacer que se añada un producto. Al probarlo con postman la api me retornaba la acumulación de los productos en el cart, pero por estar la api en un dominio diferente al front de mi local, no funciona la cookie de sesion en el navegador y no se incrementa el valor del carrito, mas allá de uno.

Quizás una solución podría ser la instalación de un proxy.
