var num = [ 10 , 9 , 5 , 4 , 3 , 15 , 22];

num = num.sort(function(a,b){
    console.log(b-a);
	return b - a;
});

console.log(num);
