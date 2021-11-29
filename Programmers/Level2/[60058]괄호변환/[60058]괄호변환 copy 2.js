function solution(p) {

    let str = p.split('');

    let valueSwitch = 1;

    let stack = [];
    let first = ""
    let fisrtVal;
    let second = ""
    let secondVal;

    if(str[0] === "("){
        fisrtVal = true;
        secondVal = false;
    }else{
        fisrtVal = false;
        secondVal = true;
    }

    for (let i = 0; i < str.length; i++) {
        if(valueSwitch){
            if(str[i] === (fisrtVal ? '(' : ')') ){
                stack.push(str[i]);
                first+= str[i];
            }else{
                if(stack.length > 0){
                    stack.pop();
                    first += str[i];
                }else{
                    second+=str[i]
                    valueSwitch = 0;
                }
            }
        }else{
            second += str[i];
        }        
    }

    console.log(first);
    console.log(second);

    console.log(firstVal);
    console.log(secondVal);

}

let p = "()))((()";
// let p = ""
console.log(solution(p));