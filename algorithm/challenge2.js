function solution(s) {

    let count = 0;
    let check1 = false
    let check2 = false
    let check3 = false
    const sizes = s.length;

    for(let i = 0; i < sizes; i++){

        for(let i = 0; i < sizes; i++){

            if(s[i]==="{"){
                for(let j = i; j < sizes; j++){
            
                    if(s[j]==="}"){
                        check1 = true;
                        break;
                    }else{
                        check1 = false;
                        continue;
                    }
                }
            }else if(s[i]==="("){
                for(let j = i; j < sizes; j++){
            
                    if(s[j]===")"){
                        check2 = true;
                        break;
                    }else{
                        check2 = false;
                        continue;
                    }
                }
            }else if(s[i]==="["){
                for(let j = i; j < sizes; j++){
                    if(s[j]==="]"){
                        check3 = true;
                        break;
                    }else{
                        check3 = false;
                        continue;
                    }
                }
            }

        

        }        

        if(check1 && check2 && check3){
            count ++;
        }

        let item = s[0];

        console.log(s);

        s = s.substr(1);

        s = s + item;

    }

    console.log(count);

}

let s = "{}()[]"
solution(s)

