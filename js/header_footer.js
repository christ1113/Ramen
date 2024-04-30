function menu_icon_click(){
        let menu_icon = document.getElementById("menu-icon");
        let navbarList = document.getElementById("navbar-list-mobile");
        if (navbarList.style.width === "0px") {
            navbarList.style.width = "90%";
            navbarList.style.transition = " .5s ease";
            navbarList.style.display = "flex";
        } else {
            navbarList.style.width = "0px";
        }
    }
    function init(){
        document.getElementById("menu-icon").addEventListener('click' , menu_icon_click, false)
    }
    window.addEventListener("load", function() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        init();
    }
    window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
        init();
    } else {
        document.getElementById("menu-icon").removeEventListener('click', menu_icon_click);
    }
});
}, false);