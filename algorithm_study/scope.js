let x = 1;

function foo() {
  let x = 10;
  bar(x);
}

function bar(x) {
  console.log(x);
}

foo(); // 10? 1?
bar(x); // 1