function solution(leave, day, holidays){
    let dayNum;
    let result = 0;
    switch (day) {
        case 'MON':
            dayNum = [6,7];
            break;
        case 'TUE':
            dayNum = [5,6];
            break;
        case 'WED':
            dayNum = [4,5]
            break;
        case 'THU':
            dayNum = [3,4]
            break;
        case 'FRI':
            dayNum = [2,3]
            break;
        case 'SAT':
            dayNum = [1,2]
            break;
        case 'SUN':
            dayNum = [7,1]
            break;
        default:
            break;
    }
    const arr = new Array(30)
    arr.fill(0);

    // 토요일 일요일 1로 변환
    for(let i = 1; i <= arr.length; i ++){
        if( (i - dayNum[0]) % 7 == 0 || (i - dayNum[1]) % 7 ==0 ){
            arr[i-1] = 1;
        }
    }

    // 공휴일 1로변환
    for(let i = 0; i < holidays.length; i++){
        arr[holidays[i]-1] = 1;
    }

    // 원본달력 출력
    //console.log(arr);

    // 임시달력
    let cal;
    let leaveday;
    for(let i = 0; i < arr.length; i++){
        cal = [...arr];
        leaveday = leave;
        for(let j = i; j < cal.length; j++){
            if(leaveday == 0){
                break;
            }
            if(cal[j]==0){
                cal[j] = 1;
                leaveday--;
            }
        }

        if(result < maxNum(cal)){
            result = maxNum(cal);
        }
    }
    return result;
}

// 최대 
function maxNum(arr){
    let maxNum = 0;
    let num = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            num++;
            if(num > maxNum){
                maxNum = num
            }
        }else{
            num = 0;
        }
    }
    return maxNum;
}

const leave = 3;
const day = "SUN"
const holidays = [2, 6, 17, 29]
solution(leave,day,holidays);

// 6, 7 은 토 /일

// 1 2 3 4 5 6 7 8 9
// 5 6 7

// 1 2 3 4 5 6 7
// 7 1 2 3 4 5 6

// 1 2 3 4 5 6 7
//