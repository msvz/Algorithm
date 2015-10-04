function TrieNode(data)
{
  this.data = data || '';
  this.fullword = false;
  this.children = [];
}

function Trie()
{
  this.root = null;
}

Trie.prototype.createroot = function() {
  this.root = new TrieNode('.');
};

Trie.prototype.insert = function(str) {
   
  var current = this.root;
  
  for (var i=0; i < str.length; i++)
  {
    var foundIndex = -1;
    var found = current.children.some(
      function (element, index)
      {
        return element.data === str[i] ? (foundIndex = index, true) : false;
      });
    
    // If found
    if (found)
    {
      current = current.children[foundIndex];
    }
    else 
    {
      var newNode = new TrieNode(str[i]);
      current.children.push(newNode);
      current = newNode;
    }
  }
  
  current.fullword = true;
  
};

Trie.prototype.exists = function(str)
{
  var current = this.root;
  var wordExists = false;
  
  for (var i=0; i < str.length; i++)
  {
    var foundIndex = -1;
    var found = current.children.some(
      function (element, index)
      {
        return element.data === str[i] ? (foundIndex = index, true) : false;
      });
    
    // If found
    if (found)
    {
      current = current.children[foundIndex];
    }
    else 
    {
      current = null;
      wordExists = false;
      break;
    }
  }
  
  if (current != null && current.fullword)
  {
    wordExists = true;
  }
  
  return wordExists;  
};
var names = ["ann", "anna", "ammy", "emma", "rob", "roger"];

var tree = new Trie();
tree.createroot();

names.forEach(function (item)
{
   tree.insert(item);
});

names.forEach(function (item)
{
  var str = tree.exists(item) ? " exists " : " does not exist";
  console.log(item + " " + str);
});

console.log(tree.exists("annay"));
console.log(tree.exists("Gaurang"));

console.log(tree);

