
Responsive design.
    - Grid flexible.
    - Multimedia Flexible.
    - Uso mediaqueries

    Enfoque Maquetacion.
        - Movile First - Progressive Enhancement.
        - Desktop First - Graceful Degration.
_______________________________________________________________________

Responsible Responsive desing.
    Buenas practicas de Css JS ServerSide.
        - Adaptive Desing.
        - RESS.
        - Responsible Desing.
_______________________________________________________________________

Formula css.
    - Posicionamiento: position, Z-index, fload, display Etc.
    - Modelo de caja: width, height, padding, margin Etc.
    - Texto: font Etc.
    - varios: backgrounds, opacity, Etc.

https://github.com/jonmircha/buenas-practicas-frontend


Organizacion SMACSS
    Sclable and Modular Architecture for CSS.

    Base
        Estilos base - inicializacion de estilos.

    Theme
        Look and feel de la aplicacion.

    State
        Cambios de estado con sintaxis (.is-hide .is-show . is-active).

    Layout
        Maquetacion general por vistas.

    Mobile
        Maquetacion mobil.

    Modules
        Componentes que se repiten  (Botones - iconos - widgets).








Metodologia OOCSS
    Object-Oriented CSS

    - Separar la estructura del diseño (en inglés lo describen como skin, piel).
    - Separar contenedor del contenido.

    Sass optimiza esta metodologia con: mixin - placeholder - funtions.
    
    Ejemplo
..............................................................................
        h1{
            font-family: 'Roboto', Helvetica, sans-serif;
            color: #F44;
        }
        /* ... */
        h1, .h1-size { font-size: 2em;   }
        h2, .h2-size { font-size: 1.8em; }
        h3, .h3-size { font-size: 1.5em; }
        /* ... */
        .transparente {
            opacity: 0.5;
            filter: alpha(opacity = 50);
        }
..............................................................................
        <header>
            <h1>Header Title</h1>
        </header>
        <footer>
            <h1 class="h3-size muted">Small title in the footer</h1>
        </footer>
..............................................................................










Sintaxis BEM 
    Bloque - Elemento - Modificadores. 

    Bloque
        Entidad independiente que tiene significado por sí misma. (header, container, menu, checkbox, input…).

    Elemento
        Partes de un bloque que no tienen un significado independiente. Están semánticamente vinculados a su bloque. (elemento de un menú, elemento de una lista, titulo de un header, caption de un elemento picture, etc…).

    
    Modificadores
        Indicadores de bloque o elemento. Utilizados para cambiar la apariencia o comportamiento. (disabled, highlighted, checked, fixed, size big, color yellow…)

    Sintaxis
        .navBar                     (contenedor).
        .navBar__item               (items del contenedor).
        .navBar__item--faceBook     (item modificado ).

------------------------------------------------------------- 
    Nota
    - Las definicion de clases debe ser en ingles.
    - La sintaxis para generica es camelcase. (.navBar).
    - los subniveles no devén exceder 4 niveles (.niv-1__.niv-2__.niv-3__.niv-4--.nivNuevo).
------------------------------------------------------------- 




Arquitectura de proyecto.
    - Organización de directorios y descripción de los mismos.
    - Puede obtener más información de los directorios y archivos en gulpfile.js.






/*=== Web Code ===*/
// Input hover =  http://codepen.io/MichaelArestad/pen/ohLIa
// Button hover = http://codepen.io/kjbrum/pen/wBBLXx
// selectors =    https://code.tutsplus.com/es/tutorials/the-30-css-selectors-you-must-memorize--net-16048
// gradient =     http://www.cssmatic.com/es/gradient-generator#'\
// Font =         https://transfonter.org/