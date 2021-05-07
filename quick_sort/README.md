
## Pivot helper
- This function is responsible for arranging elements on either side of our array. 
- Given an array, it should designate an element as the pivot. 
- It should then move all elements less than the pivot to the left of the pivot, and all
elements greater than the pivot to the right of the pivot. 
    - Order of the elements on either side does not matter!
- In place. Returns the index of the pivot. 

## Notes
- Idea: Iteratively place elements in the correct position in subsections of the array. 
- Everything happens in place, so there's no merge at the end. 
- The key is the pivot helper function. The rest is recursively implementing the pivot helper on smaller subsections of the array.