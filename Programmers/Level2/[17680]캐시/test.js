// find
// 함수로 만족해야됨
let arr = [1,"a","b",3,4,6,6,6,7,8,9,1,2,3];
let answer = arr.find((e) => e === "a");
console.log(answer);
/*
    배열을 실행했을때 가장 먼저 해당 조건을 만족하는 요소를 반환한다. (뒤에 뭐가 있든 상관 없음)
    존재하지 않으면 undefind
*/

// findIndex
// 함수를 만족해야됨
let arr1 = [1,"a","b",3,4,6,6,6,7,8,9,1,2,3];
let answer1 = arr1.findIndex((e) => e === "b");
console.log(answer1);

/*
    findIndex를 실행했을 해당 조건에 만족하는 인덱스 값을 반환 한다 (뒤에 뭐가 있든 상관 없음)
    존재하지 않으면 -1
*/

//IndexOf
// 값으로 만족해야됨
