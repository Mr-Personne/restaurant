var onOff = 0;

//selectionne et calcule le height de body
var pageBody = document.querySelector("body");
var bodyHeight = pageBody.offsetHeight;
console.log(bodyHeight);

//selectionne et calcule le heignt du header
var pageHeader = document.querySelector("header");
var headerHeight = pageHeader.offsetHeight;
console.log(headerHeight);

//calcule taille restante sans le header pour taille de nav
var navHeight = bodyHeight - headerHeight;
console.log(navHeight);

//calcule width de la fenetre pour savoir quel style il faut appliquer dans le onresize
var screenWidth = screen.width;



function openNav() {
    // onOff = 1;
    var navMenu = document.getElementById("navi");

    //applique taille navHeight au css du nav
    navMenu.style.height = navHeight + "px";

    if (onOff == 0) {
        navMenu.style.display = "block";
        navMenu.style.position = "absolute";
        onOff = 1;
    }
    else if (onOff == 1) {
        navMenu.style.display = "none";
        navMenu.style.position = "initial";
        navMenu.style.height = "100%";
        onOff = 0;
    }

    //alert("burger");

}


function myFunction() {
    if (screenWidth >= 768) {
        var navMenu = document.getElementById("navi");
        navMenu.style.display = "block";
        navMenu.style.position = "initial";
        navMenu.style.height = "100%";
    }
    else {
        navMenu.style.display = "none";
        //applique taille navHeight au css du nav
        navMenu.style.height = navHeight + "px";
        navMenu.style.position = "absolute";
    }
}

//test