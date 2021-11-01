function solution(arr)
{
    var answer = [];
    for(var i = 0; i < arr.length; i++){
        if( i === arr.length){
           if(arr[i] !== arr[i-1]){
             answer.push(arr[i]);
           }
       } else{
           if(arr[i] !== arr[i+1]){
              answer.push(arr[i]);
        }
    }
   
    }
    return answer;
}