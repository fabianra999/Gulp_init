/**
 *  Loader
 *  => Params 'show' | 'hide' || () = toggle.
 */
function loader(state: string = null, container: string = 'footer') {
    let containerVar = container;
    let loaderVar = document.querySelector('.loader');

    function newLoader() {
        // crea un nuevo div
        // Añadir clase => .loader
        let newLoader = document.createElement("div");
        newLoader.className = "loader";

        // crea un nuevo div
        // Añadir clase => .loader-circles
        let newloaderCircles = document.createElement("div");
        newloaderCircles.className = "loader-circles";

        // añade el elementos creados y su contenido al DOM  => .loader
        let currentDiv = document.querySelector(containerVar[0]);
        document.body.insertBefore(newLoader, currentDiv);

        // añade el elementos creados y su contenido al DOM  => .loader-circles
        document.querySelector(".loader").appendChild(newloaderCircles);

        // crea un nuevo div => .circles
        for (let i = 1; i <= 10; i++) {
            let newCircles = document.createElement("div");
            newCircles.className = "circles";

            // añade el elementos creados y su contenido a => .loader-circles
            document.querySelector(".loader-circles").appendChild(newCircles);
        }
    }

    if (loaderVar == null) {
        newLoader();
    } else if (state == 'show') {
        newLoader();
    } else if (state == 'hide') {
        loaderVar.remove();
    } else {
        loaderVar.remove();
    }

}
