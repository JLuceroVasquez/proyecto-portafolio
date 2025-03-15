// Lógica para cambiar la clase de los enlaces de RRSS cuando hacemos click sobre ellos
document.querySelectorAll(".contenido__presentacion__redSocial__item").forEach(item => {
    // Agregar la clase --hover cuando el usuario pasa el cursor
    item.addEventListener("mouseenter", function () {
        this.classList.add("contenido__presentacion__redSocial__item--hover");
    });

    // Remover la clase --hover cuando el cursor sale
    item.addEventListener("mouseleave", function () {
        this.classList.remove("contenido__presentacion__redSocial__item--hover");
    });

    // Agregar la clase --active cuando el usuario hace clic
    item.addEventListener("mousedown", function () {
        document.querySelectorAll(".contenido__presentacion__redSocial__item--active").forEach(activeItem => activeItem.classList.remove("contenido__presentacion__redSocial__item--active"));
        this.classList.add("contenido__presentacion__redSocial__item--active");
    });
});

// Lógica para cambiar la clase de los enlaces del menu cuando hacemos click sobre ellos
document.querySelectorAll(".encabezado__menu__item").forEach(item => {
    // Agregar la clase --hover cuando el usuario pasa el cursor
    item.addEventListener("mouseenter", function () {
        this.classList.add("encabezado__menu__item--hover");
    });

    // Remover la clase --hover cuando el cursor sale
    item.addEventListener("mouseleave", function () {
        this.classList.remove("encabezado__menu__item--hover");
    });

    // Agregar la clase --active cuando el usuario hace clic
    item.addEventListener("mousedown", function () {
        document.querySelectorAll(".encabezado__menu__item--active").forEach(activeItem => activeItem.classList.remove("encabezado__menu__item--active"));
        this.classList.add("encabezado__menu__item--active");
    });
});
