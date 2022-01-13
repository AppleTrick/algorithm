function solution(cacheSize, cities) {

    let arr = [];
    let answer =0;

    // 대문자로 변환
    cities = cities.map(e => e.toUpperCase());

    // cachMiss 일 경우
    if(cacheSize == 0){
        return cities.length * 5;
    }

    for (let i = 0; i < cities.length; i++) {
        const idx = arr.findIndex((e) => e === cities[i]);

        if (idx !== -1) {
          arr.splice(idx, 1);
          answer += 1;
        } else if (arr.length === cacheSize) {
            answer += 5;
            arr.shift();
        } else {
            answer += 5;
        }
        arr.push(cities[i]);
    }


    return answer;
}

const cacheSize = 3;
const cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]

console.log(solution(cacheSize,cities));