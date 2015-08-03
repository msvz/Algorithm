function RandomArray(size) {
  var arr = [];
  for (var i = 0; i < size; i++) 
  {
    arr.push(Math.ceil(Math.random() * 100));
  }
  return arr;
}

function mergesort(m) {
  
  if (m.length < 2) 
  {
    return m;
  } 
  else 
  {
    var middle = Math.floor(m.length / 2),
    	// slice takes 2nd param as length
        left = mergesort(m.slice(0, middle)),
        right = mergesort(m.slice(middle)),
        result = merge(left, right);
    return result;
  }
}

// Given 2 sorted arrays, do the merge.
function merge(left_array, right_array) {
	var left_ptr = 0,	
		right_ptr = 0,
		sorted_arr = [], left, right;

	while (left_ptr < left_array.length &&
		      right_ptr < right_array.length) 
	{
		left = left_array[left_ptr];
		right = right_array[right_ptr];
		if (left < right) 
		{
			sorted_arr.push(left);
			left_ptr++;
		} 
		else 
		{
			sorted_arr.push(right);
			right_ptr++;
		}
	}
	
  	while (left_ptr < left_array.length) 
  	{
		sorted_arr.push(left_array[left_ptr++]);
	}
	
	while (right_ptr < right_array.length) 
	{
		sorted_arr.push(right_array[right_ptr++]);
  	}

	return sorted_arr;
}

var arr = RandomArray(10);
console.log("Original Array: " + arr);
console.log("Sorted Array: " + mergesort(arr));