function solution(dirs) {

    let set = [];

    // 처음위치 => 나중위치
    let start = [0,0,0,0];

    for (const x of dirs) {

        if( x === "U"){
            if(start[3] + 1 <= 5){
                start[3]++;
            }else{
                continue;
            }
        }else if(x === "D"){
            if(start[3] - 1 >= -5){
                start[3]--;
            }else{
                continue;
            }
        }else if(x === "R"){
            if(start[2] + 1 <= 5){
                start[2]++;
            }else{
                continue;
            }
        }else if(x === "L"){
            if(start[2] - 1 >= -5){
                start[2]--;
            }else{
                continue;
            }
        }

        let [a,b,c,d] = start;

        if(!set.includes(`${a} ${b} ${c} ${d}`) && !set.includes(`${c} ${d} ${a} ${b}`)){
            set.push(`${a} ${b} ${c} ${d}`);
        }else{
            console.log("작동");
        }

        start = [c,d,c,d];
    }
    console.log(set);
    return set.length;
}


const dirs = "LULLLLLLU";
console.log(solution(dirs));

// 주의사항 set에서 has를 사용하는것과 array 에서 includes 는 서로를 파악 못한다. 