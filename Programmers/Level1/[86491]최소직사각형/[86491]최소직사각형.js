function solution(sizes) {
    let a = 0;
    let b = 0;

    sizes.map((element) => {
        element.sort((a,b) => {return a-b})
    });

    // console.log(sizes);

    sizes.forEach(element => {
        a = a > element[0] ? a : element[0];
        b = b > element[1] ? b : element[1];
    });
    // console.log(a,b);
    return a * b;
    
}

let sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]
console.log(solution(sizes));

// feedback 1

/*  
    구조 분해할당에 대해 자주 쓰고 연습하기
*/