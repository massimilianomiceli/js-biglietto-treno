const numeroPasseggeri = parseInt(prompt("Si prega di inserire il numero di passeggeri:"));
const km = parseInt(prompt("Si prega di inserire il numero di km da percorrere: "));
const costoKm = 0.21

let etaPasseggeri = [];
let costoTotale = 0

for (let i=0; i < numeroPasseggeri; i++) {
    etaPasseggeri[i]=parseInt(prompt(`Si prega di inserire l'etá del passeggero ${i+1} :`));
    if (etaPasseggeri[i]<18) {
        costoIndividuale = 0.8 * costoKm * km
    } else if (etaPasseggeri[i]>=18 && etaPasseggeri[i]<=65) {
        costoIndividuale = costoKm * km
    } else {
        costoIndividuale = 0.6 * costoKm * km       
    }
    console.log("Il costo del singolo biglietto é:", costoIndividuale.toFixed(2));
    costoTotale = costoTotale + costoIndividuale
}

    console.log("Il costo totale é:", costoTotale.toFixed(2));