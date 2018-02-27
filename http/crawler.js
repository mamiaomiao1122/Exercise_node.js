var http = require('http')
var cheerio = require('cheerio')

var url = 'http://www.imooc.com/learn/348'

function filterChapters(html){
	var $ = cheerio.load(html)
	var chapters = $('.learnchapter')

	// [{
	// 	chapterTitle:'',
	// 	videos:[
	// 	title:'',
	// 	id:'']
	// }

	// ]

	var courseData =[]
	chapters.each(function(item){
		var chapters = $(this)
		var chapterTitle = chapters.find('strong').text()
		var videos = chapters.find('.video').children('li')
		var chapterData = {
			chapterTitle:chapterTitle,
			videos:[]
		}
		videos.each(function(item){
			var video = $(this).find('.studyvideo')
			var videoTitle = video.text()
			var id = video.attr('href').split('video/')
			chapterData.videos.push({
				title:videoTitle,
				id:id
			})
		})
		courseData.push(chapterData)
	})
	return courseData
}
function printCoursrInfo(courseData){
	courseData.forEach(function(item){
		var chapterTitle = item.chapterTitle

		console.log(chapterTitle +"\n")

		item.videos.forEach(function(video){
			console.log('[' +video.id + ' ]'+ video.title + '\n')
		})
	})
}
http.get(url,function(res){
	var html = ''
	res.on('data',function(data){
		html +=data
	})
	res.on('end',function(){
		var courseData = filterChapters(html)

		printCoursrInfo(courseData)
	})
}).on('error',function(){
	console.log('error')
})