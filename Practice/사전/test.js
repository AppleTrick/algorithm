let arr = ["박", "창", "창", "희"];
let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (arr[i] in obj) {
    obj[arr[i]].countNum++;
  } else {
    obj[arr[i]] = { name: obj[arr[i]], countNum: 1 };
  }
}

console.log(obj);
