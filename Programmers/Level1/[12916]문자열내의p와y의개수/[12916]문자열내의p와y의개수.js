function solution(s){
    let p = 0;
    let y = 0;
    for (const x of s) {
       if(x.toUpperCase() === 'P'){
        p++
       }else if(x.toUpperCase() === 'Y'){
        y++
       }
    }


    return p === y ? true : false;
}

let s = "pPoooyY"
console.log(solution(s));

/*
feedback 1 
정규식으로 많이 풀어볼것!

function numPY(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}

*/