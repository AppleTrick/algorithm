function solution(maps) {
    //start (0,0)
    //end (n,m)
    let n = maps.length-1;
    let m = maps[0].length -1;
    // console.log(n,m);

    // 상하좌우 움직이는 법
    let x = [1,0,-1,0] // 하 좌 상 우
    let y = [0,-1,0,1];
    let count = 1;

    let answer = 0;
    let result = Number.MAX_SAFE_INTEGER;

    console.log(answer);

    function check(a,b){
        
        if(a==n && b ==m){
            console.log("결과");
            answer ++;
            result = Math.min(result,count);
        }else{
            // 결과에 도착하지 못할경우 하 좌 상 우 을 확인함
            for (let i = 0; i < 4; i++) {
                // console.log(a+x[i],b+y[i]);
                if(a+x[i] >= 0 && b+y[i] >= 0 && a+x[i] <= n && b+y[i] <=m && maps[a+x[i]][b+y[i]] == 1){ // 둘다 0보단 커야되고 n,m 사이에 존재해야됨
                    maps[a][b] = 0; // 이미 찾았으므로 값을 0으로 바꿔준다.
                    count ++;
                    check(a+x[i],b+y[i]); // 다음 수를 계산한다. 
                    count --;
                    maps[a][b] = 1; // 다시 1로 변환 시켜줌
                }
            }
        }
    }

    check(0,0);

    if(answer == 0){
        return -1;
    }else{
        return result
    }
    
}
const maps = [
    [1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]
];


console.log(solution(maps));