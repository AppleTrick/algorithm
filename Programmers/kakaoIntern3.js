function solution(n, k, cmd) {
    let result = [];
    let count = 0;
    let save = [];

    // 배열 생성
    for(let i = 0; i < n; i++){
        result = result.concat(i);
    }

    const originalLength = result.length;
    
    // 모든 명령어 실행
    for(let i=0; i < cmd.length; i++){
        // 무빙 하는거 나누기
        let temp = cmd[i].split(' ');


        // 실행 string
        let tempString = '';

        for(j = 0; j < temp.length; j++){

            // +
            if(temp[j]=='D'){
                tempString += '+';

            // -
            } else if(temp[j]=='U'){
                tempString += '-';

            // delete
            } else if(temp[j]=='C'){
                let temparr = result.splice(k,1);
                save.push(temparr[0]-count);
                count ++;

            // back
            } else if(temp[j]=='Z'){
                let saves = save[save.length-1];
                
                if( saves <= 0){
                    saves = saves + count;
                }

                // } else if(saves > result.length-1){
                //     saves = result.length ;
                // }
                count--;

                result.splice( saves, 0 ,save[save.length-1] + count)
                
                save.pop();
                //console.log(save);

            // number
            }else{
                tempString+=temp[j];
                k = eval(k+tempString);
                // 최소
                if(k < 0){
                    k = 0;
                }
                // 최대
                if(k > result.length-1){
                    k = result.length-1;
                }
            }
        }
        console.log(result);
    }
    var answer = '';
    return answer;
}

const n = 8;
const k = 2;
const cmd = ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"];
solution(n,k,cmd);

// D => +
// 숫자 => 숫자
// C => splice(현재숫자 , 1) / 임시저장소에 push
// z => 임시저장소 last.pop splice(숫자 , 0 , pop결과)

