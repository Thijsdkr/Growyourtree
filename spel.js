let plantje = document.querySelector("#plantje");

let gieter = document.querySelector("#gieter");

let zaag = document.querySelector("#zaag");

let ehbo = document.querySelector("#ehbo");

let zon = document.querySelector("#zon");

let punten = document.querySelector("#punten");

const win = new Audio("audio/win.mp3");
const lose = new Audio("audio/lose.mp3");
const superwin = new Audio("audio/superwin.mp3");

//Hier worden alle variabele aangemaakt + een aantal audiofragmenten die afgsepeeld worden bij het uitvoeren van een function, alle niet audio variabele worden beneden in de eventlisteners gebruikt om de functies aan te roepen. In de functions worden de variabele gebruikt om de src en de visibility van de afbeelding uit de DOM te manipuleren//

function veranderEhbo() {
  plantje.src = "image/plantje.png";
  ehbo.style.visibility = "hidden";
  ehbo.src = "image/ehbo.png";
  zon.style.visibility = "visible";
  gieter.style.visibility = "visible";
  zaag.style.visibility = "visible ";
  zon.style.display = "inline";
  gieter.style.display = "inline";
  zaag.style.display = "inline";
  punten.textContent = "0";
}
//Deze function wordt uitgevoerd wanneer er op het het EHBO element wordt geklikt (door de eventlistener) vervolgens veranderd de src of de visibility van bepaalde afbeeldingen wat resulteerd in het zien van geen afbeeldingen of andere. Ook reset deze functie het punten aantal naar 0//

function veranderGieter() {
  if (punten.textContent === "0") {
    plantje.src = "image/plantje1.png";
    ehbo.style.visibility = "hidden";
    punten.textContent = "1";
    win.play();
  } else if (punten.textContent === "1") {
    plantje.src = "image/verdronkenplantje.png";
    ehbo.style.visibility = "visible";
    gieter.style.visibility = "visible";
    zaag.style.visibility = "hidden";
    zon.style.visibility = "hidden";
    lose.play();
  }
}

//Deze functie wordt uitgevoert wanneer er op de gieter wordt geklikt(eventlistener). Door het if else statement controleerd de code of de tekstcontent van punten 0 is , of 1 , hier wordt dan het resultaat van de visibility en src van de afbeeldingen op aangepast. Ook wordt de text content van de punten afhankelijk van welke if else er wordt gekozen gemanipuleerd. En speelt de code afhankelijk van de if else statement een audio fragment af. Dit zelfde systeem wordt toegepast in de andere functies//

function veranderZaag() {
  if (punten.textContent === "0") {
    plantje.src = "image/plant2.png";
    ehbo.style.visibility = "visible";
    zon.style.visibility = "hidden";
    gieter.style.visibility = "hidden";
    zon.style.visibility = "hidden";
    gieter.style.visibility = "hidden";
    lose.play();
  } else if (punten.textContent === "1") {
    plantje.src = "image/plantje1dood.png";
    ehbo.style.visibility = "visible";
    zon.style.visibility = "hidden";
    gieter.style.visibility = "hidden";
    lose.play();
  } else if (punten.textContent === "2") {
    plantje.src = "image/boomwin.png";
    ehbo.style.visibility = "visible";
    ehbo.src = "image/speelnogmaals.png";
    zon.style.display = "none";
    gieter.style.display = "none";
    zaag.style.display = "none";
    punten.textContent =
      "3, you succesfully did all the steps to create a tree!";
    punten.style.color = "orange";
    superwin.play();
  }
}

function veranderZon() {
  if (punten.textContent === "0") {
    plantje.src = "image/droogplantje.png";
    ehbo.style.visibility = "visible";
    gieter.style.visibility = "hidden";
    zaag.style.visibility = "hidden";
    lose.play();
  } else if (punten.textContent === "1") {
    plantje.src = "image/planteboom.png";
    ehbo.style.visibility = "hidden";
    zaag.style.visibility = "visible";
    gieter.style.visibility = "hidden";
    punten.textContent = "2";
    win.play();
  } else if (punten.textContent === "2") {
    plantje.src = "image/drogeboom.png";
    ehbo.style.visibility = "visible";
    gieter.style.visibility = "hidden";
    zaag.style.visibility = "hidden";
    lose.play();
  }
}

gieter.addEventListener("click", veranderGieter);

zaag.addEventListener("click", veranderZaag);

ehbo.addEventListener("click", veranderEhbo);

zon.addEventListener("click", veranderZon);

//Hier staan de eventlisteners , deze reageren wanneer er op een element wordt geklikt , waarvan zijn variabele in de eventlistener staat, na de klik voert hij de achterliggende functie uit//
