$(document).ready(function () {

  printContactList();
  console.log("DOM ready!");

});
$(document).keyup(function () {
  // ajout des compteurs de caractére a coté de chaque champs de saisie
  var nombreCaractere = $("#name").val().length;
  var msg = " " + nombreCaractere + ' Car(s)';
  $('#compteur1').text(msg);

  var nombreCaractere = $("#firstname").val().length;
  var msg = " " + nombreCaractere + ' Car(s)';
  $('#compteur2').text(msg);


});



$("#formulaire").on("submit", function (event) {
  event.preventDefault();

  var inputNom = document.getElementById("name");
  var inputPrenom = document.getElementById("firstname");
  var inputDaten = document.getElementById("birth");
  var inputAdresse = document.getElementById("adresse");
  var inputEmail = document.getElementById("mail");

  if ($("#nom").val() !== "" && $("#firstname").val() !== "" && $("#birth").val() !== ""
    && $("#adresse").val() !== "" && $("#mail").val() !== "") {

      $(".modal-title").html("Message Modal");
      $(".modal-body").html("Vous avez bien introduit vos informations dans le tableau");
    //stocker les valeurs saisie dans le navigateur
    localStorage.setItem("name", inputNom.value);
    localStorage.setItem("firstname", inputPrenom.value);
    localStorage.setItem("birth", inputDaten.value);
    localStorage.setItem("adresse", inputAdresse.value);
    localStorage.setItem("mail", inputEmail.value);

    $('#success').addClass("alert alert-success").text("le formulaire est sauvegardé dans le tableau");

    $("#tablee").show();

    contactStore.add(inputNom.value, inputPrenom.value, inputDaten.value, inputAdresse.value, inputEmail.value)
    localStorage.setItem('contactList', JSON.stringify(contactStore.getList()));
    // ajout des valeurs saisie dans le tableau
   printContactList();
  }


   else if($("#name").val().length==0 || $("#firstname").val().length==0 || $("#Birth").val().length==0 ||
                $("#adresse").val().length==0 || $("#mail").val().length==0) {
                $(".modal-title").html("Message Modal");
                $(".modal-body").html("Veuillez remplir le(s) champs manquant(s) svp");


}


});


function printContactList() {

  var contactList = JSON.parse(localStorage.getItem("contactList"));
  for (var index in contactList) {
    document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
      '<tr><td>' + contactList[index].name + '</td><td>'
      + contactList[index].firstname + '</td><td>'
      + contactList[index].date
      + '</td><td><a href="https://maps.google.com/maps?q='
      + contactList[index].adress + '">'
      + contactList[index].adress

      + '</a></td><td><a href=mailto:>' + contactList[index].mail + '</a></td>';
  }
}
