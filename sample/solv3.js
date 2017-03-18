var argv = require('yargs')
	.usage('usage: node $0 --l=[num] --b=[num]')
	.demand(['l','b'])
	.argv;

var Rect = require('./rect2');

function solveRect(l,b){
	console.log("l-->"+l +",b-->"+b);
	Rect(l,b,function(err,rectangle){
		if(err){
			console.log(err);
		}else{
			console.log("parameter-->"+rectangle.parameter());
			console.log("area-->"+rectangle.area());
		}
	});
}


solveRect(argv.l,argv.b);
/*solveRect(4,9);
solveRect(-2,5);*/