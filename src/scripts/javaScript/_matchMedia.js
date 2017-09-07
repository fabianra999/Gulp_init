/**
* mediaQueryJs
* - Tamaño mediasQuery´s de bootstrap 4.
* - function resize and onload.
* - Funcion auto ejecutable.
**/

( mediaQueryJs => {

  // mediaQuery -> Tamaños
  const mediaQuery = [
    matchMedia('(max-width: 576px)'),
    matchMedia('(min-width: 577px) and (max-width: 768px)'),
    matchMedia('(min-width: 769px) and (max-width: 992px)'),
    matchMedia('(min-width: 993px)'),
  ];


  // Dondicional por mediaQuery
  const changeSize = function (){
    if (mediaQuery[0].matches){
      //console.log('1 sm');
      //document.body.style.background = 'red'

    }
    if (mediaQuery[1].matches) {
      //console.log('2 md');
      //document.body.style.background = 'blue'

    }
    if (mediaQuery[2].matches) {
      //console.log('3 lg');
      //document.body.style.background = 'tomato'

    }
    if (mediaQuery[3].matches) {
      //console.log('4 xl');
      //document.body.style.background = 'green'

    }
  }

  let key_1 = 0;
  for (let mediaQuerys of mediaQuery) {
    //console.log(key_1);
    //console.log(mediaQuerys);
    // console.log('q es:', mediaQuery[0].matches);

    mediaQuery[key_1].addListener(changeSize);
    changeSize(mediaQuery[key_1]);

    key_1++;
  }
})();

/**
 *  mediaQueryJs b4 (estrictas)
 *
 **/
function mediaQueryEsJs() {
  // mediaQuery -> Tamaños
  const mediaQuery = [
    matchMedia('(max-width: 576px)'),
    matchMedia('(min-width: 577px) and (max-width: 768px)'),
    matchMedia('(min-width: 769px) and (max-width: 992px)'),
    matchMedia('(min-width: 993px)'),
  ];

  if (mediaQuery[0].matches) { // -> sm
    //console.log('1 sm');

  } else if (mediaQuery[1].matches) { // -> md
    //console.log('2 md');

  } else if (mediaQuery[2].matches) { // -> lg
    //console.log('3 lg');

  } else (mediaQuery[3].matches) // -> xl
  {
    //console.log('4 xl');

  }

};


/**
 * Funcion Resize
 * Resize mediaQuery
 **/

object.addEventListener("resize", () => {
  //console.log('Hola Resize');
});
