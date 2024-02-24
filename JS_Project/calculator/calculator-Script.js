function displayvalue(val){
    var displayval=document.getElementById("display");
    displayval.value=displayval.value + val;

}
function clearDisplay(){
    document.getElementById("display").value="";
}
function calculate(){
   var userInput = document.getElementById("display").value;
   var result = eval(userInput);
   document.getElementById("display").value=result;
}