const numeros = [3, 24, 111, 8, 11, 7, 32];

let x = 0;

let maior = 0;

for (let i of numeros){
    if (i > maior){
        maior = i;
    }
}

console.log(maior);