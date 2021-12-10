function solution(line) {

    const result = [];

    let maxX = Number.MIN_SAFE_INTEGER;
    let minX = Number.MAX_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;

    // 교점을 구함
    for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length; j++) {
            let [A,B,E] = line[i];
            let [C,D,F] = line[j];
            
            if (((A * D) - (B * C)) != 0) {
                let x = ((B * F) - (E * D)) / ((A * D) - (B * C));
                let y = ((E * C) - (A * F)) / ((A * D) - (B * C));

                // 정수일 경우에만 값을 넣어줌
                if (Number.isInteger(x) && Number.isInteger(y)) {
                    result.push([parseInt(x),parseInt(y)])
                    maxX = Math.max(maxX , x);
                    maxY = Math.max(maxY , y);
                    minX = Math.min(minX , x);
                    minY = Math.min(minY , y);
                }
            }    
        }        
    }
    // console.log(result);

    // console.log(maxY,minX);

    let answer = Array.from({length : maxY - minY + 1} , () => Array.from({length : maxX - minX +1} , () => '.'));

    for (let i = 0; i < result.length; i++) {
        let [a,b] = result[i];
        console.log(maxY-b , a-minX);
        answer[maxY-b][a-minX] = '*';
    }


    return answer.map((e) => e.join(''));
}

const line = [
    [2, -1, 4],     // y = 2x +4
    [-2, -1, 4],    // y = -2x + 4
    [0, -1, 1],     // y = 1
    [5, -8, -12],   // 8y = 5x - 12
    [5, 8, 12]]     // 8y = - 5x - 12


console.log(solution(line));