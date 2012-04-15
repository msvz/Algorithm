/* 
**************************************************************************************************************
Given an array A[] and a number x, check for pair in A[] with sum as x

soln 1: n square solution. Loop
soln 2: Sort using quicksort. (n log n + n log n)
		a + b = k 
		for every a, find k - a.
soln 3: store key, count
        loop through array -> find k - arr
**************************************************************************************************************
*/ 

function findPairs (arr, k) {
  hash = {};
  arr.forEach(function(item) {
	if (hash.hasOwnProperty(item)) {	
	  hash[item] = hash[item] + 1;
	} else {	
	  hash[item] = 0;
	}
  });
  arr.forEach(function(a) {
	b = k - a;	
	if(hash.hasOwnProperty(b)) {
	  console.log(a + "+" + b + "=" + k);	  
	}
  });
}
findPairs([ 1, 2, 2, 3, 9, 6, 29, 99, 66, 33, 22,77, 62, 37 ], 99); 