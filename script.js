var burgerMenu = document.querySelector("#burger-menu");

function openSidebar() {
    console.log("nu kører det");

    if (!(burgerMenu.style.display == "block")) {
        burgerMenu.style.display = "block";
    } else {
        burgerMenu.style.display = "none";
    }
}
