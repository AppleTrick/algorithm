function solution(files) {

    files = files.map((e) => {

        let numberStart;
        let numberEnd;

        for (let i = 0; i < e.length; i++) {
            if(e[i].match(/\d/)){
                numberStart = i;
                for (let j = i+1; j < e.length; j++) {
                    if(!e[j].match(/\d/)){
                        numberEnd = j;
                        break;
                    }
                }
                break;
            }
        }

        if(numberStart && numberEnd){
            return [e.substr(0,numberStart), e.substr(numberStart,numberEnd - numberStart),e.substr(numberEnd) ]
        }else if(numberStart && !numberEnd){
            return [e.substr(0,numberStart), e.substr(numberStart), '']
        }

    });

    files.sort((a,b) => {
        const A = a[0].toUpperCase();
        const B = b[0].toUpperCase();

        if(A > B){
            return 1;
        }else if(A < B){
            return -1;
        }else{
            return Number(a[1]) - Number(b[1]);
        }
    })


    return files.map(e => e.join(''));
}

let files =   ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]

console.log(solution(files));

/*
    feedback1
    정규식 공부 무조건 해야됨 다양한 방법으로 값을 도출해 낼 수 있어야됨

    feedback2
    match 함수에 대해 정확히 전달할 수 있어야됨

    
*/

// 제발 정규식으로 깔끔하게 푸는법좀 연습하자.. 이게 뭐냐..
