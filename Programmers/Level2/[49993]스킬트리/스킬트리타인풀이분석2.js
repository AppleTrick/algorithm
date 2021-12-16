
function solution(skill, skill_trees) {
    let answer = 0;
    let regex = new RegExp(`[^${skill}]`, 'g');

    let result = skill_trees.map((x) => x.replace(regex, '')).filter((x) => {
        return skill.indexOf(x) === 0 || x === "";
    });

    // 순서가 맞거나 , 아예없을 경우를 계산했음
    // 무조건 AB가 되어야 하므로 값이 0으로 나와야됨

    console.log(result);

    return 0;
}

const skill = "ABC";
const skill_trees = ["EABDC","ABC","A","CA"];
console.log(solution(skill,skill_trees));