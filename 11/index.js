const original = [5, 7, 10, 17, 26, 34, 118, 245];

const numeros =[];

for (let i of original){
    if (i >= 10 && i <= 20 || i >= 100){
        numeros.push(i);
    }
}

console.log(numeros);