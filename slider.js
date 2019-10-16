var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  console.log("before timeout index : ");
  var i;
  var slides = document.getElementsByClassName("inner-slide-d-flex");
  console.log(slides);

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  slides[slideIndex - 1].style.display = "flex";
  // setTimeout(showSlides(slideIndex = n), 2000);
}

function autoSlides() {
  var i;
  var slides = document.getElementsByClassName("inner-slide-d-flex");

  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  slides[slideIndex - 1].style.display = "flex";
  slideIndex++;

  
}


//setTimeout(autoSlides(), 2000);