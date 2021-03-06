module.exports = function(x,y,callback){
	try{
		if(x <= 0 || y <= 0){
			throw new Error("Rectangle dimensions must be more then 0");
		}else{
			callback(null,{
				parameter:function(){
					return (2*(x+y));
				},
				area:function(){
					return (x*y);
				}
			});
		}
	}
	catch(error){
		callback(error,null);
	}

}