function Node(children, value)
{
  this.children = children;
  this.value = value || '';
  this.right = null;
}

/*
First create right sibling at each level.
*/
function create_right_sibling(node)
{
  if (node === null) 
  {
    return;
  }
  
  var numberOfChildren = node.children.length;
  
  var queue = [];
  for (var i=0; i < numberOfChildren ; i++)
  {
    if (node.children[i].right === null && node.children[i+1])
    {
       node.children[i].right = node.children[i+1];
       queue.push(node.children[i]);
    }
  }
  
  for (var j=0; j < queue.length; j++)
  {
    create_right_sibling(queue[j]);   
  }
}

/*
   Now at each level, fill the last child's right sibling
*/
function fill_missing_child_nodes_right_sibling(node)
{
  if (node === null) 
  {
    return;
  }
  
  var numberOfChildren = node.children.length;
  var lastNodeIndex = numberOfChildren - 1;
 
  if (lastNodeIndex >= 0)
  {
    if (node.children[lastNodeIndex].right === null)
    {
      node.children[lastNodeIndex].right = find_right_sibling(node);
    }
    for (var i=0; i < numberOfChildren; i++)
    {
      fill_missing_child_nodes_right_sibling(node.children[i]);   
    }
  }
}

/*
  Right sibling will be parent node's right sibling's first child
*/
function find_right_sibling(node)
{
  if (node === null) 
  {
    return;
  }
  var current = node.right;
  var rightSibling = null;
  
  while (current != null)
    {
      if (current.children.length > 0)
      {
          rightSibling = current.children[0];
          break;
      }
      else 
      {
        current = current.right;
      }
    }
  
  return rightSibling;
}



var nodeF = new Node([], 'F');
var nodeE = new Node([], 'E');
var nodeB = new Node([nodeE, nodeF],'B');

var nodeG = new Node([], 'G');
var nodeD = new Node([nodeG], 'D');

var nodeC = new Node([], 'C');
var nodeA = new Node([nodeB, nodeC, nodeD], 'A');

/*
  A 
|    |  |
B    C  D
| |     |
E F     G
*/

// nodeA is root

// This will create the above structure with right siblings except the right sibling for the child's last node.
// Example: F's right children will not be G in this pass.
create_right_sibling(nodeA); 

// This will do another pass through the tree and fill in the child nodes with right siblings. 
// Now this will set F's right node to G
fill_missing_child_nodes_right_sibling(nodeA); 

console.log(nodeB.right.value);
console.log(nodeC.right.value);
console.log(nodeE.right.value);
console.log(nodeF.right.value);
