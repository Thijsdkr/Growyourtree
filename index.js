let boom = document.querySelector("#boom");
let weed = document.querySelector("#weed");
let boomTekst = document.querySelector("#pagina1");

//Hier worden de variabele aangemaakt die verderop in de code gebruikt gaan worden//

window.addEventListener("load", function () {
  setTimeout(function () {
    boomTekst.textContent =
      "What are you waiting for? Cmon touch me.. i dont bite (click on tree dude to continue)";
  }, 3000);
});

//Deze code wacht tot de pagina volledig is geladen en verandert vervolgens de tekst van het element met de id "pagina1" na 3 seconde met de tekst die achter boomTekst.textContent staat.//

function beweegBoom() {
  boom.style.transform = "scale(1.3)";
  setTimeout(() => {
    boom.style.transform = "scale(1)";
  }, 500);
}

setInterval(beweegBoom, 1000);

//Deze code zorgt ervoor dat de boom (door de selector boven geselecteerd) om de seconde van scale veranderd, de function beweegBoom wordt toegepast bij de setInterval, waar er door de waarde 1000 om de seconde een functie (beweegBoom) wordt uitgevoert//

window.addEventListener("load", function () {
  setTimeout(function () {
    weed.style.visibility = "visible";
  }, 10000);
});

//Deze code zorgt ervoor dat wanneer de webpagina volledig is geladen. Na een vertraging van 10 seconden het css "visibility" van het element met de id "weed" (bovenin geselecteerd) ingesteld op "visible", waardoor het zichtbaar wordt in de game//
