
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

## Time complexity: O(nlogn)
1. How many times do you have to break in half an array of length n until all the pieces have 0 or 1 element? **log<sub>2</sub>n** times.
2. We also have to merge **each level**. How many elements are at each level? n elements. 
    1. For example, say we start with the array `[4,3,2,1]`. This array has 4 elements. 
    2. The first recursion, we break the array into two halves that are each 2 elements long. Total: 4 elements at this level. 
3. There are log<sub>2</sub>n levels in the recursion, with n elements at each level, which implies time complexity of O(nlogn).