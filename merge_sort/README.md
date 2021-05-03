
## Notes
- Exploits the fact that arrays of 0 or 1 length are always sorted.
- Converts problem from sorting an array to merging **already sorted** arrays. 

## Pseudocode: Merge
This is a helper function used to merge already sorted arrays. 
1. Create an empty array, set pointers to the first element of each array.
2. While there are elements remaining in the shorter array:
3. If the element the **first pointer** references is **less than** the element the **second pointer** references:
    1. Push the smaller element to our new array. 
    2. **Increment** the first pointer by 1. 
4. Else: the element the **second pointer** references is **less than or equal to** the element the **first pointer** references, so:
    1. Push the smaller element to our new array. 
    2. **Increment** the second pointer by 1. 
5. Once we iterate through all the elements of one array, push the rest of the elements in the second array to our results array. 

## Pseudocode: Merge-sort
1. Break up the unsorted array recursively into halves until you have arrays that are empty or 1 element.
2. Merge those arrays together using the merge helper function.