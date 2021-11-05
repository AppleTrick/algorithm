function solution(array, commands) {
    let answer = [];

    for (const x of commands) {
        let sliceArr = array.slice(x[0]-1,x[1]);
        sliceArr.sort((a,b) => a - b);
        answer.push(sliceArr[x[2]-1]);
    }

    return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array, commands));


// feedback1

/*

        function solution(array, commands) {
            return commands.map(command => {
                const [sPosition, ePosition, position] = command
                const newArray = array
                    .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
                    .sort((a,b) => a - b)    

                return newArray[position - 1]
            })
        }
*/