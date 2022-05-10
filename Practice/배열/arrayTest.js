// 2차원 배열 생성
let arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(3);
}
console.log(arr);

//구문으로 생성
let arr1 = Array.from({ length: 5 }, (e, i) => i);
let arr2 = Array.from({ length: 5 }, () =>
  Array.from({ length: 10 }, (e, i) => i)
);
console.log(arr1);
console.log(arr2);
