**Idea: Larger values "bubble" to the top.**

## Pseudocode
1. For all unsorted values:
2. If the current value is larger than the next value, swap.
3. Repeat process for remaining unsorted values.

## Notes
- The sorted section at the end of the array gets larger and larger with each iteration. 
- Time complexity: O(n<sup>2</sup>), space: O(1).
- Optimization: If no swaps are made, tell the program to stop sorting.
    - Basically short circuiting the code. If you didn't swap the last round, 
        you're not gonna swap this round. 
    - Thus, on 'almost' sorted arrays, this optimized version of bubble sort takes O(1) time.