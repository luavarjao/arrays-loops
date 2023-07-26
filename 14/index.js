const arrayA = [5, 33, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

let x = 0;

for (let i of arrayA){
    if(i < arrayB[x]){
        console.log(i);
    } else {
        console.log(arrayB[x]);
    }
    x++;
}

