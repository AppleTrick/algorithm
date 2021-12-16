function solution(skill, skill_trees) {

    function isCorrect(n) {
        let test = skill.split('');

        for (var i = 0; i < n.length; i++) {

            if (!skill.includes(n[i])){
                continue;
            } 

            if (n[i] === test.shift()){ 
                continue
            };
            return false;
        }
        return true;
    }    

    return skill_trees.filter(isCorrect).length;
}

const skill = "ABC";
const skill_trees = ["EEABCC","ABC","A"];
console.log(solution(skill,skill_trees));