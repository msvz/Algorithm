/* Implement BST

[22, 64, 73, 7, 89, 59, 62, 48, 44, 63]
 0    1   2  3   4   5   6   7   8   9    
 post order should print --> 22 64 7 48 44 89 63 73 59 62
 
 */
function Node(data, left, right) {
	this.data = data || 0,
	this.left = left || null,
	this.right = right || null;
}

function RandomArray(size) {
	var foo = [];
	for(var i = 0; i < size; i++) {
		foo.push(Math.ceil(Math.random() * 100));
	}
	return foo;
}

var arr = RandomArray(10),
	lastIndex = arr.length - 1;

function buildbst(n) {
	var left_child_index = 2 * n + 1,
		right_child_index = 2 * n + 2;
	
	if (n <= lastIndex) { 
		var node = new Node(arr[n]);
		if (left_child_index <= lastIndex) node.left = buildbst(left_child_index);
		if (right_child_index <= lastIndex) node.right = buildbst(right_child_index);
		return node;
	} else {
		return null;
	}
}

function postorder(node) {
	if (node !== null) {
		console.log(node.data);
		postorder(node.left);		
		postorder(node.right);
	}
}

var root = buildbst(0);
console.log(root);
postorder(root);