/* Scrivi un programma che simula il gioco di "Carta, forbice, sasso". Chiedi all'utente di fare una scelta e confrontala con una scelta casuale del computer. Determina il vincitore o se c'è un pareggio. */

// scelta utente
let userChoice = prompt('Scegli: carta, forbice o sasso? (tutto in minuscolo)');

// scelta computer
let cpuChoice = Math.random();


// defizione delle tre possibilità (su questo passaggio sono stato aiutato da ChatGpt)
if (cpuChoice < 0.34) {
    cpuChoice = "carta";
} else if (cpuChoice <= 0.67) {
    cpuChoice = "forbice";
} else {
    cpuChoice = "sasso";
}

console.log("L'utente ha scelto:", userChoice);
console.log("Il computer ha scelto:", cpuChoice);

document.getElementById('user').innerHTML = `Hai scelto: ${userChoice}.`;
document.getElementById('pc').innerHTML = `Il computer ha scelto: ${cpuChoice}.`;


// determinazione vittoria

// pareggio
if (userChoice === cpuChoice) {
    document.getElementById('win').innerHTML = `Pareggio!`;
}

// sconfitta
else if (userChoice === "carta" && cpuChoice === "forbice" || userChoice === "forbice" && cpuChoice === "sasso" || userChoice === "sasso" && cpuChoice === "carta") {
    document.getElementById('win').innerHTML = `Hai perso!`;
}

//vittoria
else {
    document.getElementById('win').innerHTML = `Hai vinto!`;
}