
function iscyclicpermutations(string1, string2)
{
  if (string1 === null || string2 === null)
  {
    return false;
  }
  if (string1.length !== string2.length)
  {
    return false;
  }
  var iscyclic = false,
  strlength = string1.length;
  // Worst case : O(n^2)
  for (var i = 0; i < strlength; i++)
  {
    // for each position, assume there will be a cycle.
    iscyclic = true;
    for (var j = 0, startIndex = i; j < strlength; j++)
    {
      if (string1[startIndex] !== string2[j])
      {
        iscyclic = false;
        break;
      }
      startIndex = (startIndex + 1) % strlength;
    }
    // if there's still cycle after comaring with each character in string2, there is a cycle
    // else continue

    if (iscyclic)
    {
      break;
    }
  }
  return iscyclic;
}
console.log(iscyclicpermutations('abcd', 'dabc')); // true
console.log(iscyclicpermutations('abca', 'xxxx')); // false
console.log(iscyclicpermutations('', 'ab')); // false
console.log(iscyclicpermutations(null, 'ab')); // false
console.log(iscyclicpermutations('abca', 'aabc')); //true
console.log(iscyclicpermutations('aaba', 'aaba')); //true
console.log(iscyclicpermutations('aaba', 'aaab')); //true
console.log(iscyclicpermutations('aaba', 'baaa')); //true
