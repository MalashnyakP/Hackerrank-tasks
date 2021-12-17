/*
    Назва задачі: Merge Two Binary Trees
    Рівень задачі: Easy
    Опис:
    You are given two binary trees root1 and root2.

    Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
    You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up
    as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

    Return the merged tree.

    Example:
    Input:  root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
    Output: [3,4,5,5,4,null,7]

    Explanation: If we have no roots we return null.
    If second node is null we create new node with node1 value and call mergeTrees for it left and right node with (node1.left, null) and
    (null, node1.right) params. Same for if first node is null.
    If both nodes isn't null we create new node with sum of nodes values and call mergeTrees for it left and right node with
    (node1.left, node2.left) and (node1.right, node2.right) params

    Time complexity: O(n)
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) {
    return null;
  } else if (root1 && !root2) {
    const node = new TreeNode(root1.val);
    node.left = mergeTrees(root1.left, null);
    node.right = mergeTrees(root1.right, null);
    return node;
  } else if (!root1 && root2) {
    const node = new TreeNode(root2.val);
    node.left = mergeTrees(null, root2.left);
    node.right = mergeTrees(null, root2.right);
    return node;
  } else {
    const node = new TreeNode(root1.val + root2.val);
    node.left = mergeTrees(root1.left, root2.left);
    node.right = mergeTrees(root1.right, root2.right);
    return node;
  }
}
