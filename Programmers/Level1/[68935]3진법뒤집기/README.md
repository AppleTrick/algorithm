
# 3진법 뒤집기

## 풀이코드
``` jsx
function solution(n) {
    let answer = 0;
    let num = n.toString(3).split('').reverse()
    num.forEach((element,index) => {
        answer = answer + element * (3 ** (num.length - 1 - index))
    });
    return answer;
}
```

### 기존 풀이코드

배열로 바꾼후에 3진법을 그대로 계산하는 방식을 취함


## 피드백 코드
``` jsx
function solution(n) {
    let answer = parseInt([...n.toString(3)].reverse().join(''),3)
    return answer;
}

```

### 피드백 코드 해설

JS 문법적 요소가 부족해서 쉽게 풀지 못한점이 크다.

```jsx
parseInt(num , ? )
```

- ? 진법의 num을 10 진법으로 바꿔준다.

```jsx
[...]
```
전개 연산자를 통해 문자열을 배열로 쉽게 바꿔서 적요이 가능했다. 