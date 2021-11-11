function solution(dartResult) {
  let result = [];
  const re = /(\d+[A-Z]+[#*]*)/g //  RegExp
  //정규식에 조건에 맞는 배열 생성

  let dart = dartResult.match(re);

  for (let i = 0; i < dart.length; i++) {
    let num = 0;
    for (let j = 0; j < dart[i].length; j++) {
      if( dart[i][j] === 'S'){
        num = num ** 1;
      }else if( dart[i][j] === 'D'){
        num = num ** 2;
      }else if( dart[i][j] === 'T'){
        num = num ** 3;
      }else if( dart[i][j] === '*'){
        num = num * 2;
        if(i > 0){
          result[i-1] = result[i-1] * 2;
        }
      }else if ( dart[i][j] === '#'){
        num = num * (-1);
      }else if( dart[i][j] === '0'){
        if(dart[i][j-1] === '1'){
          num += 9;
        }else{
          num+=0;
        }
      }else{
        num += Number(dart[i][j]); 
      }
    }
    result.push(num);
  }
  // console.log(result);
  return result.reduce((a,b) => a+b);
}

let dartResult = "1D2S#10S"
console.log(solution(dartResult));

/* 
feedback 1 
match 함수에 대해 정리

feedback 2
TIL 정리로 정규식에 대한 내용 다시 정리하기


*/

