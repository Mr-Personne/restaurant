
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function slideLeft() {
    // alert("test");
    var slide1 = document.getElementsByClassName("slide1");
    var slide2 = document.getElementsByClassName("slide2");
    alert(slide2[0]);
    slide1[0].style.display = "none";
    slide2[0].style.display = "flex";

}


function showSlides(n) {
    //alert("test right");
    var i;
    var slides = document.getElementsByClassName("inner-slide-d-flex");
    //var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    /* for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
     */
    slides[slideIndex - 1].style.display = "flex";
    //dots[slideIndex - 1].className += " active";
}
