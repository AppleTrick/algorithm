bridge_length = 3;
weight = 10;
truck_weights = [1,2,3,4,5];
solution(bridge_length,weight,truck_weights);


function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    var bridgeInTrucks = []; // 다리 위에 있는 트럭
    var sumweight = 0;
    var destination = truck_weights.length;
    var wait = 0;
    var count = 0;
    

    while(destination > count ){

        // 대기하는 첫번째 차량이 없을경우 뽑는다.

        /*
         0 이면 차가 없다.
         0 보다 크면 차가 있다.
         */

        if(wait === 0){
            wait = truck_weights.shift();
        }
        
        
        // 현재 다리 무게 값을 초기화 시켜주고 현재 다리에 있는 무게를 잰다
        sumweight = 0 

        for(var i = 0; i < bridgeInTrucks.length; i++){
            sumweight = sumweight + bridgeInTrucks[i].weight;
        }
        
         // 다리에 있는 무게가 중량의 무게만큼 안될경우 다리 트럭을 넣어준다.
        if(sumweight + wait <= weight){

            var putTruck = {
                weight : wait,
                bridgelength : 0,
            }

            bridgeInTrucks.unshift(putTruck);
            wait = 0;
        }

        
        // 다리에 있는 트럭마다 다리길이 만큼 위치를 더해준다.,
        for(var i = 0; i <bridgeInTrucks.length; i++){
            bridgeInTrucks[i].bridgelength++;
        }
        
        console.log(bridgeInTrucks);
        // 만약 마지막 트럭의 위치가 다리의 마지막 길이가 같으면 트럭을 빼준다.
        if(bridgeInTrucks[bridgeInTrucks.length-1]?.bridgelength === bridge_length){
            bridgeInTrucks.pop();
            count++;
        }


        // if( bridgeInTrucks[bridgeInTrucks.length-1] && (bridgeInTrucks[bridgeInTrucks.length-1].bridgelength) === bridge_length){
        //     bridgeInTrucks.pop();
        //     count++;
        // }

        answer++
    }

    console.log(answer);
    return answer;
    
}



