function solution(files) {
    const regex = /^(\D+)(\d{1,5})(?:.*)$/; 
    let [,ahead,aNumber] = files[0].match(regex);
    let val = files[1].match(regex);
    console.log(val);
    

    const pattern = /(\D+)(\d{1,5})/;
    let [bHead, bNumber] = files[2].match(pattern).slice(1, 3);
    console.log(bHead,bNumber);


    // console.log(ahead,aNumber);
    let answer = 0;
    return answer;
}

let files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];

console.log(solution(files));

/*
    feedback1
    정규식 공부 무조건 해야됨 다양한 방법으로 값을 도출해 낼 수 있어야됨

    feedback2
    match 함수에 대해 정확히 전달할 수 있어야됨

    
*/
