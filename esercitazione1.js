



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


const listaModificata = listaProdotti.filter ((prezzo1) => prezzo1.prezzo > 250)
console.log(listaModificata)



function lista( listaProdotti){
    let lista =[]
    for (let i = 0; i < listaProdotti.length; i++) {
        if (listaProdotti[i].prezzo >250 ){
            lista.push(listaProdotti[i])
        } 
            
       
        
    }
    return lista;
}
 let prezzoMaggiore250 = lista(listaProdotti)
 console.log (prezzoMaggiore250)