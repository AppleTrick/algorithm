function solution(s) {

    let tryNum = s.length
    let answer = 0;


    function isCorrect(str){
        let val = true;
        let stack = [];

        for (const x of str) {
            if( x == "(" || x == "[" || x == "{"){
                stack.push(x);
            }else{
                if(!stack.length){
                    val = false;
                    break;
                }else{
                    if( x == ")" && stack[stack.length - 1] == "("){
                        stack.pop();
                    }else if( x== "]" && stack[stack.length - 1] == "["){
                        stack.pop();
                    }else if( x == "}" && stack[stack.length - 1] == "{"){
                        stack.pop();
                    }else{
                        val = false;
                        break;
                    }
                }
            }
        }

        if(stack.length){
            val = false;
        }
        
        console.log(val);

        return val

    }

    for (let i = 0; i < tryNum; i++) {
        let temp = s.slice(0,1);
        s = s.substring(1,s.length) + temp;
        if(isCorrect(s)){
            answer++;
        }
           
    }


    return answer;
}

const s = "[](){}";
console.log((solution(s)));