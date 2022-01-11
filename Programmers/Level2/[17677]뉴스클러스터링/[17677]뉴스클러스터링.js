function solution(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    let regEx = /^[A-Z]+$/;

    let arr1 =[];
    let arr2 =[];

    for (let i = 0; i < str1.length-1; i++) {
        let temp = str1[i] + str1[i+1]
        if(regEx.test(temp)){
            arr1.push(temp)
        }
    }

    for (let i = 0; i < str2.length-1; i++) {
        let temp = str2[i] + str2[i+1]
        if(regEx.test(temp)){
            arr2.push(temp)
        }
    }
    // 교집합 합집합 구하기
    let intersection = [];
    let union = [];

    for (let i = 0; i < arr1.length; i++) {
        // 교집이 있을경우
        if(arr2.indexOf(arr1[i]) >= 0){
            intersection.push(arr1[i]);
            arr2.splice(arr2.indexOf(arr1[i]),1);
        }else{
            union.push(arr1[i]);
        }
    }

    union.push(...arr2,...intersection);

    if(union.length === 0){
        return 65536;
    }else{
        return parseInt(65536 * intersection.length / union.length);
    }
}

const str1 = 'FRANCE';
const str2 = 'french';

console.log(solution(str1,str2));


/*

약점 : 정규식 매우 약함 => 반드시 해결해야될 문제

*/