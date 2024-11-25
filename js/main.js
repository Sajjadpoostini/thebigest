let x = +prompt("x....?");
let y = +prompt("y....?");
let z = +prompt("z....?");

if (x >= y && x >= z){
  document.write(`<h1>the bigest is ${x}</h1>`);
}
else if(y >= z && y >= x){
  document.write(`<h1>the bigest is ${y}</h1>`);

}
else if(z >= x && z >= y){
    document.write(`<h1>the bigest is ${z}</h1>`);
  
  }

