//Variables principales a usar 
var num1;
var num2;
var signo;
//funcion init para que de inicio al proceso posterior
function init(){
  //traemos cada elemento del archivo html
  var barra=document.getElementById("barra");
  var cero=document.getElementById("0");
  var uno=document.getElementById("1");
  var dos=document.getElementById("2");
  var tres=document.getElementById("3");
  var cuatro=document.getElementById("4");
  var cinco=document.getElementById("5");
  var seis=document.getElementById("6");
  var siete=document.getElementById("7");
  var ocho=document.getElementById("8");
  var nueve=document.getElementById("9");
  var reset=document.getElementById("reiniciar")
  var igual=document.getElementById("igual");
  var division=document.getElementById("Division");
  var multiplicacion=document.getElementById("Multiplicacion");
  var suma=document.getElementById("Suma");
  var resta=document.getElementById("Resta");
  //los hago interactivos
  cero.onclick = function(e){
    barra.textContent = barra.textContent + "0";
  }
  uno.onclick = function(e){
    barra.textContent = barra.textContent + "1";
  }
  dos.onclick = function(e){
    barra.textContent = barra.textContent + "2";
  }
  tres.onclick = function(e){
    barra.textContent = barra.textContent + "3";
  }
  cuatro.onclick = function(e){
    barra.textContent = barra.textContent + "4";
  }
  cinco.onclick = function(e){
    barra.textContent = barra.textContent + "5";
  }
  seis.onclick = function(e){
    barra.textContent = barra.textContent + "6";
  }
  siete.onclick = function(e){
    barra.textContent = barra.textContent + "7";
  }
  ocho.onclick = function(e){
    barra.textContent = barra.textContent + "8";
  }
  nueve.onclick = function(e){
    barra.textContent = barra.textContent + "9";
  }
  reset.onclick = function(e){
    reseteo();
  }
  suma.onclick = function(e){
    num1 = barra.textContent;
    signo = "+";
    limpiar();
  }
  resta.onclick = function(e){
    num1 = barra.textContent;
    signo = "-";
    limpiar()
  }
  multiplicacion.onclick = function(e){
    num1 = barra.textContent;
    signo = "*";
    limpiar()
  }
  division.onclick = function(e){
    num1 = barra.textContent;
    signo = "/"
    limpiar()
  }
  igual.onclick = function(e){
    num2 = barra.textContent;
    operacion();
  }
  //hago las funciones anteriormente llamadas como limpiar y reseteo
  function reseteo(){
     barra.textContent = "";
    num1 = 0;
    num2 = 0;
  }
  function limpiar(){
  barra.textContent = "";
  }
  //hago la funcion operacion la cual hara que suelte el resultado final al dar click en el boton igual
  function operacion(){
    var respuesta=0;
    switch (signo) {
      case "+":
          respuesta = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
          respuesta = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        respuesta = parseFloat(num1) * parseFloat(num2);
      break;
      case "/":
        respuesta = parseFloat(num1) / parseFloat(num2);
        break;
    }
    reseteo();
    barra.textContent = respuesta
  }
}
