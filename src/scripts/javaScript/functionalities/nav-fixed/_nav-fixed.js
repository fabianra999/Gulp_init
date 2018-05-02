/**
 *  nav fixed
 *    clase activa para efecto "menu-fixed"
 *    menui => contenedor fixet
 */
function fixetNav() {
  let nav = document.querySelector('.navbar__global');
  let navTop = nav.offsetTop;
  console.log(navTop);
  console.log(window.scrollY);
  if (window.scrollY > navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    nav.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    nav.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', function () {
  // fixetNav();
});