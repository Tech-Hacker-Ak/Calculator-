function addition(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  result=num1+num2;
  document.getElementById("result").innerHTML="Result :"+result;
  
}
function subtraction(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  result=num1-num2;
  document.getElementById("result").innerHTML="Result :"+result;
  
}
function multiplication(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  result=num1*num2;
  document.getElementById("result").innerHTML="Result :"+result;
  
}
function division(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  result=num1/num2;
  document.getElementById("result").innerHTML="Result :"+result;
  
}

