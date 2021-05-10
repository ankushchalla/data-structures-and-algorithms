## Notes: Stacks
- Stacks are a Last-In-First-Out (LIFO) data structure.
- The last thing that is added in is the first thing that is removed.
- Think of a stack of plates. 
- There's more than 1 way to implement a stack.
- Only use it for insertion and removal, NOT searching and access. 

## Where stacks are used.
- Managing function invocations (the call stack).
- Undo/Redo.
- Routing (the history object aka the routes you've visited) is treated like a stack.
- Algorithms for more complicated data structures like trees and graphs. 

## Some implementation details (singly linked lists).
- Stacks: Since we require push/pop to take O(1) time, we will be adding and removing elements from
the **beginning** of our singly linked list. 
- Queues: Similar thinking, so we'll add to the tail, and remove from the head. 

## Notes: Queues
- A First In First Out (FIFO) data structure.
- Like a line for a roller coaster. 