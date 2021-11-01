let scores = [
    [50, 90], [50, 87]
];

// solution 방법
// 1. n번째 학생이 자신에게 준 점수가 최대 최소인지 확인
// 1-1 . 최대 최소일 경우 다른곡에도 자신과 같은 점수가 있는지 확인
// 2. 같은 점수가 있을경우 그대로
// 2-1 같은 점수가 없을 경우 해당 점수를 0으로 바꿔준다.
// 3. 평균 구하기
// 4. 학점분배하기

// 예외사항
// 

function solution(scores) {

    for (let i = 0; i < scores.length; i++) {
        // 최대값
        let max = scores[0][i];

        // 최소값 
        let min = scores[0][i];

        // 같은값 두개일 경우
        let maxCount = 0;
        let minCount = 0;

        // 세로로 최대값 최소값을 구함
        for (let j = 0; j < scores[i].length; j++) {
            if(scores[j][i] >= max){
                max = scores[j][i];
            }
            if(scores[j][i] <= min){
                min = scores[j][i];
            }
        }
        for (let j = 0; j < scores[i].length; j++) {
            if(scores[j][i] == max){
                maxCount ++
            }
        }

        for (let j = 0; j < scores[i].length; j++) {
            if(scores[j][i] == min){
                minCount ++
            }
        }

        if((scores[i][i] === min && minCount == 1) ||(scores[i][i] === max && maxCount == 1)  ){
            scores[i][i] = 0;
        }
    }
    console.log(scores);

    const answer = [];
    for (let i = 0; i < scores.length; i++) {
        let sum = 0;
        let count = 0;
        for (let j = 0; j < scores[i].length; j++) {
            if(scores[j][i] !== 0 ){
                count ++;
            }

            sum = sum + scores[j][i];
        }
        answer.push(sum/count);
    }

    let result = answer.map((element) => {
        if(element >= 90){
            return 'A';
        }else if(element >= 80){
            return 'B';
        }else if(element >= 70){
            return 'C';
        }else if(element >= 60){
            return 'D';
        }else{
            return 'F';
        }
    });

    console.log(result.join(''));

    return result;
    // scores.forEach((element,i) => {
    //     if(Math.max(...element)==element[i]){

    //         let count = 0;
    //         element.forEach((val)=>{
    //             if(val == Math.max(...element)){
    //                 count++;
    //             }
    //         })

    //         if(count == 1){
    //             element[i] = 0;
    //         }

    //     }else if(Math.min(...element)==element[i]){

    //         let count = 0;
    //         element.forEach((val)=>{
    //             if(val == Math.min(...element)){
    //                 count++;
    //             }
    //         })

    //         if(count == 1){
    //             element[i] = 0;
    //         }
    //     }
    // });

    // console.log(scores);
}



solution(scores);