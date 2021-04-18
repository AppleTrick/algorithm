function solution(answers) {


    var answer = [];

    var a = [1,2,3,4,5];
    var b = [2,1,2,3,2,4,2,5];
    var c = [3,3,1,1,2,2,4,4,5,5];

    var cnt = [0,0,0];

    for( var i = 0; i < answers.length; i++){
        if(a[i % a.length] == answers[i]){
            cnt[0]++;
        }
        if(b[i % b.length] == answers[i]){
            cnt[1]++;
        }
        if(c[i % c.length] == answers[i]){
            cnt[2]++;
        }
    }

    var max = 0;
    for( var j = 0; j < cnt.length; j++){
        if(cnt[j] > max){
            max = cnt[j];
        }
    }

    for(var k = 0; k < cnt.length; k++){
        if(max === cnt[k]){
            answer.push(k+1);
        }
    }
    return answer;
}