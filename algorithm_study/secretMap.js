function solution(n, arr1, arr2) {
    let arrays1 = [];
    arr1.map((e) => {
        let save = e.toString(2);
        if(save.length < n){
            while( n > save.length){
                save = `0${save}`;
            }
        }
         arrays1.push(save);
    });
    //console.log(arrays1);

    let arrays2 = [];
    arr2.map((e) => {
        let save = e.toString(2);
        if(save.length < n){
            while( n > save.length){
                save = `0${save}`;
            }
        }
         arrays2.push(save);
    });
    //console.log(arrays2);

    let answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = "";
        for(let j = 0; j < n; j++){
            if(Number(arrays1[i][j]) || Number(arrays2[i][j])){
                answer[i] = answer[i]+"#"
            }else{
                answer[i] = answer[i]+" "
            }
        }
    }

    return answer;
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11]
const arr2 = [30, 1, 21, 17, 28]

console.log(solution(n,arr1,arr2));
//console.log(n.toString(2));