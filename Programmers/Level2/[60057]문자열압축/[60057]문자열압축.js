function solution(s) {

    let answer = Number.MAX_SAFE_INTEGER
    if(s.length == 1){
        return 1;
    }


    // s.length / 2 => 최대 압축수
    for (let i = 1; i <= parseInt(s.length/2); i++) {

        let count = 1;
        let str = '';

        
        for (let j = 0; j < s.length; j+=i) {
            let before = s.substr(j,i);
            let after = s.substr(j+i,i);

            if(before === after){
                count++;
            }else{
                if(count > 1){
                    str = str + count + before;
                }else{
                    str = str + before;
                }
                count = 1;
            }

        }

        answer = Math.min(str.length , answer);
    }
    

    return answer;
}

const s = "aabbaccc";

console.log(solution(s));