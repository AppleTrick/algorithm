function combination(arr, n) {
  const result = [];
  if (n === 1) {
    return arr.map((e) => [e]);
  }
  arr.forEach((e, i, arr) => {
    const copy = arr.slice(i + 1);
    const cases = combination(copy, n - 1);
    const combi = cases.map((v) => [e, ...v]);
    result.push(...combi);
  });

  return result;
}

function combi(arr, deep) {
  const result = [];
  if (deep === 1) {
    return arr.map((e) => [e]);
  }

  arr.forEach((fixed, index, thisArr) => {
    const rest = thisArr.slice(index + 1);
    const cases = combi(rest, deep - 1);
    const com = cases.map((v) => [fixed, ...v]);
    result.push(...com);
  });
  return result;
}

console.log(combi(["a", "b", "c", "d", "e"], 3));
