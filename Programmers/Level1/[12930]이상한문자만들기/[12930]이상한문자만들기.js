function solution(s) {
    let Str = s.split(' ').map((element) => {
        element = element.split('')
        return element.map((e,i) => {
            if(i % 2 === 0){
                return e.toUpperCase();
            }else{
                return e.toLowerCase();
            }
        }).join('');
    }).join(' ');
      
    return Str
}

let s = "try hello world"
// answer = "TrY HeLlO WoRlD"
console.log(solution(s));

/*
  feedback1 
    정규식이용해서 풀것


  feedback2
    if 문 대신 삼항연산자를 자주 쓸것
*/