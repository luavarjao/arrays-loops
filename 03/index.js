const numeros = [10, 22, 14, 87, 12, 284];

let x = 0;

let encontrado = false;

for (let i of numeros){
    if (i === 10){
console.log(`O número 10 está no índice ${x}`);
encontrado = true;
    }
    x++;
}
if (!encontrado){
    console.log(-1);
}
