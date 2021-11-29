function solution(p) {
    if(p.length === 0){
        return "";
    }

    let str = p.split('');

    let trueStack = [];
    let falseStack = [];
    let result = "";
    let result1 = "";

    for (let i = 0; i < str.length; i++) {

        if(str[i] === '('){
            if(falseStack.length < 1){
                trueStack.push(str[i])
                result += str[i];
            }else{
                falseStack.pop();
                result1 = str[i] + result1;

                if(falseStack < 1){
                    result = result + result1;
                    result1 = "";
                }
            }
        }else{
            if(trueStack.length > 0){
                trueStack.pop();
                result += str[i];
            }else{
                falseStack.push(str[i])
                result1 += str[i];
            }
        }
        console.log("-----------");
        console.log("result  결과  : " + result);
        console.log("result1 결과  : " + result1);
        console.log(trueStack);
        console.log(falseStack);
        console.log("-----------");
        
    }
    return result;
}

let p = "))()((";
// let p = ""
console.log(solution(p));