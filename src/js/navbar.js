if (typeof document !== 'undefined') {
    const hamburger = document.querySelector("#hamburger");
    const navbar = document.querySelector("#navbar");
    const links = navbar.querySelectorAll("a");

    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("navbar-active");
    });

    links.forEach((link) => {
        link.addEventListener("click", () => {
            navbar.classList.toggle("navbar-active");
        });
    });

}


