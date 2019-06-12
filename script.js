window.addEventListener("load", sidenVises);

function sidenVises() {
    // Queryselector på burger menu
    // Kalder function show menu
    document.querySelector("#menu").addEventListener("click", openNav);
}

/* Set the width of the side navigation to 250px */
function openNav() {
    console.log("yo");
    document.querySelector("#mySidenav").style.width = "250px";
    document.querySelector("#kryds").addEventListener("click", closeNav)
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.querySelector("#mySidenav").style.width = "0";
    document.querySelector("#menu").addEventListener("click", openNav)
}
