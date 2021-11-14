
function solution(n) {
    const s = new Set();     // Set 생성

    for(let i=1; i<=n; i+=2){  // 각각의 값 삽입
        s.add(i);
    }

    s.delete(1); // 1 삭제
    s.add(2);   // 2 추가

    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    // 홀수에서 배수가 되는 항목 들 다 삭제./
                s.delete(k);
             }
        }
    }
    return s.size;
}

let n = 10;
solution(n)

/*
    코드의 효율적인 방법을 생각하고 방법론을 생각할것 
    방법만으로는 풀수 없다.
    생각을 해야된다.
*/
