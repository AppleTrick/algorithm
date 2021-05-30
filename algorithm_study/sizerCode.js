// let val = 'a';
// console.log(val.charCodeAt(0));

// let number = 111;
// console.log(String.fromCharCode(number));


function solution(s, n) {

    // foreach는 안됨.. ???
    // map도 안됨 왜??
    // String 문자열 자체가 -> Immutable value / 원시 타입은 전부
    let result = [];

    for (const key in s) {
        let charcode = s.charCodeAt(key)
        if(charcode < 91 && charcode >64){
            charcode = charcode + (n % 26); //  90 = z  +  25
            charcode > 90 ? result.push(String.fromCharCode(charcode - 26)) : result.push(String.fromCharCode(charcode))
            
        } else if(charcode >96 && charcode <123) { 
            // 대문자일 경우
            charcode = charcode + (n % 26);
            charcode > 122 ? result.push(String.fromCharCode(charcode - 26)) : result.push(String.fromCharCode(charcode))
        } else{
            result.push(String.fromCharCode(charcode))
        }
        //122 + n -> 97
        //90 + n -> 65
    }

    return result.join('');
}

const s = "a B z"
const n = 4
console.log(solution(s,n));

//const s = "hello";

