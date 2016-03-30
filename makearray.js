var makeArray = function(start, finish) {
	var newArray = [];
	for(start; start <= finish; start++) {
		newArray.push(start);
	};
	console.log(newArray);
} 

makeArray(-4, 2);