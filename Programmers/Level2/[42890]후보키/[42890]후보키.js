function solution(relation) {

    let answer = 0;
    let result = [];

    let arr = Array.from({length : relation[0].length} , () => 0);

    for (let i = 0; i < relation[0].length; i++) {
        let set = new Set();
        for (let j = 0; j < relation.length; j++) {
            set.add(relation[j][i]);
        }

        if([...set].length === relation.length){
            arr[i] = 1;
            answer++;
            result.push(i);
        }
    }

    console.log(arr);

    return answer;
}

const relation = [
    ["100","ryan","music","2"],
    ["200","apeach","math","2"],
    ["300","tube","computer","3"],
    ["400","con","computer","4"],
    ["500","muzi","music","3"],
    ["600","apeach","music","2"]
];

console.log(solution(relation));