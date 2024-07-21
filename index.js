var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})

var form = document.querySelector(".nm");
nam = form.querySelector("input");

var sbtn = document.querySelector("#submit").addEventListener('click',()=>{
   if(form.value != ''){
       console.log(nam.value);
    alert(`Thanks ${nam.value}, We will Contact you soon !!!`);
   }
});

var bkbtn = document.querySelector("#home button").addEventListener('click',()=>{
   alert("It will take bit time ");
});