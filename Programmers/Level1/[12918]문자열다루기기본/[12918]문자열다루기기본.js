/*
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
*/

function solution(s) {
    if(s.length === 4 || s.length === 6){
        // console.log(s.match(/[^0-9]/g));
        if(s.match(/([^0-9])/g)){
            return false
        }else{
            return true
        }
    }else {
        return false
    }
}

let s = "ㅁ234"
console.log(solution(s));

/*
feedback1

정규식의 마법을 잊지 말자!

function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

*/