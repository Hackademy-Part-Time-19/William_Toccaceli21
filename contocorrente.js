let ContoCorrente = 1500
let operazione;
while (operazione != 3) {


    let operazione = parseInt(prompt("Benvenuto.\n\nPremi 1 per fare un prelievo.\n\n Premi 2 per fare un bonifico.\n\n Premi 3 per uscire."))
    let importo;

    switch (operazione) {
        case 1: importo = parseInt(prompt("Inserisci l'importo dell'operazione"))
            if (ContoCorrente - operazione >= 0) {

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
            let importo = parseInt(prompt("Inserisci l'importo dell'operazione"))
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