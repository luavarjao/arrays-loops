const disjuntores = [false, false, true, false, false, true, false, false];

let x = 0;

for (let i of disjuntores){
   if(i){
    console.log(x)
   }
   x++;
}