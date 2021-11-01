function solution(lottos, win_nums) {

    let count = 0;
    let bestCount = 0;

    win_nums.forEach(element => {
        if(lottos.includes(element)){
            count++; 
        }
    });

    lottos.forEach(element => {
        if(element == 0){
            bestCount++;
        }
    });

    if(count == 0 && bestCount == 0){
        return [6,6]
    }

    if(count == 0){
        return [7-bestCount,6];
    }

    return [7-(count+bestCount),7-count];
    
}