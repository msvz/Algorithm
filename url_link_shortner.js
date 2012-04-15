/*
* I want a Link Shortener with an API that I can call from my web-app. I want to pass in a URL and I want the Link Shortener to give back a shortened URL that I can present to my user
* When the shortened URL is visited by my users, I want the Link Shortener to redirect to the original URL
* I want an API where I can query stats around a particular shortened URL giving me details about the users that have visited that URL with as much information as you can give me about each person.

1099 ->  http://foobar.com/ 			 -> http://tel/uj
10099 -> http://foobar.com/blah/bar.html -> http://tel/7sj 

    Models are classes that talk to the databse. You find, create and save models, so you don’t (usually) have to write SQL. Rails has a class to handle the magic of saving to a database when a model is updated.
	
    Controllers take user input (like a URL) and decide what to do (show a page, order an item, post a comment). They may initially have business logic, like finding the right models or changing data. As your rails ninjitsu improves, constantly refactor and move business logic into the model (fat model, skinny controller). Ideally, controllers just take inputs, call model methods, and pass outputs to the view (including error messages).
	
    Views display the output, usually HTML. They use ERB and this part of Rails is like PHP - you use HTML templates with some Ruby variables thrown in. Rails also makes it easy to create views as XML (for web services/RSS feeds) or JSON (for AJAX calls).

10099 / 36 -> Q:280, R:19
280 / 36 -> Q:7, R:28
7 / 36 -> Q:0, R:7

10099 = 7* 36^2 + 28 * 36^1 + 19* 36^0

280 * 36 + 19 
= (36 * 7 + 28) * 36 + 19 
= 7 * 36^2 + 28 * 36 + 19 * 36^0


Mapping country codes to numbers
	aa = 0 * 26^1 + 0 * 26 ^ 0  = 0
	ab = 0 * 26^1 + 1 * 26 ^ 0  = 1
	ac = 0 * 26^1 + 2 * 26 ^ 0  = 2
	ad = 0 * 26^1 + 3 * 26 ^ 0  = 3
	ae = 0 * 26^1 + 4 * 26 ^ 0  = 4

	zz = 25 * 26^1 + 25 * 26^0 = 675

*/

function atoi(a) {
	return a.charCodeAt(0);
}

function itoa(i) {
	return String.fromCharCode(i);
}

function range(start, end) {
	var arr = [];
	for(i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}

var base36_hash = (function constructBase36Table() {
	var arr = range(48,57).concat(			
				range(97,122)),
		hash = {};
	arr.forEach(function(num, index) {		
		hash[index.toString()] = itoa(num);
	});
	return hash;
})();

var reverse_base36_hash = (function constructReverse36Table() {
	var hash = {};
	Object.keys(base36_hash).forEach(function(key) {
		hash[base36_hash[key]] = parseInt(key, 10);
	});
	return hash;
})();

function base36Encode(num) {
	var arr = [], 
		quotient = 0, 
		remainder = 0;
	
	while (num !== 0) {
		quotient = num / 36;
		remainder = num % 36;		
		arr.push(remainder.toString());
		num = Math.floor(quotient);		
	}
	var base36_string = '';
	arr.reverse().forEach(function(elem) {
		base36_string += base36_hash[elem];
	});
	return base36_string;
}

function reverseEncode(encodeStr) {
	var mult = encodeStr.length - 1,
		id = 0;
		
	encodeStr.split("").forEach(function(elem) {
		val = reverse_base36_hash[elem];
		console.log(val);
		id += val * Math.pow(36, mult);
		mult--;
	});
		
	return id;
}

console.log(base36Encode(1099)); //uj
console.log(base36Encode(10099));//7sj
console.log(base36Encode(100099));//258j

console.log(reverseEncode("uj")); //uj
console.log(reverseEncode("7sj"));//7sj
console.log(reverseEncode("258j"));//258j