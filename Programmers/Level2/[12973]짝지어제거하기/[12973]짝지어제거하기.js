function solution(s)
{
    s = s.split('');

    let isTrue = true;

    while(isTrue && s.length > 0){
        for (let i = 1; i < s.length; i++) {
            if(s[i]===s[i-1]){
                s.splice(i-1,2)
                isTrue = true;
                break;
            }else{
                isTrue = false;
                continue;
            }
        }
    }

    // console.log(s);
    
    return s.length > 0 ? 0 : 1;
}

const s = "baabaa"
console.log(solution(s));