function myFunction(x) {
  x.classList.toggle("change");
};

function showFunction(y) {
  y.classList.add("hidden");
  document.querySelector("form").classList.remove("hidden");
};

MenuOpen = false

document.querySelector("#burger").addEventListener("click", () => {

if(!MenuOpen){
    document.querySelector("nav").style.display="block"
    MenuOpen = true
   }else{
  document.querySelector("nav").style.display="none"
    MenuOpen = false
   }
});


