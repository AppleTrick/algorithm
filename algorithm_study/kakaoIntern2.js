function solution(places) {
    let answer = [];

    for(const arrays of places){
        let arr = arrays.map((arr) => arr.split(''));
        // 나눈 배열은 arr; -> arr은 새로운 배열에 넣는ㄴ다.

        const arr2 = Array.from(Array(9), () => Array(9).fill(' '));
        //console.log(arr2);

        // 배열 재배치
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j< arr[i].length; j++){
                arr2[i+2][j+2] = arr[i][j]; 
            }
        }
        //console.log(arr2);

        let over = true;
        
        for(let i = 2; i < 7; i++){
            // 중단 되면 for문 중단
            if(over === false){
                break;
            }
            for(let j = 2; j < 7; j++){

                if(arr2[i][j] == 'P'){
                    if(arr2[i + 1][j] == 'P'|| arr2[(i - 1)][j] == 'P' ||arr2[i][j + 1] == 'P' ||arr2[i][(j - 1)] == 'P' ){
                        over = false;
                        break;
                    }else if(arr2[i + 2][j] == 'P'){
                        if(arr2[i + 1][j] != 'X'){
                            over = false;
                            break;
                        }
                    }else if(arr2[(i - 2)][j] == 'P'){
                        if(arr2[(i - 1)][j] != 'X'){
                            over = false;
                            break;
                        }
                    }else if(arr2[i][j + 2] == 'P'){
                        if(arr2[i][j + 1] != 'X'){
                            over = false;
                            break;
                        }
                    }else if(arr2[i][(j - 2)] == 'P'){
                        if(arr2[i][(j - 1)] != 'X'){
                            over = false;
                            break;
                        }
                    }else if(arr2[i + 1][j + 1] == 'P'){
                        if(arr2[i + 1][j] != 'X' ||  arr2[i][j + 1] != 'X' ){
                            over = false;
                            break;
                        }
                    }else if(arr2[i + 1][(j - 1)] == 'P'){
                        if(arr2[i + 1][j] != 'X' ||  arr2[i][(j - 1)] != 'X' ){
                            over = false;
                            break;
                        }
                    }else if(arr2[(i - 1)][j + 1] == 'P'){
                        if(arr2[(i - 1)][j] != 'X' ||  arr2[i][j + 1] != 'X' ){
                            over = false;
                            break;
                        }
                    }else if(arr2[(i - 1)][(j - 1)] == 'P'){
                        if(arr2[(i - 1)][j] != 'X' ||  arr2[i][(j - 1)] != 'X' ){
                            over = false;
                            break;
                        }
                    }
                }
            }
        }
        over ? answer.push(1) : answer.push(0)
    }
    
    //console.log(answer);
    return answer;
}


const places = [
    [
        "POOOP", 
        "OXXOX", 
        "OPXPX", 
        "OOXOX", 
        "POXXP"],
    [
        "POOPX",
        "OXPXP",
        "PXXXO",
        "OXXXO", 
        "OOOPP"
    ], 
    [
        "PXOPX", 
        "OXOXP", 
        "OXPXX", 
        "OXXXP", 
        "POOXX"], 
    [
        "OOOXX", 
        "XOOOX", 
        "OOOXX", 
        "OXOOX", 
        "OOOOO"], 
    [
        "PXPXP", 
        "XPXPX", 
        "PXPXP", 
        "XPXPX", 
        "PXPXP"]
    ]

solution(places);
