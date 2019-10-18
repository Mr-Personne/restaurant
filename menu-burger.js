var onOff = 0;
function openNav(){
    // onOff = 1;
    var navMenu = document.getElementById("navi");
    if(onOff == 0){
        navMenu.style.display = "block";
        navMenu.style.position = "absolute";
        onOff = 1;
    }
    else if(onOff == 1){
        navMenu.style.display = "none";
        onOff = 0;
    }
    
    //alert("burger");
}