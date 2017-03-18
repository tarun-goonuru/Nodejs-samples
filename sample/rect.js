var rect = {
	parameter : function(l,b){
		return (2*(l+b));
	},
	area : function(l,b){
		return (l*b);
	}
};

function solveRect(l,b){
	if(l>0 && b>0){
		console.log(rect.parameter(l,b));
		console.log(rect.area(l,b));
	}else{
		console.log('Rectangle dimensions must be more then 0');
	}
	
}

solveRect(2,5);
solveRect(4,9);
solveRect(-2,5);