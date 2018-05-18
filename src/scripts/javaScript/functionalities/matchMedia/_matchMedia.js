function mobileMediaQuery() {

    const mediaQueryInfo = {
        xs: matchMedia("(max-width: 576px)"),
        sm: matchMedia("(min-width: 577px) and (max-width: 768px)"),
        md: matchMedia("(min-width: 769px) and (max-width: 991px)"),
        lg: matchMedia("(min-width: 992px) and (max-width: 1200px)"),
        xl: matchMedia("(min-width: 1201px)"),
        iPad: matchMedia("(min-width: 577px) and (max-width: 1024px)")

    };
    const bodySelector = document.querySelectorAll('body')[0];


    /*
     *  Mobile Class
     *   => Toggle Class: ***
     * */
    if (mediaQueryInfo.xs.matches) {
        if (document.querySelector('.sizes__xs') === null) {
            bodySelector.classList.add('sizes__xs');
        } else {
            for (let value of bodySelectorInfo) {
                if (value === 'sizes__sm' || value === 'sizes__md' || value === 'sizes__lg' || value === 'sizes__xl') {
                    bodySelector.classList.remove(value);
                }
            }
        }
    } else if (mediaQueryInfo.sm.matches) {
        if (document.querySelector('.sizes__sm') === null) {
            bodySelector.classList.add('sizes__sm');
        } else {
            for (let value of bodySelectorInfo) {
                if (value === 'sizes__xs' || value === 'sizes__md' || value === 'sizes__lg' || value === 'sizes__xl') {
                    bodySelector.classList.remove(value);
                }
            }
        }
    } else if (mediaQueryInfo.md.matches) {
        if (document.querySelector('.sizes__md') === null) {
            bodySelector.classList.add('sizes__md');
        } else {
            for (let value of bodySelectorInfo) {
                if (value === 'sizes__xs' || value === 'sizes__sm' || value === 'sizes__lg' || value === 'sizes__xl') {
                    bodySelector.classList.remove(value);
                }
            }
        }
    } else if (mediaQueryInfo.lg.matches) {
        if (document.querySelector('.sizes__lg') === null) {
            bodySelector.classList.add('sizes__lg');
        } else {
            for (let value of bodySelectorInfo) {
                if (value === 'sizes__xs' || value === 'sizes__md' || value === 'sizes__sm' || value === 'sizes__xl') {
                    bodySelector.classList.remove(value);
                }
            }
        }
    } else if (mediaQueryInfo.xl.matches) {
        if (document.querySelector('.sizes__xl') === null) {
            bodySelector.classList.add('sizes__xl');
        } else {
            for (let value of bodySelectorInfo) {
                if (value === 'sizes__xs' || value === 'sizes__md' || value === 'sizes__lg' || value === 'sizes__sm') {
                    bodySelector.classList.remove(value);
                }
            }
        }
    }

    /*
     *  Mobile menu
     *   => Toggle Class: mobileMenu
     * */
    if (mediaQueryInfo.mobileNav.matches) {
        if (document.querySelector('.mobileMenu') === null) {
            bodySelector.classList.add('mobileMenu');
        }
    } else {
        bodySelector.classList.remove('mobileMenu');
    }

    /*
     *  iPat Land Scape
     *   => Toggle Class: iPadLandscape
     * */
    if (mediaQueryInfo.iPad.matches) {
        bodySelector.classList.toggle('iPadLandscape');
    }


}


/**
 * Funcion Resize
 * Resize mediaQuery
 **/

window.addEventListener("resize", function() {
    mobileMediaQuery();
});


/**
 * Funcion Ready
 **/
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {

        mobileMediaQuery();

    }, 1500);
}, false);