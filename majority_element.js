/*  
**************************************************************************************************************
Majority Element: A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element).

Write a function which takes an array and emits the majority element (if it exists), otherwise prints NONE as follows:
       I/P : 3 3 4 2 4 4 2 4 4
       O/P : 4 
	   
       I/P : 3 3 4 2 4 4 2 4
       O/P : NONE
**************************************************************************************************************
var arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
arr.sort() -> [2, 2, 3, 3, 4, 4, 4, 4, 4]
*/

function majorityElement(arr) {
	var hash = {}
	arr.forEach(function(item) {
		if (hash.hasOwnProperty(item)) {	
		  hash[item] = hash[item] + 1;
		} else {	
		  hash[item] = 1;
		}
	});

	var n = arr.length, 
		majority = "NONE";
	Object.keys(arr).forEach(function(key) { 
	   if (hash[key] > n/2) {	      
		  majority = key;
	   }
	});
	
	return majority;
}

console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4]));


/*
Moore's voting algorithm works only if majority elem is defined as > n/2.
Initialize:
	majority_elem = arr[0];
	count = 0;
*/

function votingalgoithm(arr) {
	var majority_elem = arr[0],
		count = 0,
		n = arr.length;
	
	for(var i=1; i < n; i++) {
		if(arr[i] === majority_elem) {
		  count++;
		} else {
		   if (count !== 0) {
			  count--;
		   } else {
			  majority_elem = arr[i]; 	
		   }
		}
	}
	
	count = 0;
	arr.forEach(function(elem) {
		if (elem == majority_elem) {
		  count ++;
		}
	});
	
	if (count > n/2) return majority_elem;
	else return	"NONE";
}

console.log(votingalgoithm([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log(votingalgoithm([3, 3, 4, 2, 4, 4, 2, 4]));