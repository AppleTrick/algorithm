function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array.filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1).sort((a,b) => a - b)    
        return newArray[position - 1]
    })
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array, commands));
