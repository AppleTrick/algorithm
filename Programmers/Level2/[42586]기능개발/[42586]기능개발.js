function solution(progresses, speeds) {
    var count = progresses.length;
    var pushCount = 0;
    var answer = [];

    

    while(count > 0){
        // pmt 배열을 반복 speed로 각 배열마다 한번씩 더해준다.
        for(var i = 0; i < speeds.length; i++){
            progresses[i] = progresses[i] + speeds[i];
        }


        // PMT 배열의 100 여부 넘는것을 판별
        for(var j = 0; j < progresses.length; j++){
            if(progresses[j] >= 100){
                pushCount++;
            } else{
                break;
            }
        }
        if(pushCount!==0){
            answer.push(pushCount);
            for(var k = 0; k < pushCount; k++){
                progresses.shift();
                speeds.shift();
            }
            count = count - pushCount;
            pushCount = 0;
        }
    }
    //console.log(answer);
    return answer;
}