# 완주하지못한선수 피드백

## 풀이식

### 실패 풀이식1
```jsx
function solution(participant, completion) {
    for (let i = 0; i < completion.length; i++) {
        participant.splice(participant.indexOf(completion[i]),1);
    }
    return participant[0];
}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
```

### 실패 풀이식2
```jsx
function solution(participant, completion) {
    for (let i = 0; i < completion.length; i++) {
        for (let j = 0; j < participant.length; j++) {
            if(completion[i] === participant[j]){
                participant[j] = 0;
                break;
            }
        }
    }
    // console.log(participant);

    for (let k = 0; k < participant.length; k++) {
        if(participant[k]!==0){
            return participant[k]
        }
    }

}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
console.log(solution(participant,completion));
```

### 성공 풀이식
```jsx

function solution(participant, completion) {
    participant.sort()
    completion.sort();
    for (const i in participant) {
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
console.log(solution(participant,completion));

```

## 풀이생각

두번의 실패를 통해 효율성 코드좋은 코드는 어떤것이지에 대해 생각해보았다.

- 첫번째 코드는 배열에 splice() 함수를 이용하여 배열안의 요소를 제거하는 식의 방식을 생각했다
결과는 맞았지만 splice()는 코드의 효율을 매우 떨어뜨리는 사실을 알 수 있었다.

- 두번째 코드는 이중 for 문을 사용해서 요소를 비교한 후에 동일한것이 반복된다면 0으로 바꾼후에
마지막에 0이 아닌 요소를 출력하는 방식을 구현했지만 이 역시 요소가 많아지면 코드의 효율이 떨어지므로 올바른 풀이가 아니였다.

- 성공한 방법은 두 요소를 sort()를 통해 정렬 후에 같지 않은 부분이 답이라 생각했기에 해당 요소를 출력하는 방식으로 생각을했다.

| 성공 피드백 for in 을 사용하여 해당 문제를 풀었는데, for in 은 모든 프로퍼티를 순회하여 검색하는 용도 이기에 적합하지 않기에 배열에서는 for 이나 forEach 함수를 사용하는 것을 권장한다고 한다.

