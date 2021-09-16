


function makeShapeAppear() {

    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var width = 100 + Math.random() * 200;
    var height = width;

    if(Math.random() > 0.5){

      document.getElementById("form").style.borderRadius = "50%"
    }else{
      document.getElementById("form").style.borderRadius = "0%"
    }


    document.getElementById("form").style.backgroundColor = getRandomColor();

    document.getElementById("form").style.top = top + "px";
    document.getElementById("form").style.left = left + "px";
    document.getElementById("form").style.width = width + "px";
    document.getElementById("form").style.height = height + "px";

    document.getElementById("form").style.display = "block";

    start = new Date().getTime();


}

function appearAfterDelay() {
  setTimeout(makeShapeAppear, Math.random() * 2000);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

appearAfterDelay();



var start = new Date().getTime();
var best = 9999;

document.getElementById("form").onclick = function () {
    document.getElementById("form").style.display = "none";

    var end = new Date().getTime();

    var delay = (end - start) / 1000;

    document.getElementById("dauer").innerHTML = delay + "s";

    if(delay < best){
      best = delay;
      document.getElementById("best").innerHTML = best + "s";
    }

    appearAfterDelay();





}
