var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)


function sit(who){
	console.log('please ' + who + ' sit down')

}
life.on('mmm',sit)



life.on('mmm',function(who){
	console.log('please ' + who + ' play')
})

life.on('mmm',function(who){
	console.log('please ' + who + ' sleep')
})

life.on('mmm',function(who){
	console.log('please '  + who + ' go home')
})

life.on('aaa',function(who){
	console.log('please '  + who + ' happy')
})

// life.removeListener('mmm',function(who){
// 	console.log('please '  + who + ' go home')
// })   //不起作用

life.removeListener('mmm',sit)

//全部移除，也可以有参数
//life.removeAllListeners()

var mmmListener = life.emit('mmm','bbb')
var aaaListener = life.emit('aaa','bbb')
var zzzListener = life.emit('zzz','bbb')

//console.log(zzzListener)
console.log(life.listeners('mmm').length)
console.log(EventEmitter.listenerCount(life,'mmm'))