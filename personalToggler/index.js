const toggler=document.querySelector("#TogOnline");
let body= document.querySelector("body");
let indicator=document.querySelector(".indicator");


toggler.onclick = function () {
  toggler.classList.toggle("active"); 
  body.classList.toggle("active"); 
}


