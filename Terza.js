
let array = ["franco", "Gennaro", "Valerio", "Giulia", "eugenio"]

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}


let array2 = ["franco", "Gennaro", "Valerio", "Giulia", "eugenio"]

for (let i = 0; i < array2.length; i++) {

    for (let j = 0; j < array2[i].length; j++) {
        console.log(array2[i][j])
    }

}


let ContoCorrente = 1500
let=operazione
while (operazione) {
    

let operazione = parseInt(prompt("Benvenuto.\n\nPremi 1 per fare un prelievo.\n\n Premi 2 per fare un bonifico."))
let importo = parseInt(prompt("Inserisci l'importo dell'operazione"))

switch (operazione) {
    case 1: if (ContoCorrente - operazione >= 0) {
        let destinatario = parseInt(prompt("inserisci l'iban del destinatario"))
        ContoCorrente = importo - operazione
        alert("Il bonifico è andato a buon fine a queste coordinate" + destinatario + "arrivederci")
        alert("Il tuo saldo è di" + ContoCorrente + "euro")
    }
    else {
        alert("Il saldo è insufficiente")
    }


        break;
    case 2: if (ContoCorrente - importo >= 0) {
        let prelievo = parseInt(prompt("Quanto desideri prelevare?"))
        ContoCorrente = importo - operazione
        alert("Il prelievo" + prelievo + "è andato a buon fine")
        alert("Il tuo saldo è di" + ContoCorrente + "euro")
    }
    else { alert("il saldo è insufficiente") }
    break;
    case 3:
        alert("grazie di essere passato, torni a trovarci")


}


}