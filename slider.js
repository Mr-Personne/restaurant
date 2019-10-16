function slideLeft(){
    // alert("test");
    var slide1 = document.getElementsByClassName("slide1");
    var slide2 = document.getElementsByClassName("slide2");
    alert(slide2[0]);
    slide1[0].style.display = "none";
    slide2[0].style.display = "flex";
    
}

function slideRight(){
    // alert("test");
    var bouton = document.getElementById("left-button");
    bouton.style.backgroundColor = "red";
    
}