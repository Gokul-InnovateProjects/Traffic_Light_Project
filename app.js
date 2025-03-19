function turnOn(color){
       turnOff(color); 
  document.getElementById(color).style.backgroundColor = color;
}

function turnOff(){
  document.getElementById("red").style.backgroundColor = "#555";
  document.getElementById("yellow").style.backgroundColor = "#555";
  document.getElementById("green").style.backgroundColor = "#555";
}
