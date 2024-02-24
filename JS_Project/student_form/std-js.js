var Namebox = document.getElementById("inpt_name");


var Agebox = document.getElementById("inpt_Age");



var selectcourse=document.getElementById("#select");



var Emailbox = document.getElementById("inpt_Email");




var gendtxt = document.getElementsByName("Gender")

function updateForm(){


   var divtxt1=document.getElementById("div-cont");
   var newdiv=document.createElement("div");
newdiv.setAttribute("class","resultSub-main-div")
   for(i=0;i<gendtxt.length;i++){
      if(gendtxt[i].checked){
         
      var gendervalue=  gendtxt[i].value;

      }
      }
      newdiv.innerHTML=`<input class='result-lbl' value ='${Namebox.value}'>
      <input class='result-lbl' value ='${Agebox.value}'>
      <input class='result-lbl' value ='${gendervalue}'>
      <input class='result-lbl' value ='${selectcourse.value}'>
      <input class='result-lbl' value ='${Emailbox.value}'>
      <button class='btn' onclick='delete_item(event)'>Delete</button>`
      divtxt1.append(newdiv);
}

function delete_item(event){
    
    event.target.parentElement.remove();
    }

