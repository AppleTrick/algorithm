function solution(val) {
    let answer = 0;
    let name = val.split('');
    let arr = Array.from({length : name.length}, () => "A");

    let idx = 0; // 인덱스의 값

    while(true){

        let right = idx;
        let left = idx;

        if(name[idx] !== "A"){
            answer += comparsion(arr[idx], name[idx]);
            name[idx] = "A";
        }


        while(arr[right]==="A" && arr[left] === "A"){
            answer++;
    
            if(left == 0 ){
                left = name.length - 1;
            }else{
                left--;
            }
    
            if(right == name.lengt-1){
                right = 0;
            }else{
                right++
            }
        }

        if(name[right] != "A"){
            idx = right;
        }else{
            idx = left;
        }
    }
    
    
    
    return 0;


}

function comparsion(a,b){
    let result = 0;
    if(b.charCodeAt(0) - a.charCodeAt(0) > 13){
        result = 26 - (b.charCodeAt(0) - a.charCodeAt(0));
    }else{
        result = b.charCodeAt(0) - a.charCodeAt(0)
    }
    return result;
}

// let a = "JAN";
let a = "ABABAAAAAAABA"

console.log(solution(a));
