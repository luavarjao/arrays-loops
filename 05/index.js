const original = [1, 4, 12, 21, 13, 88, 112];

let pares = [];
let impares =[];

for (let i of original){
    if(i % 2 === 0){
        pares.push(i);
    } 
}
console.log(pares);

const p  = original.filter (number => number %2 === 0);
console.log(p);
