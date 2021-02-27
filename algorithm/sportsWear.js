var n = 5;
var lost = [2,3,4];
var reserve = [1,2,4,5];
solution(n,lost,reserve);



function solution(n, lost, reserve) {
    var student = [];
    var answer = 0;

    for (let i = 1; i <= n; i++) {
        student[i-1] = i;
    }
    // 전체학생 출력
    console.log("1 : " + student);
    //--------------------------------------------
    for (let j = 0; j< lost.length; j++){
        student[lost[j]-1] = "x";
    }
    // 옷이 사라진 학생들 표시
    console.log("2 : " + student);

    //---------------------------------------------

    for(let k = student.length; k>0; k--){
        if(student[k-1] == "x"){
            //console.log("작동");
            if(reserve.indexOf(k) > -1){
                student[k-1] = k;
                reserve.splice(reserve.indexOf(k),1);
                continue;
            }
            //console.log("3-1 : " + student);
            for(let l = reserve.length; l>0; l--){

                if( reserve[l-1] >= k ){
                    student[k-1] = reserve.pop();
                    //console.log("3-1 : " + student);
                } else {
                    //console.log("3-1 : " + student);
                    break;
                }
            }
        }
    }
    // x를 채워준값
    console.log("3 : " + student);
    console.log(reserve);

    for(let m = 0; m <student.length; m++){
        if(student[m] !== "x"){
            answer ++;
        }
    }
    // 결과 값
    //console.log(answer)
    return answer;
}