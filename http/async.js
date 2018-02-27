
//setTimeout可改变执行的顺序
// var c = 0
// function print(){
// 	console.log(c)
// }

// function plus(callback){
// 	setTimeout(function(){
// 		c+=1
// 	},1000)
// }
// plus()
// print()


var c = 0

function print(){
	console.log(c)
}

function plus(callback){
	setTimeout(function(){
		c+=1
		callback()
	},1000)
}
plus(print)
