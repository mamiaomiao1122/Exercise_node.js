//对象上下文改变
var pet ={
	words:'...',
	speak:function(say){
		console.log(say +' '+this.words)  
		// console.log(this.words)    //...
	}
}
//pet.speak('speak')    //speak ...
var dog = {
	words:'wangwang'
} 
pet.speak.call(dog,'qwe')  //qwe wangwang






function Pet(words){
	this.words = words
	this.speak = function(){
		console.log(this.words)
	}
}
function Dog(words){
	Pet.call(this,words)
	//pet.apply(this,arguments)
}
var dog = new Dog('wang')
dog.speak()
