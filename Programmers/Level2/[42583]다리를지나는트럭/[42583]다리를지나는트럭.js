function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    var bridgeInTrucks = []; // 다리 위에 있는 트럭
    var sumweight = 0;
    var destination = truck_weights.length;
    var wait = 0;
    var count = 0;
    

    while(destination > count ){

        // 대기하는 첫번째 차량이 없을경우 뽑는다.
        if(wait === 0){
            wait = truck_weights.shift();
        }
        //console.log("wait 값 " + wait);

        // 0 이면 차가 없다.
        // 0 보다 크면 차가 있다.
        
        // 다리에 있는 무게를 잰다
        sumweight = 0 
        for(var i = 0; i < bridgeInTrucks.length; i++){
            sumweight = sumweight + bridgeInTrucks[i].weight;
        }
        
         // 다리에 있는 무게가 중량의 무게만큼 안될경우 다리에 넣어준다.
        if(sumweight + wait <= weight){

            var putTruck = {
                weight : wait,
                bridgelength : 0,
            }
            bridgeInTrucks.unshift(putTruck);
            wait = 0;
        }

        for(var i = 0; i <bridgeInTrucks.length; i++){
            bridgeInTrucks[i].bridgelength++;
        }
        

        if( bridgeInTrucks[bridgeInTrucks.length-1] && (bridgeInTrucks[bridgeInTrucks.length-1].bridgelength) === bridge_length){
            bridgeInTrucks.pop();
            count++;
        }

        answer++
    }

    console.log(answer);
    return answer;
    
}