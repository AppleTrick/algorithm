
function solution(cacheSize, cities) {
    var answer = 0;
    const cache = [];
    let city;

    if(cacheSize === 0) return cities.length * 5;
    while(city = cities.shift()) {
        let index;
        if((index = cache.findIndex(item => item.toLowerCase() === city.toLowerCase())) !== -1) {
            cache.splice(index, 1);
            cache.push(city);
            answer += 1;
        }
        else {
            if(cache.length < cacheSize) cache.push(city);
            else {
                cache.shift();
                cache.push(city);
            }
            answer += 5;
        }
    }
    return answer;
}