// Ici on définit toutes nos variables :
let card1 = document.querySelector("#card-1");
let card2 = document.querySelector("#card-2");
let card3 = document.querySelector("#card-3");
let voile = document.querySelector("#voile");
let croix = document.querySelector("#croix");
let allCards = [card1, card2, card3];
let cards = document.querySelectorAll(".card");
let imgVoile = document.querySelector(".divImgVoile");


// for(let i=0; i<cards.length; i++) { => avec le querySelectorAll on est obligé
// de faire un for normal
for (let i in allCards) {
    //ici on gère l'évènement click sur une des cards car on a fait un tableau
    //qui les contient toutes :
    allCards[i].addEventListener("click", () => {
        if (voile.classList.contains("voileOff")) {
            console.log("hello voile !");
            voile.classList.remove("voileOff");
            voile.classList.add("voileOn");
            croix.style.display = "flex";
            imgVoile.style.display = "flex";
            if(allCards[i]==card1) {
                imgVoile.style.backgroundImage = 'url("../img/moto1.jpg")';
            } else if (allCards[i] == card2) {
                imgVoile.style.backgroundImage = 'url("../img/moto2.jpg")';
            } else if (allCards[i] == card3) {
                imgVoile.style.backgroundImage = 'url("../img/moto3.jpg")';
            }
        }
    })
}

// Ici on gère l'évènement sur le clique de la croix
croix.addEventListener("click", () => {
    console.log("bye voile");
    voile.classList.remove("voileOn");
    voile.classList.add("voileOff");
    imgVoile.style.display = "none";
})