
var istext = true;
var iseck = true;

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

$("#subbutton").click(function () {

  var errorMessage = "";

  if(isValidEmailAddress($("#email").val()) == false){
    errorMessage += "<p>Deine Emailadresse, ist Falsch!</p>";
  }

  if($("#tel").val().toString().length < 5){
    errorMessage += "<p>Deine Telefonnummer ist zu kurz!</p>";
  }else if($("#tel").val().toString().length > 15){
    errorMessage += "<p>Deine Telefonnummer ist zu lang!</p>";
  }

  if($("#pass").val() != $("#pass2").val()){
    errorMessage += "<p>Deine Passwörter stimmen nicht über ein!</p>";
  }

  if($("#pass").val().toString().length < 8){
    errorMessage += "<p>Deine Passwort muss mindestens 8 zeichen lang sien!</p>";
  }

  if(errorMessage != ""){
    $("#errorMessage").html(errorMessage);
    $("#errorMessage").show();
    $("#successMessage").hide();
  }else{
    $("#successMessage").show();
    $("#errorMessage").hide();
  }


});

$("#toggle").click(function(){

    if(istext){

        $("#text").fadeOut(1000, function(){

            istext = false;

        });


    }else{

        $("#text").fadeIn(2000, function(){

            istext = true;

        });

    }



});

$("#kreis").click(function() {
  $(this).animate({
    width: "400px",
    height: "400px",
    marginLeft: "100px",
    marginTop: "100px",
    borderRadius: "0%",
  }, 2000, function () {
    $(this).css("background-color", "red")
  }
  );
});

$(".eck").click(function() {
    if(iseck){
      $(this).animate({
        borderRadius: "50%",
      }, 2000);
      iseck = false;
    }else{
      $(this).animate({
        borderRadius: "0%",
      }, 2000);
      iseck = true;
    }

});

//jquery ui teil

$("#drag").draggable({ containment: "parent"});

$("#resizable1").resizable();

$("#accordion").accordion();

$("#sortable").sortable();
