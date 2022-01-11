function solution(grid) {


    const result = []; 
    const cycle = grid.map((row) => row.split('').map((_) => new Array(4).fill(true)));
    const direct = [
        [1, 0], // 아래
        [0, 1], // 우
        [-1, 0], // 위
        [0, -1] // 좌
    ];

    cycle.forEach((row, rdx) => { 
        // rdx 가로 인덱스
        row.forEach((col, cdx) => { 
            // cdx 세로 인덱스
            col.forEach((route, idx) => { 
                // idx 요소 인덱스
                if (route) { 
                    result.push(checkCycle(rdx, cdx, idx)) 
                } 
            }); 
        }); 
    });

    function checkCycle(rdx, cdx, idx){
        let result = 0;

        while(true){
            // 종료조건
            if (!cycle[rdx][cdx][idx]){
                break;
            } 

            cycle[rdx][cdx][idx] = false;
            result++;

            rdx += direct[idx][0];
            cdx += direct[idx][1];

            // 범위를 초과했을 경우

            if (rdx < 0) rdx = cycle.length - 1; 
            if (rdx >= cycle.length) rdx = 0; 
            if (cdx < 0) cdx = cycle[0].length - 1; 
            if (cdx >= cycle[0].length) cdx = 0; 


            // ㄱ

            if (grid[rdx][cdx] === "L") idx = [1, 2, 3, 0][idx]; 
            if (grid[rdx][cdx] === "R") idx = [3, 0, 1, 2][idx];


        }

        return result


    }

    
    return result.sort((a, b) => a - b);

}

const grid = ["SL","LR"];

console.log(solution(grid));