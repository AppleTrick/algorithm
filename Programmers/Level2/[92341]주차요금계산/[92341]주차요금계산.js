// 카카오 코테에서 도전해본 문제임
// 뭐가 부족한지 확실히 알자
function timeCheck(before, after){
    before = before.split(':').map(e => parseInt(e));
    after = after.split(':').map(e => parseInt(e));

    return (after[0] - before[0]) * 60 + (after[1] - before[1]);

}


function solution(fees, records) {

    function settle(n){
        let [basic, basicPrice, addTime, addPrice] = fees;
        if(n > basic){
            return basicPrice + Math.ceil((n - basic)/addTime) * addPrice 
        }else{
            return basicPrice
        }
    }

    let obj = {};
    records = records.map(e => e.split(' '));

    for (const E of records) {
        let [time , carNum, check] = E;

        if(check == 'IN'){

            if(carNum in obj){  
                obj[carNum][0] = time;
                obj[carNum][1] = 0;
            }else{
                obj[carNum] = [time, 0 , 0];
            }

            
        }else if(check == 'OUT'){
            obj[carNum][1] = time;
            obj[carNum][2] = obj[carNum][2] + timeCheck(obj[carNum][0],obj[carNum][1])
        }
        
    }
    // console.log(obj);

    for (const key in obj) {
        if(!obj[key][1]){
            obj[key][2] = obj[key][2] + timeCheck(obj[key][0],"23:59");
        }
    }
    // console.log(obj);


    let answer = Object.keys(obj).sort((a,b) => parseInt(a) - parseInt(b));
    answer = answer.map(e => settle(obj[e][2]));
 
    return answer;
}

const fees = [180, 5000, 10, 600]
// 180분 기본 시간에 5000 원
// 10분에 추가로 600 원
const records = [
    "05:34 5961 IN", 
    "06:00 0000 IN", 
    "06:34 0000 OUT", 
    "07:59 5961 OUT", 
    "07:59 0148 IN", 
    "18:59 0000 IN", 
    "19:09 0148 OUT", 
    "22:59 5961 IN", 
    "23:00 5961 OUT"
]

solution(fees,records)

