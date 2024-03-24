let wiet = document.querySelector("#wietje");

//variabele die wordt aangemaakt voor het ID wietje element//

function beweegWiet() {
  wiet.style.transform = "scale(1.3)";
  setTimeout(() => {
    wiet.style.transform = "scale(1)";
  }, 500);
}

setInterval(beweegWiet, 1000);

//Deze code zorgt ervoor dat de wiet afbeelding (door de selector boven geselecteerd) om de seconde van scale veranderd, de function beweegWiet wordt toegepast bij de setInterval, waar er door de waarde 1000 om de seconde een functie (beweegWiet) wordt uitgevoert//
