## Tree Traversal: Intro
- Main question: For ANY tree (NOT just BST), what's the best way to get to every element?

## Breadth First Search
- We search through the tree horizontally. 
- root -> first child -> second child...first child's first child -> first child's second child -> second child's first child, etc. 

## Notes: BFS
- A queue keeps track of what still needs to be "visited."

## Depth First Search
- Down first, instead of horizontally. 
- PreOrder: Visit a node -> visit everything on the left recursively -> visit everything on the right recursively. 
- PostOrder: left -> right -> node. 
- InOrder: left -> node -> right.

