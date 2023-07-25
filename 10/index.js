const numeros = [80, 11, 4, 11];

let maior = 0;
let menor = 0;


for (let i of numeros){
    if (i >= maior){
        maior = i;
    }
}


for (let i of numeros){
    if (i <= maior){
        menor = i;
    }
}

console.log(maior - menor);