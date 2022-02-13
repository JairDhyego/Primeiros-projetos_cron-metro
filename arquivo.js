var display = document.querySelector("#display");
var second = document.querySelector("#second");
var minutes = document.querySelector("#minutes");
var comecar = document.querySelector("#comecar");

var cronometroSeg;

var minutoAtual;
var segundoAtual;

var interval;


for (var i = 0; i <= 60; i++){
  minutes.innerHTML += '<option value="' + i + '"> ' + i + '</option>';
}

for (var i = 1; i <= 60; i++){
  second.innerHTML += '<option value="' + i + '"> ' + i + '</option>';
}

comecar.addEventListener("click", function () {
  minutoAtual = minutes.value;
  segundoAtual = second.value;

  display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

  interval = setInterval(function () {
    
    segundoAtual--;
    if (segundoAtual <= 0) {
      if (minutoAtual > 0) {
        minutoAtual--;
        segundoAtual = 59;
      }
      else {
        alert("Tempo esgotado.");
        document.querySelector("#despertador").play();
        clearInterval(interval);
      }
    }

    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
  }, 1000);
})
