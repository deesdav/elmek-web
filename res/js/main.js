var mainListDiv = document.getElementById("mainListDiv"),
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

menuHome.onclick = () =>{
    home.style.display = "block";
    charakteristika.style.display = "none";
    produkty.style.display = "none";
    kontakty.style.display = "none";
}
menuCharakteristika.onclick = () =>{
    home.style.display = "none";
    charakteristika.style.display = "block";
    produkty.style.display = "none";
    kontakty.style.display = "none";
}
menuProdukty.onclick = () =>{
    home.style.display = "none";
    charakteristika.style.display = "none";
    produkty.style.display = "block";
    kontakty.style.display = "none";
}
menuKontakty.onclick = () =>{
    home.style.display = "none";
    charakteristika.style.display = "none";
    produkty.style.display = "none";
    kontakty.style.display = "block";
}