function solution(skill, skill_trees) {
    let order = skill.split('');
    let answer = 0;

    for (const x of skill_trees) {

        let value = 0;
        let isRight = true;
        let temp = false;


        for (let i = 0; i < order.length; i++) {

            if(temp && x.indexOf(order[i]) !== -1){
                isRight = false;
                break;
            }

            if (x.indexOf(order[i]) === -1) {
                temp = true;
                continue;
            }

            if(value <= x.indexOf(order[i])){
                value = x.indexOf(order[i]);
            }else{
                isRight = false;
                break;
            }
        }

        if (isRight) {
            answer++;
        }

    }   
    return answer;
}

const skill = "ABC";
const skill_trees = ["ABCC","ABC","A"];
console.log(solution(skill,skill_trees));