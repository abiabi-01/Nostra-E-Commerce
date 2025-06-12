//selecting he submit btn

// var contacts=document.querySelector(".contact")
// var contactcontainer=document.querySelector(".contact-container")
// var contactbox1=document.querySelector(".contact-box-1")
// var submitbtn=document.getElementById("submit-btn")

// submitbtn.addEventListener("click",function(){

//      popupoverlay.style.display="block "
//     popupbox.style.display="block"

var submitbtn=document.getElementById("submit-btn") ;

submitbtn.addEventListener("click",function(e){
    e.preventDefault();

    popupoverlay.style.display="block ";
    popupbox.style.display="block";
})


//selecting the popup-box,popup-overlay,btn

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var donepopupbutton=document.getElementById("done-popup-button")

donepopupbutton.addEventListener("click",function(e){
    e.preventDefault(); 
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//selecting the cancel btn
 
var closepopup=document.getElementById("close-btn")

closepopup.addEventListener("click",function(){
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})





