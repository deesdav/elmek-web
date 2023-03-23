const mainListDiv = document.getElementById("mainListDiv"),
  mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
  "use strict";

  mainListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");
};

const menuHome = document.getElementById("menuHome");
const menuCharakteristika = document.getElementById("menuCharakteristika");
const menuProdukty = document.getElementById("menuProdukty");
const menuKontakty = document.getElementById("menuKontakty");

const home = document.getElementById("home");
const charakteristika = document.getElementById("charakteristika");
const produkty = document.getElementById("produkty");
const kontakty = document.getElementById("kontakty");

menuHome.onclick = () => {
  home.style.display = "block";
  charakteristika.style.display = "none";
  produkty.style.display = "none";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoHorsky.style.display = "none";
};
menuCharakteristika.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "block";
  produkty.style.display = "none";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoHorsky.style.display = "none";
};
menuProdukty.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoHorsky.style.display = "none";
};
menuKontakty.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "none";
  kontakty.style.display = "block";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoHorsky.style.display = "none";
};

const infoLesni = document.getElementById("infoLesni");
const infoKvetovy = document.getElementById("infoKvetovy");
const infoKvetovyPastovany = document.getElementById("infoKvetovyPastovany");
const infoHorsky = document.getElementById("infoHorsky");

const clicklesnik = document.getElementById("clicklesnik");
const clickhornik = document.getElementById("clickhornik");
const clickkvetovy = document.getElementById("clickkvetovy");
const clickkvetovypastovany = document.getElementById("clickkvetovypastovany");

const medyphotos1 = document.getElementById("medyphotos1");
const medyphotos2 = document.getElementById("medyphotos2");
const medyphotos3 = document.getElementById("medyphotos3");
const medyphotos4 = document.getElementById("medyphotos4");

const backButton = document.getElementById("backButton");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");

clicklesnik.onclick = () => {
  produkty.style.display = "none";
  infoLesni.style.display = "block";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoHorsky.style.display = "none";
};
clicklesnik.onmouseover = () => {
        medyphotos1.src = "./res/img/lesnihover.png";
};
clicklesnik.onmouseout = () => {
    medyphotos1.src = "./res/img/lesni.png";
};

clickhornik.onclick = () => {
  produkty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoHorsky.style.display = "block";
};
clickhornik.onmouseover = () => {
    medyphotos2.src = "./res/img/horskyhover.png";
};
clickhornik.onmouseout = () => {
    medyphotos2.src = "./res/img/horsky.png";
};
clickkvetovy.onclick = () => {
  produkty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "block";
  infoKvetovyPastovany.style.display = "none";
  infoHorsky.style.display = "none";
};
clickkvetovy.onmouseover = () => {
    medyphotos3.src = "./res/img/kvetovyhover.png";
};
clickkvetovy.onmouseout = () => {
    medyphotos3.src = "./res/img/kvetovy.png";
};
clickkvetovypastovany.onclick = () => {
  produkty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "block";
  infoHorsky.style.display = "none";
};
clickkvetovypastovany.onmouseover = () => {
    medyphotos4.src = "./res/img/kvetovypastovanyhover.png";
};
clickkvetovypastovany.onmouseout = () => {
    medyphotos4.src = "./res/img/kvetovypastovany.png";
};

backButton.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoHorsky.style.display = "none";
};
two.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoHorsky.style.display = "none";
};
three.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoHorsky.style.display = "none";
};
four.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoHorsky.style.display = "none";
};

setTimeout(() => {
  document.body.style.display = "block";
}, 900);
