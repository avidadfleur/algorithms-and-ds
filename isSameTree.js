const treeAsArray = (tree) => {
    if (!tree) return [];
    const array = [];

    const traverseNode = (node) => {
        array.push(node.val)
        node.left ? traverseNode(node.left) : array.push(null)
        node.right ? traverseNode(node.right) : array.push(null)
    }

    traverseNode(tree);
    return array;
}

var isSameTree = function(p, q) {
    const firstArray = treeAsArray(p);
    const secondArray = treeAsArray(q);
    
    let i = 0;

    while (i < firstArray.length) {
        if (firstArray[i] === secondArray[i]) {
            i++;
        } else {
            break;
        }

    }

    return i === firstArray.length && i === secondArray.length;
};
