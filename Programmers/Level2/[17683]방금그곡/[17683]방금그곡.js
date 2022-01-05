function solution(m, musicinfos) {
    // 매칭 됫을때의 가사를 return 해야됨
    // 여러개의 조건이 일치할 경우 길이가 긴것을 반환
    // 길이도 같을 경우 가장 먼저 발견한 것을 반환

    let regEX = /(\D)#/g; // 정규식
    let resultM = m.replace(regEX, (e,i) => i.toLowerCase());
    // console.log(resultM);

    musicinfos = musicinfos.map((e) => {
        let [time1, time2, value, str] = e.split(',');

        // 시간 분배
        time2 = time2.split(':').map(e => Number(e));
        time1 = time1.split(':').map(e => Number(e));
        let resultTime = (time2[0] - time1[0]) * 60 + time2[1] - time1[1];

        // str 문자열 변경해야됨.
        let strValue = str.replace(regEX,(e,i) => i.toLowerCase());
        // console.log(strValue);
        let leng = strValue.length
        strValue = strValue.repeat( resultTime / leng) + strValue.substring(0, resultTime % leng);
        return [strValue, value, resultTime];

    });

    // console.log(musicinfos);

    let timeValue = 0;
    let answer = "(None)";

    for (let i = 0; i < musicinfos.length; i++) {
        if(musicinfos[i][0].includes(resultM)){
            // console.log("작동");
            if( musicinfos[i][2] > timeValue){
                answer = musicinfos[i][1];
                timeValue = musicinfos[i][2];
            }
        }      
    }

    return answer;
}

const m = "FFCC#BCC#BCC#BCC#B"
const musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]

console.log(solution(m,musicinfos));