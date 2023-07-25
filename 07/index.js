const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesComA =[];

for (let i of nomes){
    if (i[0] === "A" || i[0] === "a"){
        nomesComA.push(i);
    }
}

console.log(nomesComA);

