function solution(s) {
    s = s.toLowerCase();
    let arr = s.split(' ');

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1,arr[i].length);
    }

    return arr.join(' ');
}

let s = "3people unFollowed me";
console.log(solution(s));

/*
    어떤 부분에서 런타임에러가 나는지 파악이 안된다.
    다른 풀이와 비교해서 파악해보기
*/