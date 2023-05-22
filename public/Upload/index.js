"use strict";

const burger = document.getElementById("burger");
const drawer = document.getElementById("drawer");
const closebtndrawer = document.getElementById("drawer-closer");

const openDrawer = function () {
  drawer.classList.remove("collapse");
};

const closeDrawer = function () {
  drawer.classList.add("collapse");
};

burger.addEventListener("click", openDrawer);
closebtndrawer.addEventListener("click", closeDrawer);
