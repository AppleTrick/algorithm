function solution(word) {
    let dic = ["A","E","I","O","U"];

    let ChangeSwitcher = true
    let answer = -1;

    function DFS(W){
        if(ChangeSwitcher){
            answer++;
            if(W === word){
                ChangeSwitcher = false;
                return ;
            }else if(W !== word && W.length < 5){
                for (let i = 0; i < dic.length; i++) {
                    DFS(W + dic[i]);                
                }
            }else{
                return;
            }
        }
    }

    DFS("");

    return answer;
}

let word = "AAAAE";

console.log(solution(word));
