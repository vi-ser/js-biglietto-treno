/* un programma che chiede all'utente una temperatura in gradi Celsius e la converte in Fahrenheit, tramite una ricerca su internet potrete trovare la formula corretta per effettuare la conversione. Visualizza la temperatura convertita. */

const celsius = Number(prompt("Inserisci la temperatura espressa in gradi Celsius"));

// conversione in gradi Fahrenheit
const fahrenheit = (celsius * 9 / 5) + 32;


document.getElementById('input').innerHTML = `Hai inserito ${celsius} °C.`
document.getElementById('output').innerHTML = `La temperatura convertita è di ${fahrenheit} °F.`

