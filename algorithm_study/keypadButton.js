function solution(numbers, hand) {
    
    let answer = [];

    const handlocation = {
        'left' : 10,
        'right' : 12
    }

    numbers.forEach((e,index) => {
        if( e == 0 ){
            e = 11;
        }
        
        // 1,4,7 일 경우
        if(e % 3 == 1){
            answer = answer.concat('L');
            handlocation.left = e;

        // 3,6,9일 경우
        }else if( e % 3 == 0){
            answer = answer.concat('R');
            handlocation.right = e;
            
        // 2,5,8 일 경우
        }else{
            // 현재 손의 위치를 확인한다.
            checkLocationNum(e,handlocation,answer,hand)
        }
        //console.log(handlocation);

    });
    const result = answer.join('')
    console.log(result);
    //return result;
    

}

function checkLocationNum(e , handlocation, answer1, hand){
    const num = parseInt((e-1)/3);
    const numRemain = ((e-1)%3);
    const leftNum = parseInt((handlocation.left-1)/3);
    const leftNumRemain = + ((handlocation.left-1)%3);
    const rightNum = parseInt((handlocation.right-1)/3);
    const rightNumRemain = + ((handlocation.right-1)%3)

    //console.log(e, handlocation.left, handlocation.right);
    //console.log(num, leftNum, rightNum)
    //console.log(Math.abs(num-leftNum) , Math.abs(num-rightNum) );

    // 왼쪽이 더 가깝다면
    if(Math.abs(num-leftNum)+Math.abs(numRemain-leftNumRemain) < Math.abs(num-rightNum)+Math.abs(numRemain-rightNumRemain)){
        answer = answer1.concat('L');
        handlocation.left = e;

    // 오른쪽이 더 가깝다면
    }else if(Math.abs(num-leftNum)+Math.abs(numRemain-leftNumRemain) > Math.abs(num-rightNum)+Math.abs(numRemain-rightNumRemain)){
        answer = answer1.concat('R');
        handlocation.right = e;

    // 거리가 같다면
    }else{
        if(hand === 'left'){
            answer = answer1.concat('L');
            handlocation.left = e;
        }else{
            answer = answer1.concat('R');
            handlocation.right = e;
        }
    }
    //console.log(answer);
}
// 1,4,7 은 왼손
// 3,6,9 는 오른손
// 2,5,8 은 더 가까운쪽 -> 거리가 같을경우 손잡이 순으로

numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
hand = "left"

solution(numbers,hand)

