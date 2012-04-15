function palindromeAtIndex(str, index, evenIndex) {
	var len = str.length,
		  empty = "";
	
	if (index >= len) {		
		return empty; // console.log("Index out of bounds.");
	}
	
	if (len === 1) {       
		return empty; // console.log(str);
	}

	var leftIndex = index ,
			rightIndex = evenIndex || index,
			lastIndex = str.length - 1,		
			found = false;
	
	if (!evenIndex) { leftIndex--; rightIndex++; }
	
	while(rightIndex <= lastIndex && leftIndex >=0) {
		if (str[leftIndex] === str[rightIndex]) {
			rightIndex++;
			leftIndex--;
			found = true;
		} else {
			break;
		}	
	}

  if (found) {	
		return str.substring(leftIndex + 1, rightIndex); // substring(A,B) extracts characters from indexA up to but not including indexB
	} else {
		return empty; //console.log("Palindrome does not exist.");
	}
}

function longestPalindrome(str) {
	var longest_len = 0,
			longestPalindrome = '',
			palindrome_even = '',
			palindrome_odd = '';
	
	str.split("").forEach(function(elem, index) { // complexity: o(n^2)
		palindrome_odd = palindromeAtIndex(str, index);
		
		if (index + 1 && elem === str[index + 1]) {
			palindrome_even = palindromeAtIndex(str, index, index + 1);
		}
		
		palindrome = palindrome_even.length > palindrome_odd.length ? palindrome_even : palindrome_odd;

		if (palindrome.length > longest_len) {
			longest_len = palindrome.length;
			longestPalindrome = palindrome;
		}
	});
	
	if (longest_len > 0) {
		console.log(longestPalindrome);
	} else {
		console.log("Palindrome does not exist in the string.");
	}
}

longestPalindrome("a"); // a single element array (Not a palindrome.)
longestPalindrome("aa"); // even palindrome, exists
longestPalindrome("abcbba");// "bcb" even string, odd palindrome (exist)
longestPalindrome("abbba");// "abbba" odd palindrome (exists)
longestPalindrome("ggggggc"); // even palindrome
longestPalindrome("cabad"); // "aba" (exists)
longestPalindrome("abc"); // Palindrome does not exist.
longestPalindrome("abcdefab00bagggggggg"); // longest is gggggggg.
longestPalindrome("abcdabaccc"); // returns the first longest. "aba"