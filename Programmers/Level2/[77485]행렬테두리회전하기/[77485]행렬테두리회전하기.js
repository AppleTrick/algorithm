function solution(rows, columns, queries) {
    let result = [];

    // 배열 생성
    let arr = Array.from({length : rows}, (e,i) => Array.from({length : columns},(e,j) => columns*i + j+1));
    // console.log(arr); 

    function Searching(query){
        let [a1,a2,b1,b2] = query.map((e) => e - 1);
        // console.log(a1,a2,b1,b2);
        let temp1 = arr[a1+1][a2];
        let temp2 = 0;
        let min = rows * columns;

        for (let i = a2; i <= b2 - 1; i++) {
            min = Math.min(min,arr[a1][i])
            temp2 = arr[a1][i];
            arr[a1][i] = temp1;
            temp1 = temp2
        }


        for (let i = a1; i <= b1 - 1; i++) {
            min = Math.min(min,arr[i][b2])
            temp2 = arr[i][b2];
            arr[i][b2] = temp1;
            temp1 = temp2
        }


        for (let i = b2; i >= a2 + 1; i--) {
            min = Math.min(min,arr[b1][i])
            temp2 = arr[b1][i]
            arr[b1][i] = temp1;
            temp1 = temp2;
        }


        for (let i = b1; i >= a1 + 1 ; i--) {
            min = Math.min(min,arr[i][a2])
            temp2 = arr[i][a2]
            arr[i][a2] = temp1;
            temp1 = temp2;
        }
        
        return min
    }

    
    for (const x of queries) {
        result.push(Searching(x))
    }

    return result;
}
const rows = 3;
const columns = 3;
const queries = [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]];

console.log(solution(rows, columns, queries));