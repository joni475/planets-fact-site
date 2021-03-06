//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");

(function(){
   hamburger.addEventListener("click",()=>{  
      if(navLinks.classList.toggle("show")) {
        body.style.overflow ="hidden";
      } else {
        body.style.overflow = "auto";
      }
   });
})();

// main section
//buttons
const btnOne = document.querySelector("#btn-one");
const btnTwo = document.querySelector("#btn-two");
const btnThree = document.querySelector("#btn-three");

//images
const imageOne = document.querySelector("#img-one");
const imageTwo = document.querySelector("#img-two");
const imageThree = document.querySelector("#img-three");


//planet desc.
const planetOne = document.querySelector("#desc-one");
const planetOneTwo = document.querySelector("#desc-two");
const planetOneThree = document.querySelector("#desc-three");


(function(){
  btnOne.addEventListener("click",()=>{
    imageOne.style.display="block";
    imageTwo.classList.remove("show");
    imageThree.classList.remove("show");
   
    planetOne.style.display="block";
    planetOneTwo.style.display="none";
    planetOneThree.style.display="none";
    
    btnOne.style.opacity="1";
    btnTwo.style.opacity="30%";
    btnThree.style.opacity="30%";
  }),
  btnTwo.addEventListener("click",()=>{
    imageOne.style.display="none";
    imageTwo.classList.add("show");
    imageThree.classList.remove("show");

    planetOne.style.display="none";
    planetOneTwo.style.display="block";
    planetOneThree.style.display="none";

    btnOne.style.opacity="30%";
    btnTwo.style.opacity="1";
    btnThree.style.opacity="30%";
}),
btnThree.addEventListener("click",()=>{
    imageOne.style.display="block";
    imageTwo.classList.remove("show");
    imageThree.classList.add("show");

    planetOneTwo.style.display="none";
    planetOne.style.display="none";
    planetOneThree.style.display="block";

    btnOne.style.opacity="30%";
    btnTwo.style.opacity="30%";
    btnThree.style.opacity="1";
})
})();