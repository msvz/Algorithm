/*
Write an efficient C program to find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.
[-2, -3, 4, -1, -2, 1, 5, -3]

Kadane's algo:
* Will not work if array contains all negative numbers.
* If there's one positive number, then that's the greatest sum.
*/

function largestSubArray(arr) {
	var is_positive = arr.some(function(item) {
		return item >= 0;
	});
	var largest_sum = 0,
		max = 0;
	
	if (is_positive) {
		arr.forEach(function(elem){
			max = max + elem;
			if (max < 0) {
				max = 0;
			} else if (largest_sum < max) { // compare only when max > 0 
				largest_sum = max;
			}
		});	
	} else {
		largest_sum = arr.reduce(function(curr, prev) {
			return curr + prev;
		});
	}
	
	return largest_sum;
}

console.log(largestSubArray([-2, -3, 4, -1, -2, 1, 5, -3])); // 7 
console.log(largestSubArray([-2, -3, -4, -1, -2, -1, -5, -3])); // 21