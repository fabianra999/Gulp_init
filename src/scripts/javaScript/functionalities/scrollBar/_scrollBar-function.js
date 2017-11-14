/**
 * | Custom javascript scroll bar |
 *  ------------------------------
 * barra de desplazamiento horizontal.
 *
 *
 *  *  *  *  *  *  options *  *  *  *  *
 *
 * Function => scrollBar (".identifier");
 * Parameters options => ("#identifier","color","height");
 *
 *  *  *  *  *  *  Markup  *  *  *  * *
 *
 *  <div class="scrollbar">
 *    <div class="scrollbar-bg"></div>
 *  </div>
 *
**/

function scrollBar (scrollbar, color="#f19636", heightBar="5px") {
  // var color = "#f19636";
  // contenedor Barra de progreso
  var bar_bg = document.querySelectorAll(`${scrollbar}-bg`)[0];
  bar_bg.setAttribute("style", `position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: ${color};`);

  // Barra de progreso
  var bar = document.querySelectorAll(`${scrollbar}`)[0];
  bar.setAttribute("style", `position: fixed; top: 0; left: 0; overflow: hidden; width: 0%; height: ${heightBar}; z-index: 9999;`);

  var body = document.body,
      html = document.documentElement;

  bar_bg.style.minWidth = document.width + "px";

  document.getElementsByTagName("body")[0].onresize = function() {
    // Actualiza el ancho del degradado
    bar_bg.style.minWidth = document.width + "px";
  }

  window.onscroll = function() {
    var dw  = document.documentElement.clientWidth,
        dh  = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight ),
        wh  = window.innerHeight,
        pos = pageYOffset || (document.documentElement.clientHeight ?
                              document.documentElement.scrollTop : document.body.scrollTop),
        bw  = ((pos / (dh - wh)) * 100);



    bar.style.width = bw + "%";
  }
}
