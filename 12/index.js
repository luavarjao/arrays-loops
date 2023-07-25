const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let i of filaDeDentro){
    if (filaDeDentro.length < 5){
        filaDeDentro.push(filaDeFora[0]);
        filaDeFora.shift();
    }
}

console.log(`Na fila de dentro se encontram ${filaDeDentro.length} pessoas: ${filaDeDentro}`);
console.log(`Na fila de fora se encontram ${filaDeFora.length} pessoas: ${filaDeFora} `)

