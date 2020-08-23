function init(){
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
  var punto=document.getElementById(".");
  var division=document.getElementById("Division");
  var multiplicacion=document.getElementById("Multiplicacion");
  var suma=document.getElementById("Suma");
  var resta=document.getElementById("Resta");

  cero.onClick = function(e){
    barra.textContent = barra.textContent + "0";
  }
  uno.onClick = function(e){
    barra.textContent = barra.textContent + "1";
  }
  dos.onClick = function(e){
    barra.textContent = barra.textContent + "2";
  }
  tres.onClick = function(e){
    barra.textContent = barra.textContent + "3";
  }
  cuatro.onClick = function(e){
    barra.textContent = barra.textContent + "4";
  }
  cinco.onClick = function(e){
    barra.textContent = barra.textContent + "5";
  }
  seis.onClick = function(e){
    barra.textContent = barra.textContent + "6";
  }
  siete.onClick = function(e){
    barra.textContent = barra.textContent + "7";
  }
  ocho.onClick = function(e){
    barra.textContent = barra.textContent + "8";
  }
  nueve.onClick = function(e){
    barra.textContent = barra.textContent + "9";
  }
