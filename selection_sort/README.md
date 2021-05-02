
## Pseudocode
1. While there are unsorted values remaining:
2. Find the minimum of the unsorted section.
3. Swap the minimum and the first element. 
4. The unsorted section is not 1 element shorter, repeat process for remaining unsorted elements. 

# Notes
- Similar to bubble sort, but instead of placing large values into sorted position, it
places **small values into sorted position.** 
- Takes O(n<sup>2</sup>) time and O(n) space.

# Only redeeming quality
- If you want to minimize the number of swaps you make.
- In bubble sort, you make a bunch of swaps each pass. In selection sort, you make one swap each pass.
- So if you're worried about writing to memory, then selection sort > bubble sort. 