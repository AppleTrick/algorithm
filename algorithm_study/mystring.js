function solution(strings, n) {
   
//    console.log(strings[0][n]);
    const answer = strings.sort((a,b) => {
       if(a[n] > b[n]){ // a > b 문자같은경우 - 숫자일일경우 a - b 
            return 1;
       }else if( a[n] < b[n]){
            return -1;
       }else {
            if(a>b){
                return 1;
            }else if(a<b){
                return -1;
            }else{
                return 0;
            }
       }
   });

   return answer;
   //console.log(answer);
}

const strings = ["sun", "bed", "car", "aaa"];
const n = 1;

console.log(solution(strings, n));
