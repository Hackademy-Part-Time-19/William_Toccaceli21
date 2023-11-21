


const listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]
listaProdotti.sort((a, b) => {
    return a.nome - b.nome
});
console.log(listaProdotti);

listaProdotti.sort((a, b) => {
    return a.prezzo - b.prezzo
});
console.log(listaProdotti);


function listaOrdinata(listaProdotti) {
    let listaOrdinata
    for (let i = 0; i < listaProdotti.length; i++) {
        if (listaProdotti[i]>250) ;

    }
    return listaOrdinata
}