const letras = ["A", "a", "B", "C", "a", "b"];

let quantidade = 0;

for (let vogal of letras){
    if (vogal === "e" || vogal === "E"){
        quantidade ++;
    }
}
if (quantidade>0){
    console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
} else {
    console.log("Nenhuma letra E ou e foi encontrada.");
}