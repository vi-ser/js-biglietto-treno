/*
Il programma dovrà:
- chiedere all'utente il numero di chilometri che vuole percorrere e    l'età del passeggero

- sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
   - il prezzo del biglietto è definito in base ai km (0.21 € al km)
   - va applicato uno sconto del 20% per i minorenni
   - va applicato uno sconto del 40% per gli over 65.

- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Bonus:
effettuare dei controlli per capire se l'utente ha inserito correttamente il numero di km e l'età (ovvero se sono effettivamente dei numeri e non testo a caso)
*/

// nome e cognome
const traveller = prompt("Inserisci il nome completo del passeggero");
console.log(traveller);

// età passeggero
const age = prompt("Inserisci l'età del passeggero");
console.log(age);

// lunghezza viaggio
const travelKm = prompt("Inserisci il numero di chilometri che vuoi percorrere");
console.log(travelKm);

// calcolo prezzo del biglietto sulla base dei chilometri
const pricePerKm = 0.21;
let price = travelKm * pricePerKm;
console.log(price);

document.getElementById('traveller-name').innerHTML = traveller;
document.getElementById('travel-lenght').innerHTML = travelKm + " Km";
document.getElementById('partial-price').innerHTML = price.toFixed(2) + " €";

const discount20 = 20;
const discount40 = 40;

// calcolo sconto 20% per i minorenni
if (age < 18) {
    price = price - (price * discount20 / 100);
    document.getElementById('rate').innerHTML = "Under 18 - Sconto 20%";
}

// calcolo sconto 40% per gli over 65
else if (age > 65) {

    price = price - (price * discount40 / 100);
    document.getElementById('rate').innerHTML = "Over 65 - Sconto 40%";
}

else {
    document.getElementById('rate').innerHTML = "Standard";
}

console.log(price);

document.getElementById('total-price').innerHTML = price.toFixed(2) + " €";





