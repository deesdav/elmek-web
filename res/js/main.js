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

const infoLesni = document.getElementById("infoLesni");
const infoKvetovy = document.getElementById("infoKvetovy");
const infoKvetovyPastovany = document.getElementById("infoKvetovyPastovany");
const infoLipovy = document.getElementById("infoLipovy");
const infoHorsky = document.getElementById("infoHorsky");
const infoLesni600 = document.getElementById("infoLesni600");
const infoHorsky600 = document.getElementById("infoHorsky600");
const infoKvetovy600 = document.getElementById("infoKvetovy600");
const infoLipovy600 = document.getElementById("infoLipovy600");


const clicklesnik = document.getElementById("clicklesnik");
const clickhornik = document.getElementById("clickhornik");
const clickkvetovy = document.getElementById("clickkvetovy");
const clickkvetovypastovany = document.getElementById("clickkvetovypastovany");
const clicklipovy = document.getElementById("clicklipovy");

const clicklesni600 = document.getElementById("clicklesni600");
const clickhorsky600 = document.getElementById("clickhorsky600");
const clickkvetovy600 = document.getElementById("clickkvetovy600");
const clicklipovy600 = document.getElementById("clicklipovy600");

const medyphotos1 = document.getElementById("medyphotos1");
const medyphotos2 = document.getElementById("medyphotos2");
const medyphotos3 = document.getElementById("medyphotos3");
const medyphotos4 = document.getElementById("medyphotos4");
const medyphotos5 = document.getElementById("medyphotos5");
const medyphotos6 = document.getElementById("medyphotos6");
const medyphotos7 = document.getElementById("medyphotos7");
const medyphotos8 = document.getElementById("medyphotos8");
const medyphotos9 = document.getElementById("medyphotos9");

const backButton = document.getElementById("backButton");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");


menuHome.onclick = () => {
  home.style.display = "block";
  charakteristika.style.display = "none";
  produkty.style.display = "none";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};
menuCharakteristika.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "block";
  produkty.style.display = "none";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};
menuProdukty.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};
menuKontakty.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "none";
  kontakty.style.display = "block";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};


clicklesnik.onclick = () => {
  produkty.style.display = "none";
  infoLesni.style.display = "block";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
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
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "block";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
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
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
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
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};
clickkvetovypastovany.onmouseover = () => {
  medyphotos4.src = "./res/img/kvetovypastovanyhover.png";
};
clickkvetovypastovany.onmouseout = () => {
  medyphotos4.src = "./res/img/kvetovypastovany.png";
};
clicklipovy.onclick = () => {
  produkty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "block";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};
clicklipovy.onmouseover = () => {
  medyphotos8.src = "./res/img/lipovyhover.png";
};
clicklipovy.onmouseout = () => {
  medyphotos8.src = "./res/img/lipovy.png";
};
clicklesni600.onclick = () => {
  produkty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "block";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};
clicklesni600.onmouseover = () => {
  medyphotos5.src = "./res/img/lesni600hover.png";
}
clicklesni600.onmouseout = () => {
  medyphotos5.src = "./res/img/lesni600.png";
}
clickhorsky600.onclick = () => {
  produkty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "block";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};
clickhorsky600.onmouseover = () => {
  medyphotos6.src = "./res/img/horsky600hover.png";
}
clickhorsky600.onmouseout = () => {
  medyphotos6.src = "./res/img/horsky600.png";
}
clickkvetovy600.onclick = () => {
  produkty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "block";
  infoLipovy600.style.display = "none";
};
clickkvetovy600.onmouseover = () => {
  medyphotos7.src = "./res/img/kvetovy600hover.png";
}
clickkvetovy600.onmouseout = () => {
  medyphotos7.src = "./res/img/kvetovy600.png";
}
clicklipovy600.onclick = () => {
  produkty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "block";
};
clicklipovy600.onmouseover = () => {
  medyphotos9.src = "./res/img/lipovy600hover.png";
}
clicklipovy600.onmouseout = () => {
  medyphotos9.src = "./res/img/lipovy600.png";
}


backButton.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};
two.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};
three.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};
four.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
};
five.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
}
six.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
}
seven.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
}
eight.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
}
nine.onclick = () => {
  home.style.display = "none";
  charakteristika.style.display = "none";
  produkty.style.display = "block";
  kontakty.style.display = "none";
  infoLesni.style.display = "none";
  infoKvetovy.style.display = "none";
  infoKvetovyPastovany.style.display = "none";
  infoLipovy.style.display = "none";
  infoHorsky.style.display = "none";
  infoLesni600.style.display = "none";
  infoHorsky600.style.display = "none";
  infoKvetovy600.style.display = "none";
  infoLipovy600.style.display = "none";
}


setTimeout(() => {
  document.body.style.display = "block";
}, 900);
