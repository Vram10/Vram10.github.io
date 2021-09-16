var fensterheight = $(window).height();
var menuLeistenheight = $("#menuleiste").height();

var codeConteinerHeight = fensterheight - menuLeistenheight;



$(".codeConteiner").height(codeConteinerHeight + "px");

$(".toggle").click(function () {
    $(this).toggleClass("selected");

    var activDiv = $(this).html();

    $("#"+activDiv+"Container").toggle();

    //gibt an wie viele code container angezeigt werden
    var angezeigteDivs = $(".codeConteiner").filter(function() {
      return($(this).css("display") != "none");
    }).length;

    var breite= 100/angezeigteDivs;
    $(".codeConteiner").css("width",breite+"%");
});

$("#runButton").click(function () {

  $("iframe").contents().find("html").html('<style>'+$("#cssCode").val() + '</style>' + $("#htmlCode").val());

  document.getElementById('resultFrame').contentWindow.eval($("#jsCode").val());

});
