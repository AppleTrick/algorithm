let absolutes = [];
let signs = [];

function solution(absolutes, signs) {
    
    let result = 0;

    for(let i = 0; i<absolutes.length; i++){
        if(signs[i]===true){

        }else{
            absolutes[i] = absolutes[i] * -1;
        }

        result += absolutes[i];
    }
    
    return result;
}