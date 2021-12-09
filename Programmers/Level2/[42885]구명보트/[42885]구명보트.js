function solution(people, limit) {
    people.sort((a,b) => a-b);

    let answer = 0;


    while(people.length > 0){
        let value = people.pop();

        if(value + people[0] <= limit){
            people.shift();
        }

        answer++;
    }

   

    return answer;
}

let people = [70, 70, 30, 30];
const limit = 100;
console.log(solution(people, limit));