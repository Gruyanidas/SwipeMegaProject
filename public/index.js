"use strict";

const burger = document.getElementById("burger");
const drawer = document.getElementById("drawer");
const closebtndrawer = document.getElementById("drawer-closer");
const solutions = document.querySelector("#solutions");
const pricing = document.querySelector("#pricing");
const resources = document.querySelector("#resources");
const developers = document.querySelector("#developers");
const products = document.querySelector("#products");
const barlist = document.getElementById("nav-bar");
const allLinks = [...document.getElementsByClassName("anchor")];
const modalcloser = document.getElementById("modalbtncls");
const modal = document.getElementById("modal");
const buttons = [...document.getElementsByTagName("button")];
const button = document.getElementById("start-now");
const overlay = document.querySelector(".overlay");
const drawerlist = document.getElementById("drawer-list");
const signup = document.getElementById("sign-up");
const signupcls = document.getElementById("sign-up-close");
const signupbtn = document.getElementById("signupbtn");
const signinbtn = document.getElementById("signinbtn");

// document.getElementsByClassName("anchor") VAZNO VRACA HTML COLLECTION KOJA MORA DA SE PREVEDE U ARRAYv SA SPREAD OPERATOROM
//VAZNO Smooth scroll

//VAZNO Ovo je bolja opcija jer se eventlistener kaci na parent element a ne na svaki child element
barlist.addEventListener("click", function (el) {
  el.preventDefault();
  if (el.target.classList.contains("anchor")) {
    const id = el.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

drawerlist.addEventListener("click", function (el) {
  el.preventDefault();
  if (el.target.classList.contains("anchor")) {
    const drawerid = el.target.getAttribute("href");
    document.querySelector(drawerid).scrollIntoView({ behavior: "smooth" });
  }
});

// allLinks.forEach((e) =>
//   e.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.getElementById(
//       this.getAttribute("href").substring(1)
//     );
//     target.scrollIntoView({ behavior: "smooth" });
//   })
// );

//VAZNO Drawer - side menu mob
const openDrawer = function () {
  drawer.classList.remove("opacity-0");
  drawer.classList.add("opacity-100");
};

const closeDrawer = function () {
  drawer.classList.add("opacity-0");
  drawer.classList.remove("opacity-100");
};

burger.addEventListener("click", openDrawer);
closebtndrawer.addEventListener("click", closeDrawer);

//VAZNO Modal

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

button.addEventListener("click", openModal);
modalcloser.addEventListener("click", closeModal);

//VAZNO SIGN UP FORM

const openForm = function () {
  signup.classList.remove("collapse");
  signup.classList.add("z-50");
  overlay.classList.remove("hidden");
};

const closeForm = function () {
  signup.classList.add("collapse");
  signup.classList.remove("z-50");
  overlay.classList.add("hidden");
};

signupbtn.addEventListener("click", openForm);
signupcls.addEventListener("click", closeForm);

//funkcija za centriranje elementa bilo gde na straniciVAZNO

const centering = function () {
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var modalHeight = modal.offsetHeight;
  var modalWidth = modal.offsetWidth;

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  var topPosition = (windowHeight - modalHeight) / 2 + scrollTop;
  var leftPosition = (windowWidth - modalWidth) / 2 + scrollLeft;

  modal.style.top = topPosition + "px";
  modal.style.left = leftPosition + "px";
};

buttons.forEach((e) => {
  e.addEventListener("click", function (e) {
    e.preventDefault();
    if (!e.target.className.includes("signupbtn")){
      openModal();
      centering();
    }
  });
});
