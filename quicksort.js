/*
Implement 
1. Quicksort. (done)
2. provide a callback for a compare function (todo).
3. Time to sort. (done) 

*/
	
function RandomArray(size) {
	var foo = [];
	for(var i = 0; i < size; i++) {
		foo.push(Math.ceil(Math.random() * 100));
	}
	return foo;
}

Array.prototype.quicksort = function() {
  var complexity = 0, //Number of times the qsort is called. For worst case, it's called array.length - 1 times.
    a = this,
    fixpivot = function (lower, upper) {
            var pivot = lower,
                    p = lower + 1,
                    q = upper;
                    
            while (q >= p) { // q should cross p. Only then you can swap.
                while(a[pivot] > a[p]) p++;
                while(a[pivot] <= a[q]) q--;
                if (q>p) {
                    [a[p], a[q]] = [a[q], a[p]];
                    p++;
                    q--;     
                }        
            }
            [a[pivot], a[p-1]] = [a[p-1], a[pivot]]; // p - 1 = q
            return p-1;
         },
    qsort = function (lower, upper) {
            var pivot_index;
            if (upper > lower) {
                pivot_index = fixpivot(lower, upper);
                complexity++;
                qsort(lower, pivot_index - 1);
                qsort(pivot_index + 1, upper);        
            }
        },
    sortedarr = (function () {
        var lastindex = arr.length - 1;
        qsort(0, lastindex); 
        return a;
    })();
	
	
  return sortedarr;
};

var arr = RandomArray(10);
console.log(arr);
arr.quicksort();
console.log(arr);