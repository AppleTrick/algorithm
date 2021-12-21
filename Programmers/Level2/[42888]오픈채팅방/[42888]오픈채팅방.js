function solution(record) {
    let users = []; // 유저의 닉네임이 저장되어있는곳
    record = record.map((e) => e.split(' ')); // 문자열을 나눔
    let answer = []; // 결과가 담길곳 

    //record[i][0] => 입장, 퇴장, 변경
    //record[i][1] => 유저ID
    //record[i][2] => 닉네임

    for (let i = 0; i < record.length; i++) {
        if(record[i][0] !== 'Leave'){
            users[record[i][1]] = record[i][2]
            if(record[i][0] == 'Enter'){
                answer.push([record[i][1],"님이 나갔습니다."])
            }
        }else{
            answer.push([record[i][1],"님이 나갔습니다."])
        }
    }
    
    answer = answer.map(([a,b])=> {
        return ""+users[a]+b;
    })

    console.log(answer);

    return 0;
}

const record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

console.log(solution(record));