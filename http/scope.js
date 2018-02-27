var globalVariable = 'this is globalVariable'

function gloabfunction(){
	var local = 'this  is local'
	
	console.log('visit globalVariable/local')
	console.log(local)
	console.log(globalVariable)
	globalVariable = 'this is change variable'
	console.log(globalVariable)

	function localFunction(){
		var innerLocal = 'this  is innerLocal'
		console.log('visit globalVariable/local/innerLocal')
	
		console.log(globalVariable)
		console.log(local)
	    console.log(innerLocal)


	}
	localFunction()

}
gloabfunction()