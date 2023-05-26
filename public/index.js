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
barlist.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("anchor")) {
    const id = event.target.getAttribute("href");
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

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (
      !event.target.className.includes("signupbtn") &&
      !event.target.className.includes("transfers") &&
      !event.target.className.includes("loans") &&
      !event.target.className.includes("closing")
    ) {
      openModal();
      centering();
    }
  });
});

//VAZNO Operations section

const tabs = document.querySelectorAll(".operation_tab");
const tabContainer = document.querySelector(".btncontainer");
const tabsContent = document.querySelectorAll(".content-cont");
// let activeTab = null; //CHAT GPT IDEA

tabContainer.addEventListener("click", function (e) {
  //VAZNO tabs
  const target = e.target.closest(".operation_tab");
  if (!target) return;
  tabs.forEach((t) => t.classList.remove("-translate-y-2"));
  target.classList.add("-translate-y-2");

  // // Chat GPT code:
  // if (activeTab) {
  //   activeTab.classList.remove("flex");
  //   activeTab.classList.add("hidden");
  // }

  // const contentToShow = document.querySelector(
  //   `.content-cont--${target.dataset.tab}`
  // );
  // contentToShow.classList.remove("hidden");
  // contentToShow.classList.add("flex");
  // activeTab = contentToShow;

  //Uklanjanje aktivne klase pre dodeljivanja
  tabsContent.forEach((e) => e.classList.remove("flex"));
  tabsContent.forEach((e) => e.classList.add("hidden"));

  //content area
  document
    .querySelector(`.content-cont--${target.dataset.tab}`)
    .classList.remove("hidden");
  document
    .querySelector(`.content-cont--${target.dataset.tab}`)
    .classList.add("flex");
});

//FADING MENU
const navbar = document.getElementById("nav-bar");
navbar.addEventListener("mouseover", function (event) {
  // const target = event.target.closest('.') closest se ovde ne koristi jer nema child elemenata
  event.preventDefault();
  if (event.target.classList.contains("anchor")) {
    const link = event.target;
    const links = document.querySelectorAll(".anchor");
    const logo = navbar.closest(".navbar").querySelector(".img");
    const btn = navbar.closest(".navbar").querySelector(".signupbtn");

    links.forEach((el) => {
      if (el !== link) {
        el.classList.add("opacity-50");
      }
    });
    logo.classList.add("opacity-50");
    btn.classList.remove("opacity-50");
    btn.classList.add("opacity-10");
  }
});

//Mouse out sluzi da UNDO sve prethodno
navbar.addEventListener("mouseout", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("anchor")) {
    const link = event.target;
    const links = document.querySelectorAll(".anchor");
    const logo = navbar.closest(".navbar").querySelector(".img");
    const btn = navbar.closest(".navbar").querySelector(".signupbtn");

    links.forEach((el) => {
      if (el !== link) {
        el.classList.remove("opacity-50");
      }
    });
    logo.classList.remove("opacity-50");
    btn.classList.remove("opacity-10");
    btn.classList.add("opacity-50");
  }
});

//STICKY NAV BAR VAZNO Pogubno za performance
// const partners = document.querySelector(".partners-section");
// const cords = partners.getBoundingClientRect();
// // console.log(cords); dobija se pocetna vrednost sekcije top=384
// const header = document.querySelector(".navbar")

// window.addEventListener('scroll', function(event){
//   // console.log(window.scrollY); ne moze hard code
//   if(window.scrollY > cords.top) { header.classList.add("fixed", "top-0", "max-w-6xl", "z-[200]");
// }
//   if(window.scrollY < cords.top)
//   (header.classList.remove("fixed", "top-0", "max-w-6xl", "z-[200]"))
//   }
// )
// const obsOptions = {
//   root:null,
//   treshold:0.1
// };

// // const partners = document.querySelector(".partners-section");
// const header = document.querySelector(".navbar");
// const payments = document.querySelector(".payments");
// const navheight = header.getBoundingClientRect();

// //VAZNO INTERSECTION OBSERVER VAZNO OVO SE KORISTI
// // ...ne radi iz nepoznatog razloga :D
// const obsCallback = function (entries) {
//   // entries.forEach(entry=>
//   const [entry] = entries;
//   if (!entry.isIntersecting) {
//     header.classList.add("fixed", "top-0", "z-[200]");
//   } else {
//     header.classList.remove("fixed", "top-0", "z-[200]");
//   }
// };

//VAZNO entries je array of tresholds

const obsOptions = {
  root: null,
  threshold: [0.2],
  rootmargin: `-${navheight.height}px`,
};
const paymentsObserver = new IntersectionObserver(obsCallback, obsOptions);
paymentsObserver.observe(payments);

//NASLOV Revealing section - sklanjanje section-hidden clase sa svih sekcija

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entries);
  if(!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {root:null,
treshold:0.5})

allSections.forEach(function(section) {
  sectionObserver.observe(section)
  section.classList.add("section-hidden") 
})

