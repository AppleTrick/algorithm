function solution(expression) {

    let answer = [];

    let testCase = [
        ['*','-','+'],
        ['*','+','-'],
        ['+','*','-'],
        ['+','-','*'],
        ['-','*','+'],
        ['-','+','*'],
    ];

    for (let i = 0; i < testCase.length; i++) {
        let value = expression.split(/(\D)/);
        for (let j = 0; j < 3; j++) {
            while(value.includes(testCase[i][j])){
                let num = value.indexOf(testCase[i][j]);
                let ret = new Function('return ' + value[num-1] + value[num] + value[num+1] )();
                value.splice(num-1,3,ret);
            }
        }
        answer.push(value[0]);
    }
    answer = answer.map(e => Math.abs(e));
    return Math.max(...answer);
}

let expression = "100-200*300-500+20"

console.log(solution(expression));