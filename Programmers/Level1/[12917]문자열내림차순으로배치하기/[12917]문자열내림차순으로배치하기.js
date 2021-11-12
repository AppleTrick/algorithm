function solution(s) {
    let answer = s.split('').sort((a,b) => b.charCodeAt(0) - a.charCodeAt(0) );
    return answer.join('');
}

let s = "AAADbcdefg"
console.log(solution(s));

/*

feedback 1.
정말 단순한데 못풀었다... 이게 뭐하는건지... 방법을 생각해라. 함수만 쓰는게 아니라 방법과 능동적으로 할것!

*/