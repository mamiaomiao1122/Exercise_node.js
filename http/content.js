//对象方法调用
// var pet ={
// 	words:'...',
// 	speak:function(){
// 		console.log(this === pet)  //true
// 		console.log(this.words)    //...
// 	}
// }
// pet.speak()


//函数方法调用
// function pet(words){
// 	this.words = words
// 	console.log(this.words)
// 	console.log(this === global)  //true
// }
// pet('...')



//构造函数
function Pet(words){
	this.words = words
	this.speak = function(){
		console.log(this)    //pet { words: 'mao', speak: [Function] }
		console.log(this.words)     //this 指向cat
	}
}
var cat = new Pet('mao')  //实例对象
cat.speak()