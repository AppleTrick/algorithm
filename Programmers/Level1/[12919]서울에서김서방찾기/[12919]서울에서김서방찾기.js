function solution(seoul) {
    let answer;
    seoul.forEach((element,i) => {
        if(element === "Kim"){
            answer = `김서방은 ${i}에 있다`
        }
    });

    return answer;
}

let seoul = ["Jane", "Kim"]	;
console.log(solution(seoul));

/*
피드백

function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}

indexOf()를 사용해서 요소를 더 빠르고 깔끔하게 찾을수 있다.
*/