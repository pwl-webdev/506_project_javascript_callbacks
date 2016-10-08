/*
1. Write a function, funcCaller, that takes a func (a function) and an arg (any data type). 
The function returns the func called with arg(as an argument).
*/

var funcCaller = function(func, arg){
	return func(arg);
};

console.log(funcCaller(function(arg){return "Doubled argument sent to function: "+arg*2}, 3));

/*
2. Write a function, firstVal, that takes an array, arr, and a function, func, and calls func 
with the first index of the arr, the index # and the whole array.
*/

var firstVal = function(arr, func){
	return func(arr[0],0,arr);
}

firstVal([8,7,2,5],function(val, index, array){
	console.log("The value "+val+" is at position "+index+" in the"+array);
})
/*
3. Change firstVal to work not only with arrays but also objects. 
Since objects are not ordered, you can use any key-value pair on the object.
*/

var firstVal = function(arr, func){
	if( arr instanceof Array){
		return func(arr[0],0,arr);
	} else {
		for (var i in arr){
			return func(arr[i], i, arr);
		}
	}
}

firstVal({'firstArg':1, 'secondArg':2},function(val, index, array){
	console.log("The value "+val+" is at position "+index+" in the"+array);
})
/*
4. [Extra Credit] Write a function, once, (see: http://underscorejs.org/#once) 
	that takes a function and returns a version of that function which can only be called once. 
	[Hint: you need a closure] You probably don't want to be able to double charge someone's credit card. 
	Here is an example of how to use it:
	var chargeCreditCard = function(num, price){
    	//charges credit card for a certain price
  	};
  	var processPaymentOnce = once(chargeCreditCard);
  	processPaymentOnce(123456789012, 200);
*/