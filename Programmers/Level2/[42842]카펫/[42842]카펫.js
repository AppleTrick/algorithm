function solution(brown, yellow) {
    let mul = yellow
    let plus = (brown-4) / 2;
    let num = plus
    let resultA = 0;
    let resultB = 0;

    //console.log(mul,plus,num,resultA, resultB);
    
    for (let i = 0; i <= num; i++) {
        if((num * i) === mul){
            resultA = num;
            resultB = i;
            break
        }
        num--;   
    }

  return [resultA+2 ,resultB+2];

}