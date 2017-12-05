# Steps:

Parent component: 
	state
	function that uses state
		compares click Id to values in array
	pass down to children as prop


Children component: 
	Access parent function as prop





_______________

Parent to Child funciton and values, changing the state

parent property contains the function which setState of value
value property in parent contains the state.value want to change

child function contains the same function and uses the value property from parent function

________________

randomize function

onclick, win or lose. it ranomizes the src links for all of the pictures:

	1. Need array of src links
	2. math.random src links put back into array
	3. .map() into image component