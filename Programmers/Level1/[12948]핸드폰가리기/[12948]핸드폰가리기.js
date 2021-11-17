function solution(phone_number) {
    let answer = "";
    answer = "*".repeat(phone_number.length - 4) +phone_number.slice(phone_number.length - 4 , phone_number.length);

    return answer;
}

let phone_number = "01012345678";
console.log(solution(phone_number));
