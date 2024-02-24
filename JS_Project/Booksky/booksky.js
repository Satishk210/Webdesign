var popupoverlays=document.querySelector(".popup-overlay")
var popupboxs=document.querySelector(".popupbox")

var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
popupoverlays.style.display="block"
popupboxs.style.display="block"

})

//select cancel button

var cancle_btn = document.getElementById("cancle-popup");

cancle_btn.addEventListener("click", function(event){
    event.preventDefault()

    popupoverlays.style.display="none"
       popupboxs.style.display="none"
}
)

//select container,add book,book-title-input,book-author-inputbook-description-input

var overallcontainer=document.querySelector(".container")
var addbookbtn=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbookbtn.addEventListener("click",function(event){
    event.preventDefault()
    var newdiv=document.createElement("div")
    newdiv.setAttribute("class","book-container")
    newdiv.innerHTML=`<h2>${booktitleinput.value}</h1>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick= "deletebook(event)">Delete</button>`
    overallcontainer.append(newdiv)
    popupoverlays.style.display="none"
    popupboxs.style.display="none"
}
)
function deletebook(event){
    event.target.parentElement.remove()
}

