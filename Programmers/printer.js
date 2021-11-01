priorities = [9,8,7,9,8,6] ;
location = 0;

solution(priorities, location)


function solution(priorities, location) {
    var count = 0;
    var memory = 0;
    var answer = 0;

        
     for(var number = 9; number > 0; number--){

        for (var i = memory; i < priorities.length; i++) {

            if(priorities[i] === number ){
                priorities[i] = "x";
                count++;
                memory = i;
                if( i === location){
                    answer = count;
                }
                console.log(priorities);
                //console.log("memory의 값은 ? " + memory)
            }
        }

        for (var j = 0; j < priorities.length; j++ ) {

            if(priorities[j] === number ){
                
                priorities[j] = "x";
                count++;
                memory = j;
                if( j === location){
                    answer = count;
                }
                console.log(priorities);
                //console.log("memory의 값은 ? " + memory)
            }
        }       
    }
    console.log("답은 " + answer);

    return answer;
}