
var hash_operations = {
  "+" : function (val1, val2) {
    return val1 + val2;
  },
  "-" : function (val1, val2) {
    return val1 - val2;
  },
  "*" : function (val1, val2) {
    return val1 * val2;
  },
  "/" : function (val1, val2) {
    return val1 / val2;
  }
};

function EvaluateReversePolishNotation(arr)
{
  var stack = [];

  for (var i = 0; i < arr.length; i++)
  { 
    // if it's an operator
    if (hash_operations.hasOwnProperty(arr[i]))
    {
        var second_operand = stack.pop();
        var first_operand = stack.pop();
      
        var result = hash_operations[arr[i]](first_operand, second_operand);
        stack.push(result);
    }
    else
    {
        stack.push(parseInt(arr[i],10));
    }
    
  }
  
  return stack.pop();
}

var result1 = EvaluateReversePolishNotation(["2", "1", "+", "3", "*"]);
var result2 = EvaluateReversePolishNotation(["4", "13", "5", "/", "+"]);

console.log(result1);
console.log(result2)

