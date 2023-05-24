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

// document.getElementsByClassName("anchor") VAZNO VRACA HTML COLLECTION KOJA MORA DA SE PREVEDE U ARRAYv SA SPREAD OPERATOROM

allLinks.forEach((e)=> e.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.getElementById(this.getAttribute("href").substring(1));
    target.scrollIntoView({ behavior: "smooth" });
  })
);

const openDrawer = function () {
  drawer.classList.remove("hidden");
};

const closeDrawer = function () {
  drawer.classList.add("hidden");
};

burger.addEventListener("click", openDrawer);
closebtndrawer.addEventListener("click", closeDrawer);
