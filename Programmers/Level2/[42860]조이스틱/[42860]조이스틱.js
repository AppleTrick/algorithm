function solution(name) {
    let answer = 0;
    let reverseName = name[0] + name.substring(1,name.length).split('').reverse().join('');

    let value = name;

    for (let j = name.length -1; j > 0; j--) {
        // 1 둘다 A가 아니면?
        if(name[j] !== "A" && reverseName[j] !== "A"){
            value = name;
            break;
        // 2 둘다 A 라면
        }else if(name[j] === "A" && reverseName[j] === "A"){
            continue;
        // 3 하나만 A면?
        }else{
            if(name[j] === "A"){
                value = name;
                break;
            }else{
                value = reverseName;
                break;
            }
        }
    }  
    let arr = Array.from({length : name.length}, () => "A");
    let leng = value.length;

    for (let k = leng - 1; k >= 0; k--) {
        if(value[k]=="A"){
            leng--;
        }else{
            break;
        }        
    }


    for (let i = 0; i < leng; i++) {
        let num = comparsion(arr[i], value[i]);
        answer += num;
    }

    answer = answer == 0 ? 0 : answer + leng - 1;

    return answer;;


}

function comparsion(a,b){
    let result = 0;
    if(b.charCodeAt(0) - a.charCodeAt(0) > 13){
        result = 26 - (b.charCodeAt(0) - a.charCodeAt(0));
    }else{
        result = b.charCodeAt(0) - a.charCodeAt(0)
    }
    return result;
}

// let a = "JAN";
let a = "AAAA"
console.log(solution(a));
