function solution(new_id) {
    var answer = '';
    
    //1 단계
    answer = new_id.toLowerCase();
    console.log("1단계 : " + answer);

    //2단계
    answer = answer.replace(/[^\w-_.]/g, '');
    console.log("2단계 : " +answer);
    
    //3단계
    var a = [];
    for (let index = 0; index < answer.length; index++) {
        if(answer[index]==="."){
            if( index === answer.length){
                if(answer[index] !== answer[index-1]){
                    a.push(answer[index]);
                }
            } else{
                if(answer[index] !== answer[index+1]){
                    a.push(answer[index]);
                }
            }
        } else{
            a.push(answer[index]);
        }        
    }
    answer = a.join('');
    console.log("3단계 : " +answer);

    //4단계
    if(answer[0]==='.'){
        answer = answer.substr(1);
    }
    if(answer[answer.length-1]==='.'){
        answer = answer.slice(0,-1);
    }
    console.log("4단계 : " +answer);

    //5단계
    if(answer.length == 0){
        answer = 'a';
    }
    console.log("5단계 : " +answer);
    
    //6단계
    answer = answer.substr(0,15);
    console.log("6단계 : " +answer);

    // 마지막 한번더
    if(answer[0]==='.'){
        answer = answer.substr(1);
    }
    if(answer[answer.length-1]==='.'){
        answer = answer.slice(0,-1);
    }

    if(answer.length == 0){
        answer = 'a';
    }

    //7단계
    if(answer.length < 3){
        var lastchar = answer.charAt(answer.length-1);
        while(answer.length < 3){
            answer = answer + lastchar;
        }
    }
    console.log("7단계 : " +answer);

    

    return answer;
    
}