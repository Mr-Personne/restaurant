function surligne(champ, erreur) {
    if (erreur)
        champ.style.border = "#fa2020 solid 2px";
    else
        champ.style.border = "";
}

function verifPseudo(champ) {
    if (champ.value.length < 2 || champ.value.length > 25) {
        surligne(champ, true); 
        
        return false;
    }
    else {
       
        surligne(champ, false);
        return true;
    }
}



function verifMail(champ) {
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regex.test(champ.value)) {
        surligne(champ, true);
        
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}


function verifSubject(champ) {
    if (champ.value.length < 2 || champ.value.length > 100) {
        surligne(champ, true);
        
        return false;
    }
    else {
        surligne(champ, false);
        return true
    }
}

function verifMessage(champ) {
    if (champ.value.length < 2 || champ.value.lentgh > 1000) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}






function verifForm(f) {
    
    var firstNameOk = verifPseudo(f.pseudo);  
    var emailOk = verifMail(f.email);
    var subjectOk = verifSubject(f.subject);
    var messageOk = verifMessage(f.message);

    if (firstNameOk && emailOk && subjectOk && messageOk)
        return true;
    else {
        alert("Veuillez remplir correctement tous les champs");
        return false;
    }
}