/**
 * Bar progres 
 */
function progresBar() {

    const progress = document.querySelector('.barra-progreso');
    const bar = progress.querySelector('.barra-progresoEstatus');

    let scrollSpace = document.body.scrollHeight - window.innerHeight;
    let read = window.scrollY / scrollSpace * 100;
    bar.style.width = `${read}%`;

};


/**
 * called Bar progres 
 */
//window.addEventListener('scroll', () => progresBar() );
//window.addEventListener('resize', () => progresBar() );

/**
 * Styles Bar progres 
 */

/**
.barra-progreso {
    width: 100%;
    height: 2px;
    margin: -2px auto 0;
    background: #DDD;
    position: absolute;
    bottom: -1px;
    left: 0;
    .barra-progresoEstatus{
      position: absolute;
      height: 100%;
      width: 1px;
      background: linear-gradient(90deg, tomato,orange);
      transition: 0s width linear;
    }
  }
 */