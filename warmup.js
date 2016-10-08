/*1. myEach()

Write a function that takes an array as its first argument, and a callback as its second argument.

This function should iterate through each item in the array, and pass that item to the callback function as an argument.

You can do this however you want - if you want do challenge yourself, try using Prototypes!

Here's how the finished function might work:

myEach([1,2,3,4], function(item){
  console.log(item);
});
//1,2,3,4

Hint: Do you think your function should return anything?*/

var myEach = function(array, callback){
	for (var i = 0; i < array.length; i++){
		callback(array[i]);
	}
};

myEach([1,2,3,4], function(item){
  console.log(item);
});

/*2. myMap()

Let's go one level deeper.

Map is an enumerable method common to many languages.

A map function takes an array, iterates over each item in the array, and then does something to each item. What it does is up to you to define. Map usually returns a brand new array, with the new values in it.

If you're familiar with Ruby, then you'll probably have had some exposure to the #map method, and JavaScript implements its own version as well.

    Read about the Map method here.

    You can also read about the Ruby and JavaScript implementations.

Your job is to write a function called myMap(). The myMap() function will accept an array and a callback, and return a new array.

You should use myEach() inside myMap()to iterate over each item and pass it to the given callback. You're going to have to figure out how to get myMap() to return your new array.

This will help you to start to think about why callbacks don't usually use return statements.

Here's how the function you write might be used:

myMap([1,2,3,4], function(item){
  return item * 2;
});

//[2,4,6,8]
*/
var myMap = function(array, callback){
	var ar = [];
	myEach(array, function(it){
		ar.push(callback(it));
	});
	return ar;
};

myMap([1,2,3,4], function(item){
  //console.log("in callback "+item*2);
  return item * 2;
});

/*
3. myMap() continued.

returning things is a bit weird in this context. So now, you'll be implementing a version that merely collects each item and passes the new array forward.

Refactor myMap to pass your modified array forward - into another callback!

Hint: Make sure you pass in the whole modified array to your outgoing callback, and not just each individual item. Feel free to console.log the output.
*/
var myMap = function(array, callback, callback2){
	var ar = [];
	myEach(array, function(it){
		ar.push(callback(it));
	});
	callback2(ar);
};

myMap([1,2,3,4], function(item){
  //console.log("in callback "+item*2);
  return item * 2;
}, function(item){
	console.log("In the second callback "+item);
});