const input = [12,13,54,55,66,77,88,98,100,105];
const cnt = 0;
let myMap = [];

for(let num of input){
    myMap(num % 42 );
}

console.log(myMap);
Array.from(new Set(myMap));
console.log(myMap);