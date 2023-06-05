//NASLOV RAD SA ELEMENTIMA DOM

//PODNASLOV SELEKTOVANJE ELEMENATA
console.log(document.documentElement); //VAZNO ceo html
console.log(document.head);
console.log(document.body);
const header = document.querySelector(".header"); //prvi element sa klasom header
document.querySelectorAll(".section"); //svi sa section klass

document.getElementById("section-1");
document.getElementsByTagName("button"); //sva dugmad

document.getElementsByClassName("btn");

//PODNASLOV PRAVLJENJE I UBACIVANJE ELEMENATA

//.insertAdjacentHTML
const message = document.createElement("div"); //samo napravljen DIV element

message.classList.add("cookie-message"); //jos uvek nije ubacen element
message.textContent = "we use coockes for improved functionality and analytics";
message.innerHTML =
  "we use coockies for improved functionality and analytics<button class='btn'>Got it!</button>";
message.innerHTML =
  "we use coockies for improved functionality and analytics<button class='btn'>Got it!</button>";

header.prepend(message); //ubacivanje elementa u header element na pocetku
header.append(message); //na kraju kod poslednjeg child, moze samo jednom ili gore ili dole
header.append(message.cloneNode(true)); //da se poruka prikaze svuda na svim nodovima
header.before(message);
header.after(message);

//PODNASLOVBRISANJE
document.querySelector(".btn-close").addEventListener("click", function () {
  message.remove();
});

//PODNASLOV STYLES
message.style.backgroundColor = "#37382d"; //treba samo jednom da se selektuje element i da se sacuva u promenljivu
message.style.width = "120%"; //ubacuju se kao inline styles u html

getComputedStyle; //(element) VAZNO u console.log(getComputedStyle(element).(style) npr .color) dobijes ceo CSS za element;

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

document.documentElement.style.setProperty("bojaA", "ubojuB"); //Svuda u celom html boja A menja se u boju B gde god je upotrebljena

//PODNASLOV Atributes
const logo = document.querySelector(".nav_logo");
console.log(logo.alt); //samo vazi za ocekivane atribute na elementima, ne moze npr 'designer' ili "rudar"
console.log(logo.src);
console.log(logo.className);
console.log(logo.getAttribute("designer")); //Za nestandardne atribute

logo.alt = "Beautiful minimalist logo"; //set atribute, ovo gore je bilo citanje
logo.setAttribute("company", "Bankist");

console.log(logo.src); //apsolutni put
logo.getAttribute("src"); //relativni

//Data atributes
console.log(logo.dataset.versionNumber);

//Classes
// add, remove, toggle, contains, VAZNO moze po vise klasa odjednom add(c,b)
//Random line just for git hub :D
