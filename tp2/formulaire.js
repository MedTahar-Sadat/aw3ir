
            
var minimum = 5;
function validation() {
    
    if (
    (document.getElementById("nom").value.length >= minimum  && document.getElementById("nom").value.length <=20)
    && (document.getElementById("prenom").value.length >= minimum &&document.getElementById("prenom").value.length<=20) 
    && (document.getElementById("date").value.length >= 10)    
    && (document.getElementById("adress").value.length >= minimum && document.getElementById("adress").value.length <= 50)
    && (document.getElementById("email").value.length >= minimum && document.getElementById("email").value.length <=30)) 
        {
    document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#prenom").value;
    return true;
        }
  
    else if (document.getElementById("nom").value.length < minimum && document.getElementById("nom").value.length != 0 )  
    
    {
    document.getElementById("error").innerHTML= " Le champs Nom doit au minimum contenir 5 caractère";
        return false;
     }
    else if( document.getElementById("nom").value.length === 0)
        {
          document.getElementById("error").innerHTML= "La saisie du nom est obligatoire"  ;
        }
    else if (document.getElementById("prenom").value.length < minimum && document.getElementById("prenom").value.length != 0)  
    
    {
    document.getElementById("error").innerHTML= " Le champs Prénom doit au minimum contenir 5 caractères ";
        return false;
     }
    if( document.getElementById("prenom").value.length === 0)
    {
        document.getElementById("error").innerHTML= "La saisie du prenom est obligatoire" ;
    }
    
    else if (document.getElementById("date").value.length  != 10 )  
    
    {
    document.getElementById("error").innerHTML= " Le champs date de naissace doit étre correcte";
        return false;
     }
    else if( document.getElementById("date").value.length === 0)
        {
          document.getElementById("error").innerHTML= "La saisie de la date de naissance est obligatoire"  ;
        }
            else if (document.getElementById("adress").value.length < minimum && document.getElementById("adress").value.length != 0)  
    
    {
    document.getElementById("error").innerHTML= " Le champs Adresse doit au minimum contenir 5 caractères";
        return false ;
     }
    else if( document.getElementById("adress").value.length === 0)
    {
        document.getElementById("error").innerHTML= "La saisie d'adresse est obligatoire" ;
    }
    
    else if (document.getElementById("email").value.length < minimum && document.getElementById("email").value.length != 0)  
    
    {
    document.getElementById("error").innerHTML= " Le champs Mail doit au minimum contenir 5 caractères";
        return false ;
     }
    else if(document.getElementById("email").value.length === 0)
    {
        document.getElementById("error").innerHTML= "La saisie du l'email est obligatoire" ;
        
    }
 
    elseif ()
    
   }
       