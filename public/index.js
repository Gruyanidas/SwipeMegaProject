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
// const buttons = [...document.getElementsByTagName('button')];
const button = document.getElementById("start-now");
const overlay = document.querySelector(".overlay")

// document.getElementsByClassName("anchor") VAZNO VRACA HTML COLLECTION KOJA MORA DA SE PREVEDE U ARRAYv SA SPREAD OPERATOROM
//VAZNO Smooth scroll

allLinks.forEach((e) =>
  e.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.getElementById(
      this.getAttribute("href").substring(1)
    );
    target.scrollIntoView({ behavior: "smooth" });
  })
);

//VAZNO Drawer - side menu mob
const openDrawer = function () {
  drawer.classList.remove("opacity-0");
  drawer.classList.add("opacity-100");
};

const closeDrawer = function () {
  drawer.classList.add("opacity-0");
  drawer.classList.remove("opacity-100")
};

burger.addEventListener("click", openDrawer);
closebtndrawer.addEventListener("click", closeDrawer);

//VAZNO Modal

const openModal = function(){
  modal.classList.remove("opacity-0");
  modal.classList.add("opacity-100");
  overlay.classList.remove("hidden")
}

const closeModal = function(){
  modal.classList.remove("opacity-100");
  modal.classList.add("opacity-0");
  overlay.classList.add("hidden")
}


button.addEventListener('click', openModal);
modalcloser.addEventListener('click', closeModal);


