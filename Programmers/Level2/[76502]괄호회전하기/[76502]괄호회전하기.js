function solution(s) {

    let tryNum = s.length
    let answer = 0;


    function isCorrect(str){
        let val = true;
        let obj = {};

        for (const x of str) {
            if( x == "[" || x == "(" || x == "{"){
                obj[x] = (obj[x] + 1 || 1);
            }else{
                if( x == "]"){
                    if(obj["["]){
                        obj["["] = obj["["] - 1;
                    }else{
                        val = false;
                        break;
                    }
                }else if( x == ")"){
                    if(obj["("]){
                        obj["("] = obj["("] - 1;
                    }else{
                        val = false;
                        break;
                    }
                }else if( x == "}"){
                    if(obj["{"]){
                        obj["{"] = obj["{"] - 1;
                    }else{
                        val = false;
                        break;
                    }
                } 
            }
        }

        for (const key in obj) {
            if(obj[key] !== 0){
                val = false;
                break;
            }
        }

        // console.log(obj);

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

const s = "([{)}]";
console.log((solution(s)));