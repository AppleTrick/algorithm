a = 5;
b = 3;

solution(a,b);


function solution(a, b) {
    var answer = 0;
    if (a > b) {
        answer = (a + b) * (a-b + 1) / 2
    } else if ( b > a){
        answer = (b+ a) * (b-a + 1) / 2
    } else if( a === b){
        answer = a;
    }
    console.log(answer);
    return answer;
}