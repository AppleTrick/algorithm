function solution(p) {

    

    function retry(inputStr) {

        if(inputStr.length === 0){
            return "";
        }

        let str = inputStr.split('');
    
        let valueSwitch = 1;
    
        let stack = [];
        let first = ""
        let firstVal;
        let second = ""
    
        if(str[0] === "("){
            firstVal = true;
        }else{
            firstVal = false;
        }
    
        for (let i = 0; i < str.length; i++) {
            if(valueSwitch){
                if(str[i] === (firstVal ? '(' : ')') ){
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

        // console.log("first의 값  : " + first , firstVal);
        // console.log("second의 값 : " + second);

        if(!firstVal){
            second = retry(second);
            return "(" + second + ")" + first.slice(1,-1).split('').reverse().join('');
        }

        // if(!firstVal && second.length === 0){
        //     first = first.slice(1,-1).split('').reverse().join('');
        //     return "(" + retry(first) + ")";
        // }

        if(firstVal && second.length === 0){
            return first
        }
        
    
        

        return firstVal ? first + retry(second) : retry(first) + second;
    
    }


    return retry(p);
}

let p = "))(("
// let p = ""
console.log(solution(p));