//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

(function(){
   hamburger.addEventListener("click",()=>{
     navLinks.classList.toggle("show");
   });
})();

// main section

const btnOne = document.querySelector(".mercury-button__one");
const btnTwo = document.querySelector(".mercury-button__two");
const btnThree = document.querySelector(".mercury-button__three");

const imageOne = document.querySelector(".mercury__images-img-one");
const imageTwo = document.querySelector(".mercury__images-img-two");
const imageThree = document.querySelector(".mercury__images-img-three");

const mercuryOne = document.querySelector(".mercury__desc-one");
const mercuryTwo = document.querySelector(".mercury__desc-two");
const mercuryThree = document.querySelector(".mercury__desc-three");


(function(){
  btnOne.addEventListener("click",()=>{
    imageOne.style.display="flex";
    imageOne.style.top="35%";
    imageTwo.classList.remove("show");
    imageThree.classList.remove("show");
   
    mercuryOne.style.display="block";
    mercuryTwo.style.display="none";
    mercuryThree.style.display="none";
    
    btnOne.style.opacity="1";
    btnTwo.style.opacity="50%";
    btnThree.style.opacity="50%";
  }),
  btnTwo.addEventListener("click",()=>{
    imageOne.style.display="none";
    imageTwo.classList.add("show");
    imageThree.classList.remove("show");

    mercuryOne.style.display="none";
    mercuryTwo.style.display="block";
    mercuryThree.style.display="none";

    btnOne.style.opacity="50%";
    btnTwo.style.opacity="1";
    btnThree.style.opacity="50%";
}),
btnThree.addEventListener("click",()=>{
    imageOne.style.display="block";
    imageOne.style.top="20%";
    imageTwo.classList.remove("show");
    imageThree.classList.add("show");

    mercuryTwo.style.display="none";
    mercuryOne.style.display="none";
    mercuryThree.style.display="block";

    btnOne.style.opacity="50%";
    btnTwo.style.opacity="50%";
    btnThree.style.opacity="1";
})
})();